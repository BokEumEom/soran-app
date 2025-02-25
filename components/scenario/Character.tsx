import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image'; // expo-image 컴포넌트
import { EmotionContext } from '../../contexts/EmotionContext';

// 베이스 URL 공통 상수
const BASE_URL =
  'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/character-images';

export const Character = () => {
  const { emotionState } = useContext(EmotionContext);

  const getCharacterImage = () => {
    const emotions = [
      {
        condition: emotionState.stress > 70,
        image: { uri: `${BASE_URL}/character_stressed.png` },
      },
      {
        condition: emotionState.happiness > 70,
        image: { uri: `${BASE_URL}/character_happy.png` },
      },
      {
        condition: emotionState.anxiety > 70,
        image: { uri: `${BASE_URL}/character_anxious.png` },
      },
      {
        condition: emotionState.confidence > 70,
        image: { uri: `${BASE_URL}/character_confident.png` },
      },
    ];

    // 기본 이미지도 CDN
    const defaultImage = {
      uri: `${BASE_URL}/character_natural.png`,
    };

    // emotionState 기준으로 해당 이미지 결정
    return emotions.find((emotion) => emotion.condition)?.image || defaultImage;
  };

  return <Image source={getCharacterImage()} style={styles.character} />;
};

const styles = StyleSheet.create({
  character: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
});
