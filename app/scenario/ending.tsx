import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useEmotionContext } from '../../contexts/EmotionContext';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Header } from '../../components/fairytale/Header';
import { Button } from '../../components/common/Button';
import { EmotionBar } from '../../components/scenario/EmotionBar';
import Colors from '../../constants/Colors'; // Colors.ts 경로에 맞게 import


export const EndingScreen = () => {
  const { emotionState } = useEmotionContext();
  const { message, summary } = useLocalSearchParams(); // 쿼리에서 전달된 message 받기
  const router = useRouter();

  const handleScenarioSelect = () => {
    router.push('/scenario');
  };

  const handleGoHome = () => {
    router.replace('/'); // 홈 화면으로 이동하는 로직
  };

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 쿼리에서 받은 메시지 표시 */}
        <View style={styles.messageContainer}>
          <Text style={styles.resultMessage}>{message}</Text>
        </View>

        {/* 스토리 요약 표시 */}
        <View style={styles.messageContainer}>
          <Text style={styles.summaryTitle}>당신이 결정한 이야기</Text>
          <Text style={styles.summaryText}>{summary}</Text>
        </View> 

        {/* 감정 변화 그래프 (EmotionBar) */}
        <EmotionBar />
      </ScrollView>

      {/* 하단 버튼들 */}
      <View style={styles.buttonContainer}>
        <Button
          title="다른 시나리오 선택"
          onPress={handleScenarioSelect}
          gradientColors={['#4A90E2', '#A7C7E7']}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          title="홈 화면으로 이동"
          onPress={handleGoHome}
          gradientColors={['#FF6347', '#FF7F50']}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background, 
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
  messageContainer: {
    backgroundColor: Colors.white, 
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderColor: '#DDD', 
  },
  resultMessage: {
    fontSize: 16,
    color: Colors.black, 
  },
  summaryTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.black, 
  },
  summaryText: {
    fontSize: 16,
    textAlign: 'left',
    color: Colors.darkGray, 
    lineHeight: 24,
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: Colors.background,
    marginBottom: 30,
  },
  button: {
    borderRadius: 25,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   scrollContainer: {
//     padding: 20,
//     flexGrow: 1,
//   },
//   messageContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//     // borderWidth: 1,
//     borderColor: '#DDD',
//   },
//   resultMessage: {
//     fontSize: 16,
//     // textAlign: 'center',
//     color: '#1D3557',

//     // fontWeight: 'b',
//   },
//   summaryTitle: {
//     fontSize: 20,
//     textAlign: 'center',
//     // fontWeight: 'bold',
//     color: '#000',
//   },
//   summaryText: {
//     fontSize: 16,
//     textAlign: 'left',
//     color: '#1D3557',
//     lineHeight: 24, // 줄 간격 추가
//     // marginTop: 2,
//   },
//   buttonContainer: {
//     padding: 15,
//     backgroundColor: '#F5F5F5',
//     marginBottom: 30
//   },
//   button: {
//     borderRadius: 25,
//     marginVertical: 5, // 버튼 간의 간격을 더 넓게
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
// });

export default EndingScreen;
