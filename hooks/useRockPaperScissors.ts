import { useState, useRef, useEffect, useCallback } from 'react';
import { Animated } from 'react-native';
import { Choice, determineWinner, getRandomChoice, choices } from '@/utils/play';

/**
 * 공통 베이스 URL (CDN)
 */
const BASE_URL = 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/game-images';

/**
 * LED 이미지 매핑 (CDN)
 */
const ledImages = {
  Rock: { uri: `${BASE_URL}/rock-led.png` },
  Scissors: { uri: `${BASE_URL}/scissors-led.png` },
  Paper: { uri: `${BASE_URL}/paper-led.png` },
};

/**
 * 초기 이미지를 Rock LED로 설정 (CDN)
 */
const initialImage = { uri: `${BASE_URL}/rock-led.png` };

type GameResult = 'You win!' | 'You lose!' | 'It\'s a draw!';

export const useRockPaperScissors = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });
  const [currentImage, setCurrentImage] = useState(initialImage);
  const [userSelected, setUserSelected] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const scaleValues = choices.map(() => useRef(new Animated.Value(1)).current);
  const opacity = useRef(new Animated.Value(1)).current;
  const imageInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // LED 이미지 순환 애니메이션
    if (!userSelected) {
      let index = 0;
      imageInterval.current = setInterval(() => {
        setCurrentImage(ledImages[choices[index]]);
        triggerFade();
        index = (index + 1) % choices.length;
      }, 500);

      return () => {
        if (imageInterval.current) {
          clearInterval(imageInterval.current);
        }
      };
    }
  }, [userSelected]);

  useEffect(() => {
    if (result) {
      setShowResultModal(true); // 결과가 설정되면 Modal을 열도록 설정
    }
  }, [result]);

  const playGame = (choice: Choice) => {
    setUserSelected(true);
    setUserChoice(choice);

    // 사용자 선택 LED 업데이트
    updateLEDImage(choice);

    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      const computer = getRandomChoice();
      setComputerChoice(computer);

      // 컴퓨터 선택 LED 업데이트
      setTimeout(() => {
        updateLEDImage(computer);
        calculateResult(choice, computer);
      }, 500);
    });
  };

  const calculateResult = (userChoice: Choice, computerChoice: Choice) => {
    const gameResult = determineWinner(userChoice, computerChoice);
    setResult(gameResult);
    updateScore(gameResult);

    // LED 애니메이션 재시작 대기
    setTimeout(() => {
      setUserSelected(false);
    }, 1000);
  };

  const updateScore = (gameResult: GameResult) => {
    if (gameResult === 'You win!') {
      setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
    } else if (gameResult === 'You lose!') {
      setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
    } else {
      setScore((prev) => ({ ...prev, draws: prev.draws + 1 }));
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScore({ wins: 0, losses: 0, draws: 0 });
    setUserSelected(false);
    setCurrentImage(initialImage);
    setShowResultModal(false);
  };

  const updateLEDImage = (choice: Choice) => {
    setCurrentImage(ledImages[choice]);
  };

  const triggerFade = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    setShowResultModal(false);
    setResult(null);
  };

  // useCallback을 사용하여 함수 재생성 방지
  const handlePressIn = useCallback((index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  }, [scaleValues]);

  const handlePressOut = useCallback((index: number, choice: Choice) => {
    Animated.spring(scaleValues[index], {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    playGame(choice);
  }, [scaleValues, playGame]);

  // 메모이제이션된 값 반환
  return {
    userChoice,
    computerChoice,
    result,
    score,
    currentImage,
    scaleValues,
    opacity,
    showResultModal,
    playGame,
    resetGame,
    closeModal,
    triggerFade,
    handlePressIn,
    handlePressOut,
  };
};
