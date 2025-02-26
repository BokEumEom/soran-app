import { useState, useEffect, useCallback } from 'react';
import { Asset } from 'expo-asset';
import { shuffleArray } from '@/utils/helpers';
import { cardImages } from '@/constants/games/memoryGame';

export type MemoryCard = {
  id: string;
  image: any;
  isFlipped: boolean;
  isMatched: boolean;
};

// 효과적인 이미지 프리로딩
const preloadImages = async () => {
  try {
    const imageAssets = cardImages.map(image => 
      typeof image === 'number' 
        ? Asset.fromModule(image).downloadAsync()
        : Asset.fromURI(image.uri).downloadAsync()
    );
    await Promise.all(imageAssets);
    return true;
  } catch (error) {
    console.error('Failed to preload images:', error);
    return false;
  }
};

export function useMemoryGame() {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<MemoryCard[]>([]);
  const [score, setScore] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);
  const [isAssetsLoaded, setIsAssetsLoaded] = useState<boolean>(false);

  // 게임 초기화 함수
  const initializeGame = useCallback(() => {
    const initialCards = shuffleArray(
      [...cardImages, ...cardImages].map((image, index) => ({
        id: `${index}`,
        image,
        isFlipped: false,
        isMatched: false,
      }))
    );
    setCards(initialCards);
    setScore(0);
    setMoves(0);
    setGameCompleted(false);
  }, []);

  // 카드 클릭 처리 함수 최적화
  const handleCardPress = useCallback((card: MemoryCard) => {
    if (card.isFlipped || card.isMatched) return;
    
    setFlippedCards(prevFlipped => {
      if (prevFlipped.length === 2) return prevFlipped;
      
      const newFlipped = [...prevFlipped, { ...card, isFlipped: true }];
      
      setCards(prevCards => 
        prevCards.map(c => c.id === card.id ? { ...c, isFlipped: true } : c)
      );
      
      // 두 카드가 뒤집혔을 때 처리
      if (newFlipped.length === 2) {
        setMoves(prevMoves => prevMoves + 1);
        
        // 매치된 경우
        if (newFlipped[0].image === card.image) {
          setScore(prevScore => prevScore + 1);
          setCards(prevCards =>
            prevCards.map(c => 
              c.image === card.image ? { ...c, isMatched: true } : c
            )
          );
          return [];
        } 
        // 매치되지 않은 경우
        else {
          setTimeout(() => {
            setCards(prevCards =>
              prevCards.map(c =>
                (c.id === card.id || c.id === newFlipped[0].id) && !c.isMatched
                  ? { ...c, isFlipped: false }
                  : c
              )
            );
            setFlippedCards([]);
          }, 700);
        }
      }
      
      return newFlipped;
    });
  }, []);

  // 리소스 로딩 및 오류 처리 개선
  useEffect(() => {
    const loadAssets = async () => {
      try {
        const success = await preloadImages();
        if (success) {
          setIsAssetsLoaded(true);
          initializeGame();
        } else {
          console.error('Failed to load game assets');
          // 여기에 사용자에게 오류 메시지를 보여주는 로직 추가
        }
      } catch (error) {
        console.error('Error initializing game:', error);
        // 오류 처리 로직
      }
    };
    loadAssets();
  }, [initializeGame]);

  // 게임 완료 체크
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      setGameCompleted(true);
    }
  }, [cards]);

  return {
    cards,
    score,
    moves,
    gameCompleted,
    isAssetsLoaded,
    handleCardPress,
    initializeGame,
    setGameCompleted
  };
}

export default useMemoryGame; 