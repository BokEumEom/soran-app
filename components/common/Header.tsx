import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CustomText from '@/components/common/CustomText';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  titleColor?: string;
  onBackPress?: () => void;
}

// 화면 크기 가져오기
const { width, height } = Dimensions.get('window');

// 반응형 크기 계산을 위한 기준 너비 (iPhone 11 Pro 기준)
const baseWidth = 375;

// 반응형 크기 계산 함수
const scale = (size: number) => (width / baseWidth) * size;

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  titleColor = '#333333',
  onBackPress,
}) => {
  const router = useRouter();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress(); // 사용자 정의 콜백 실행
    } else {
      router.back(); // 기본 뒤로 가기
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {showBackButton && (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <AntDesign name="leftcircleo" size={scale(26)} color={titleColor} />
          </TouchableOpacity>
        )}
        <CustomText style={[styles.headerTitle, { color: titleColor }]}>{title}</CustomText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(16), // 반응형 좌우 여백
    height: scale(50), // 반응형 높이
  },
  backButton: {
    position: 'absolute',
    left: scale(16), // 반응형 좌측 여백
    padding: scale(8), // 터치 영역 확보
  },
  headerTitle: {
    fontSize: scale(20), // 반응형 폰트 크기
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: width * 0.7, // 타이틀 최대 너비 제한
  },
});

