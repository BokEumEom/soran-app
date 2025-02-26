// components/emotions/QuestionSection.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from '../common/Button';
import CustomText from '@/components/common/CustomText';
import { emotionStates } from '@/constants/emotions/emotionStates';
import { Indicator } from './Indicator';

type QuestionSectionProps = {
  section: { title: string; questions: string[]; conclusions: any };
  onNext: (answers: boolean[]) => void;
  emotionKey: string; // EmotionsFlow에서 전달받는 감정 키
};

export default function QuestionSection({ section, onNext, emotionKey }: QuestionSectionProps) {
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
        <Indicator 
          total={section.questions.length} 
          selectedIndex={currentQuestion}
          activeColor="#FF9800"
          inactiveColor="rgba(255, 255, 255, 0.5)"
        />
        
        <CustomText style={styles.title}>{section.title}</CustomText>
        <View style={styles.questionContainer}>
          <CustomText style={styles.question}>{section.questions[currentQuestion]}</CustomText>
          
          <View style={styles.questionNumberBadge}>
            <CustomText style={styles.questionNumberText}>
              {currentQuestion + 1}/{section.questions.length}
            </CustomText>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Yes"
            onPress={() => handleAnswer(true)}
            gradientColors={['#4CAF50', '#66BB6A']}
            style={styles.button}
            textStyle={styles.buttonText}
            icon="check-circle"
          />

          <Button
            title="No"
            onPress={() => handleAnswer(false)}
            gradientColors={['#F44336', '#EF5350']}
            style={styles.button}
            textStyle={styles.buttonText}
            icon="times-circle"
          />
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
    backgroundColor: 'rgba(255, 241, 230, 0.7)', // 배경 이미지 위에 반투명 레이어로 읽기 쉬운 텍스트 제공
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 25,
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    position: 'relative',
  },
  question: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 26,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: '80%',
    marginBottom: 15,
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
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
