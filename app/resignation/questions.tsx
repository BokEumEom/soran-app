import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { QUESTIONS } from '@/constants/resignation/questions';
import CustomText from "@/components/common/CustomText";

const { width } = Dimensions.get('window');

export default function QuestionsScreen() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // Animated value for question fade-in effect
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // Animated value for scale effect
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Animate fade in and scale in whenever currentQuestionIndex changes
  useEffect(() => {
    fadeAnim.setValue(0);
    scaleAnim.setValue(0.95);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentQuestionIndex, fadeAnim, scaleAnim]);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [QUESTIONS[currentQuestionIndex].id]: answer,
    }));
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push({
        pathname: '/resignation/result',
        params: { answers: JSON.stringify(answers) },
      });
    }
  };

  // Progress fraction
  const progress = (currentQuestionIndex + 1) / QUESTIONS.length;

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      <CustomText style={styles.progressText}>
        질문 {currentQuestionIndex + 1} / {QUESTIONS.length}
      </CustomText>
      {/* Question Card with fade & scale animation */}
      <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        <CustomText style={styles.question}>
          {QUESTIONS[currentQuestionIndex].text}
        </CustomText>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.yesButton]}
          onPress={() => handleAnswer('yes')}
          activeOpacity={0.8}
        >
          <CustomText style={styles.buttonText}>예</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.noButton]}
          onPress={() => handleAnswer('no')}
          activeOpacity={0.8}
        >
          <CustomText style={styles.buttonText}>아니오</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfaf6',
    justifyContent: 'center',
    padding: 20,
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  progressText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    lineHeight: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  yesButton: {
    backgroundColor: '#4CAF50',
  },
  noButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
