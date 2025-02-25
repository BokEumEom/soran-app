import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { EmotionContext } from '../../contexts/EmotionContext';
import CustomText from "@/components/common/CustomText";

export const EmotionBar = () => {
  const { emotionState } = useContext(EmotionContext);
  const emotions = ['stress', 'happiness', 'confidence', 'anxiety'];

  return (
    <View style={styles.container}>
      {emotions.map((emotion) => (
        <View key={emotion} style={styles.barContainer}>
          <CustomText style={styles.label}>{capitalize(emotion)}</CustomText>
          <View style={styles.barBackground}>
            <View
              style={[
                styles.barFill,
                {
                  width: `${emotionState[emotion]}%`,
                  backgroundColor: getEmotionColor(emotion),
                },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const getEmotionColor = (emotion: string) => {
  switch (emotion) {
    case 'stress':
      return '#FF6B6B'; // Slightly lighter red for stress
    case 'happiness':
      return '#FFD700'; // Yellow for happiness
    case 'confidence':
      return '#48C774'; // Bright green for confidence
    case 'anxiety':
      return '#0077B6'; // Deep blue for anxiety
    default:
      return '#CCC';
  }
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 20,
  },
  barContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2D3142',
  },
  barBackground: {
    height: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 7.5, // More rounded corners
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 7.5, // Rounded fill as well
  },
});
