import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Header } from '../../components/fairytale/Header';
import { scenarios } from '../../constants/scenarios';
import { useEmotionContext } from '../../contexts/EmotionContext';
import { EmotionBar } from '../../components/scenario/EmotionBar';
import { Character } from '../../components/scenario/Character';
import { ProgressBar } from '../../components/common/ProgressBar';
import CustomText from "@/components/common/CustomText";

const StoryScreen = () => {
  const router = useRouter();
  const { id, summary: initialSummary } = useLocalSearchParams();
  const scenarioId = Number(id);
  const scenario = scenarios.find((s) => s.id === scenarioId);
  const { updateEmotion, resetEmotion } = useEmotionContext();
  const [currentChapter, setCurrentChapter] = useState(scenario?.chapters[0]);
  const [summary, setSummary] = useState(initialSummary || ""); // 요약 상태 추가
  const [progress, setProgress] = useState(0); // 진행률 상태 추가

  useEffect(() => {
    resetEmotion();
  }, [scenarioId]);

  useEffect(() => {
    if (scenario && currentChapter) {
      const totalChapters = scenario.chapters.length;
      const currentChapterIndex = scenario.chapters.indexOf(currentChapter) + 1;
      const progressPercent = (currentChapterIndex / totalChapters) * 100;
      setProgress(progressPercent); // 진행률 업데이트
    }
  }, [currentChapter, scenario]);

  const handleChoiceSelect = (choice) => {
    updateEmotion(choice.emotionalImpact);

    // 선택한 항목을 누적 요약에 추가
    const updatedSummary = `${summary}\n- ${currentChapter.text}\n선택: ${choice.text}`;
    
    // nextChapterId가 없거나 null인 경우 엔딩으로 이동
    if (!choice.nextChapterId) {
      router.push({
        pathname: '/scenario/ending',
        params: { 
          message: choice.message,
          summary: updatedSummary,  // 누적된 요약 전달
        },
      });
    } else {
      const nextChapter = scenario?.chapters.find((c) => c.id === choice.nextChapterId);
      setCurrentChapter(nextChapter);
      
      // nextChapter가 엔딩인 경우 처리
      if (nextChapter?.isEnding) {
        router.push({
          pathname: '/scenario/ending',
          params: { 
            message: choice.message,
            summary: updatedSummary,  // 누적된 요약 전달
          },
        });
      } else {
        setSummary(updatedSummary); // 요약 상태 갱신
      }
    }
  };

  if (!currentChapter) return null;

  return (
    <View style={styles.container}>
      <Header />
      {/* ProgressBar 컴포넌트 추가 */}
      <View style={styles.progressContainer}>
        <ProgressBar progress={progress} />
        <CustomText style={styles.progressText}>{`진행률: ${Math.round(progress)}%`}</CustomText>
      </View>

      <ScrollView style={styles.storyContainer}>
      <EmotionBar />
        <Character />
        
        <CustomText style={styles.storyText}>{currentChapter.text}</CustomText>
        {currentChapter.choices.map((choice) => (
          <TouchableOpacity
            key={choice.id}
            style={styles.choiceButton}
            onPress={() => handleChoiceSelect(choice)}
          >
            <CustomText style={styles.choiceText}>{choice.text}</CustomText>
          </TouchableOpacity>
        ))} 
      </ScrollView>  
    </View>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F1FAEE',
  },
  storyContainer: { 
    padding: 10,
  },
  storyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1D3557',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'justify',
  },
  choiceButton: {
    backgroundColor: '#A8DADC',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  choiceText: { 
    color: '#1D3557', 
    fontSize: 16, 
    textAlign: 'center',
    fontWeight: '600',
  },
  progressContainer: {
    padding: 10
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});
