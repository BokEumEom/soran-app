import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import CustomText from '@/components/common/CustomText';
import { emotionStates } from '@/constants/emotions/emotionStates';
import { CheckCircle, XCircle } from 'lucide-react-native';

type QuestionSectionProps = {
  section: { title: string; questions: string[]; conclusions: any };
  onNext: (answers: boolean[]) => void;
  emotionKey: string; // EmotionsFlow에서 전달받는 감정 키
};

export default function QuestionSection({ section, onNext, emotionKey }: QuestionSectionProps) {
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 질문이 바뀔 때마다 fade 애니메이션을 재생합니다.
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [currentQuestion, fadeAnim]);

  const selectedEmotion = emotionStates.find(e => e.key === emotionKey);

  const handleAnswer = (answer: boolean) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentQuestion < section.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onNext(updatedAnswers);
    }
  };

  return (
    <ImageBackground
      source={selectedEmotion ? selectedEmotion.icon : undefined} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <CustomText style={styles.title}>{section.title}</CustomText>
        
        {/* Animated.View를 사용하여 질문 컨테이너에 페이드인 효과 적용 */}
        <Animated.View style={[styles.questionContainer, { opacity: fadeAnim }]}>
          <CustomText style={styles.question}>
            {section.questions[currentQuestion]}
          </CustomText>
          
          <View style={styles.questionNumberBadge}>
            <CustomText style={styles.questionNumberText}>
              {currentQuestion + 1}/{section.questions.length}
            </CustomText>
          </View>
        </Animated.View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.answerCard, { borderColor: '#4CAF50' }]}
            onPress={() => handleAnswer(true)}
          >
            <CheckCircle size={24} color="#4CAF50" />
            <CustomText style={styles.answerText}>네, 그렇습니다</CustomText>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.answerCard, { borderColor: '#F44336' }]}
            onPress={() => handleAnswer(false)}
          >
            <XCircle size={24} color="#F44336" />
            <CustomText style={styles.answerText}>아니요</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center', // 질문, 버튼 중앙 배치
    backgroundColor: 'rgba(255, 241, 230, 0.7)', // 배경 이미지 위에 반투명 레이어로 텍스트 가독성 향상
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 30,
  },
  questionContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 변경: 배경 투명도 조절
    borderRadius: 15,                        // 변경: 모서리를 둥글게 처리
    marginBottom: 30,
    elevation: 3,
    position: 'relative',
  },
  question: {
    fontSize: 20,      // 변경: 글자 크기 증가
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 28,    // 변경: 줄 간격 증가
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  answerCard: {
    width: '80%',
    marginBottom: 15,
    borderWidth: 2,
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 3,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  answerText: {
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 8, // 아이콘과 텍스트 사이 여백 추가
  },
  questionNumberBadge: {
    position: 'absolute',
    top: -15,
    right: 20,
    backgroundColor: '#FF9800',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  questionNumberText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
