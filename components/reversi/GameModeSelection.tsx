import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type GameModeSelectionProps = {
  onModeSelect: (singlePlayer: boolean, aiAs: 'black' | 'white' | null) => void;
  onStartGame: () => void;
  selectedMode: { singlePlayer: boolean; aiAs: 'black' | 'white' | null };
};

// AnimatedTouchableOpacity 생성
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

// 버튼에 스케일 애니메이션을 적용한 커스텀 컴포넌트
const AnimatedButton: React.FC<{
  onPress: () => void;
  style?: any;
  children: React.ReactNode;
}> = ({ onPress, style, children }) => {
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedTouchableOpacity
      activeOpacity={0.8}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style={[style, { transform: [{ scale }] }]}
    >
      {children}
    </AnimatedTouchableOpacity>
  );
};

const GameModeSelection: React.FC<GameModeSelectionProps> = ({
  onModeSelect,
  onStartGame,
  selectedMode,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Othello</Text>
      <Text style={styles.subtitle}>Choose Game Mode</Text>

      <AnimatedButton
        style={[
          styles.button,
          selectedMode.singlePlayer && selectedMode.aiAs === 'black' && styles.buttonSelected,
        ]}
        onPress={() => onModeSelect(true, 'black')}
      >
        <Text style={styles.buttonText}>Play Against AI (You: White)</Text>
      </AnimatedButton>

      <AnimatedButton
        style={[
          styles.button,
          selectedMode.singlePlayer && selectedMode.aiAs === 'white' && styles.buttonSelected,
        ]}
        onPress={() => onModeSelect(true, 'white')}
      >
        <Text style={styles.buttonText}>Play Against AI (You: Black)</Text>
      </AnimatedButton>

      <AnimatedButton
        style={[styles.button, !selectedMode.singlePlayer && styles.buttonSelected]}
        onPress={() => onModeSelect(false, null)}
      >
        <Text style={styles.buttonText}>Two Players</Text>
      </AnimatedButton>

      <AnimatedButton style={styles.startButton} onPress={onStartGame}>
        <Text style={styles.startButtonText}>Start Game</Text>
      </AnimatedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2E8B57',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: SCREEN_WIDTH * 0.8,
    elevation: 4,
  },
  buttonSelected: {
    backgroundColor: '#3CB371',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
    width: SCREEN_WIDTH * 0.8,
    elevation: 4,
  },
  startButtonText: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default GameModeSelection;
