import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { Header } from '../../components/fairytale/Header';
import Card from '@/components/memory/Card';
import { Button } from '@/components/common/Button';
import ConfirmationModal from '@/components/common/Modal';
import ResultModal from '@/components/game/ResultModal';
import useMemoryGame, { MemoryCard } from '@/hooks/useMemoryGame';

// 메모이제이션된 카드 컴포넌트
const MemoizedCard = React.memo(Card);

export default function MemoryGameScreen() {
  const {
    cards,
    score, 
    moves,
    gameCompleted,
    isAssetsLoaded,
    handleCardPress,
    initializeGame,
    setGameCompleted
  } = useMemoryGame();
  
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleNewGamePress = () => {
    setShowModal(true);
  };

  const confirmNewGame = () => {
    setShowModal(false);
    initializeGame();
  };

  const renderCard = useCallback(({ item }: { item: MemoryCard }) => (
    <MemoizedCard card={item} onPress={() => handleCardPress(item)} />
  ), [handleCardPress]);

  if (!isAssetsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.scoreText}>Score: {score} | Moves: {moves}</Text>

        <FlatList
          data={cards}
          keyExtractor={(item) => item.id}
          numColumns={4}
          renderItem={renderCard}
          contentContainerStyle={styles.cardsContainer}
          removeClippedSubviews={true}
          maxToRenderPerBatch={16}
          windowSize={5}
        />

        <Button title="New Game" onPress={handleNewGamePress} style={styles.restartButton} />
      </View>

      <ConfirmationModal
        visible={showModal}
        onConfirm={confirmNewGame}
        onCancel={() => setShowModal(false)}
        message="Are you sure you want to start a new game? All progress will be lost."
        confirmText="Start New Game"
        cancelText="Cancel"
      />

      <ResultModal
        result={gameCompleted ? `You matched all cards in ${moves} moves!` : null}
        onClose={() => setGameCompleted(false)}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');
const CARD_SIZE = width / 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  restartButton: {
    marginTop: 20,
    width: '60%',
  },
});
