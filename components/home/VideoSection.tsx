import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';

const messages = [
  "지금도 충분히 잘하고 있어요 🎉",
  "당신은 소중한 사람입니다 💖",
  "당신의 있는 그대로의 모습이 소중합니다 😊",
  "잠시 쉬어가도 괜찮아요 🌱",
  "당신의 가능성을 믿어요 🌟",
];

// 공통 CDN 경로 (이미지)
const BASE_URL = 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/images';

const VideoSection: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
    }, 3000); // 3초마다 메시지 변경
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* 말풍선 */}
      <View style={styles.speechBubble}>
        <Text style={styles.speechText}>{messages[currentMessage]}</Text>
      </View>

      {/* GIF */}
      <View style={styles.gifContainer}>
        <Image
          source={{ uri: `${BASE_URL}/soran.gif` }}
          style={styles.gif}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  speechBubble: {
    maxWidth: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 2,
    zIndex: 1,
    marginLeft: -45,
  },
  speechText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  gifContainer: {
    position: 'absolute',
    right: -35,
    bottom: 3,
    zIndex: 0,
  },
  gif: {
    width: width * 0.4,
    height: width * 0.3,
  },
});

export default VideoSection;
