import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MotiText } from 'moti';
import CustomText from "@/components/common/CustomText";

export default function ResignationHome() {
  const router = useRouter();

  const handleStartTest = () => {
    router.push('/resignation/questions');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <CustomText style={styles.title}>
        <MotiText
              from={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 100, duration: 500 }}
            >
              퇴사를 고민하고 있나요?
            </MotiText>
        </CustomText>
        <CustomText style={styles.subtitle}>
        <MotiText
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 800, duration: 600 }}
            >
              지금 바로 당신의 현재 상황을 바라보세요.
            </MotiText>
        </CustomText>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleStartTest}>
        <CustomText style={styles.buttonText}>테스트 시작하기</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  topSection: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    width: '100%',
    backgroundColor: '#87CEFA',
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});