// app/self-praise/index.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ComplimentCard from '../../components/self-praise/ComplimentCard';
import compliments from '../../constants/self-praise/compliments';
import characters from '../../constants/self-praise/characters';

const Home = () => {
  const [complimentIndex, setComplimentIndex] = useState(0);
  const [compliment, setCompliment] = useState(compliments[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleGetCompliment = () => {
    setAnimate(false); // 애니메이션 리셋
    setTimeout(() => {
      const nextComplimentIndex = (complimentIndex + 1) % compliments.length;
      const nextImageIndex = (currentImageIndex + 1) % characters.length;
      setComplimentIndex(nextComplimentIndex);
      setCurrentImageIndex(nextImageIndex);
      setCompliment(compliments[nextComplimentIndex]);
      setAnimate(true); // 새 애니메이션 트리거
    }, 300);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ComplimentCard
          message={compliment}
          animate={animate}
          characterSrc={characters[currentImageIndex]}
        />
        <TouchableOpacity style={styles.button} onPress={handleGetCompliment}>
          <Text style={styles.buttonText}>칭찬 받기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    backgroundColor: '#fff5e6',
  },
  content: {
    flex: 1,
    marginBottom: 80,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#ffcc00',
    borderRadius: 10,
    marginTop: 30,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'HSYuji-Regular',
    fontWeight: '600',
  },
});

export default Home;
