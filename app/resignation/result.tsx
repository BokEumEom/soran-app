import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Header } from '../../components/fairytale/Header';
import Chart from '@/components/resignation/Chart';
import { calculateScore, getRecommendation, getActionSuggestions } from '@/utils/recommendations';
import CustomText from '@/components/common/CustomText';
import { Button } from '@/components/common/Button';

export default function ResultScreen() {
  const router = useRouter();
  const searchParams = useLocalSearchParams();
  const answers = searchParams.answers as string;

  // Parse user response data
  const parsedAnswers = JSON.parse(answers);
  const score = calculateScore(parsedAnswers);
  const percentage = score / 20;
  const getStatusText = (value: number) => {
    if (value <= 0.25) return '안정';
    if (value <= 0.5) return '주의';
    if (value <= 0.75) return '경고';
    return '위험';
  };
  const statusText = getStatusText(percentage);
  const recommendation = getRecommendation(score);
  const actionSuggestions = getActionSuggestions(score);

  const handleGoHome = () => router.replace('/');

  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        
        <Chart score={score} />
        
        <View style={styles.card}>
                  {/* 페이지 타이틀 */}
        <CustomText style={styles.pageTitle}>
          현재는 {statusText} 상태 입니다.
        </CustomText>
          <CustomText style={styles.recommendation}>
            {recommendation}
          </CustomText>
        </View>

        {/* 행동 개선 섹션 */}
        <View style={styles.suggestionsContainer}>
          <CustomText style={styles.suggestionsTitle}>
            행동 개선 제안
          </CustomText>
          {actionSuggestions.map((suggestion, index) => (
            <CustomText key={index} style={styles.suggestionItem}>
              • {suggestion}
            </CustomText>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <Button
          title="테스트 다시하기"
          onPress={() => router.push('/resignation')}
          style={{ ...styles.button, ...styles.primaryButton }}
          gradientColors={['#87CEFA', '#87CEFA'] as const}
          textStyle={styles.primaryButtonText}
        />
        <Button
          title="홈으로"
          onPress={handleGoHome}
          style={{ ...styles.button, ...styles.secondaryButton }}
          gradientColors={['#ffffff', '#ffffff'] as const}
          textStyle={styles.secondaryButtonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0effb', // 약간의 파란 느낌의 배경색
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120, // 스크롤 내용 하단에 여백을 추가해 버튼과 겹치지 않게 함
    paddingTop: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#34495E',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 15,
    marginVertical: 30,
  },
  recommendation: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34495E',
    textAlign: 'left',
    lineHeight: 28,
  },
  suggestionsContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
  },
  suggestionsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#34495E',
    marginBottom: 0,
    textAlign: 'left',
  },
  suggestionItem: {
    fontSize: 18,
    color: '#34495E',
    marginVertical: 5,
    textAlign: 'left',
  },
  buttonContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 40, // 하단 여백을 늘려서 안전 영역과 겹치지 않도록 함
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    // paddingVertical: 10, // 세로 패딩 줄임
    borderRadius: 8,
    marginHorizontal: 5,
  },
  primaryButton: {
    backgroundColor: '#87CEFA',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButtonText: {
    color: '#1565C0',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
