import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';
import { QUESTIONS } from '@/constants/resignation/questions';
import CustomText from "@/components/common/CustomText";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function QuestionsScreen() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // Animated value for question fade-in effect
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // Animated value for scale effect for question card
  const scaleAnim = useRef(new Animated.Value(1)).current;
  // Animated value for progress heart scale (progress-based)
  const progressScale = useRef(new Animated.Value(0.8)).current;
  // Animated value for heartbeat effect on press
  const heartbeatAnim = useRef(new Animated.Value(1)).current;

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

  // Animate progress heart scale based on current question index
  useEffect(() => {
    // 스케일 계산식: 시작 0.8에서 최대 1.7 (0.8 + 0.9)
    const scale = 0.8 + ((currentQuestionIndex + 1) / QUESTIONS.length) * 0.9;
    Animated.spring(progressScale, {
      toValue: scale,
      useNativeDriver: true,
    }).start();
  }, [currentQuestionIndex, progressScale]);

  // Heartbeat 애니메이션: 하트를 클릭할 때 작동
  const triggerHeartbeat = () => {
    Animated.sequence([
      Animated.timing(heartbeatAnim, {
        toValue: 1.2, // heartbeat 효과를 위해 약간 확대
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(heartbeatAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

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

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* 하트 영역: progressScale과 heartbeatAnim을 별도 Animated.View로 분리 */}
        <View style={styles.heartContainer}>
          <Animated.View style={{ transform: [{ scale: progressScale }] }}>
            <TouchableWithoutFeedback onPress={triggerHeartbeat}>
              <Animated.View style={{ transform: [{ scale: heartbeatAnim }] }}>
                {/* 하트 아이콘의 size를 64로 키움 */}
                <MaterialCommunityIcons name="heart" size={64} color="#87CEFA" />
              </Animated.View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </View>
        {/* 텍스트 영역: 고정 높이(150px)로 하단에 배치 */}
        <View style={styles.textContainer}>
          <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
            <CustomText style={styles.question}>
              {QUESTIONS[currentQuestionIndex].text}
            </CustomText>
          </Animated.View>
          <CustomText style={styles.progressText}>
            Q.{currentQuestionIndex + 1} / {QUESTIONS.length}
          </CustomText>
        </View>
      </View>
      
      {/* 버튼 영역 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.halfButton, styles.yesButton]}
          onPress={() => handleAnswer('yes')}
          activeOpacity={0.8}
        >
          <CustomText style={styles.yesButtonText}>예</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.halfButton, styles.noButton]}
          onPress={() => handleAnswer('no')}
          activeOpacity={0.8}
        >
          <CustomText style={styles.noButtonText}>아니오</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0effb',
    padding: 20,
    paddingBottom: 120,
  },
  content: {
    flex: 1,
  },
  heartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: 150,
    justifyContent: 'flex-end',
  },
  progressText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    textAlign: 'right',
  },
  card: {
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 30,
    marginBottom: 10,
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
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  halfButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',

    elevation: 5,
  },
  yesButton: {
    backgroundColor: '#87CEFA',
  },
  noButton: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    borderColor: '#87CEFA',
  },
  yesButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  noButtonText: {
    color: '#1565C0',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
