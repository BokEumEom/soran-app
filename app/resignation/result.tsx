import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Header } from '../../components/fairytale/Header';
import Chart from '@/components/resignation/Chart';
import { calculateScore, getRecommendation } from '@/utils/recommendations';
import CustomText from "@/components/common/CustomText";
import { Button } from '@/components/common/Button';

export default function ResultScreen() {
  const router = useRouter();
  const searchParams = useLocalSearchParams();
  const answers = searchParams.answers as string;

  // Parse user response data
  const parsedAnswers = JSON.parse(answers);
  const score = calculateScore(parsedAnswers);
  const recommendation = getRecommendation(score);

  const handleGoHome = () => router.replace('/');

  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <CustomText style={styles.recommendation}>{recommendation}</CustomText>
        </View>
        
        <Chart score={score} />
        
        <View style={styles.buttonContainer}>
          <Button
            title="다시 테스트하기"
            onPress={() => router.push('/resignation')}
            style={styles.button}
            gradientColors={['#4A90E2', '#4A90E2']}
          />
          <Button
            title="홈 화면으로 이동"
            onPress={handleGoHome}
            style={styles.button}
            gradientColors={['#4A90E2', '#4A90E2']}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginVertical: 10,
  },
  recommendation: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34495E',
    textAlign: 'left',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 5,
  }
});
