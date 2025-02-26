// components/emotions/EmotionsSelector.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SmilePlus, Frown, Angry, Siren, Wind, Meh } from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import CustomText from '@/components/common/CustomText';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Constants
const GRADIENT_WIDTH = SCREEN_WIDTH > 768 ? 300 : SCREEN_WIDTH * 0.85;
const GRADIENT_HEIGHT_RATIO = SCREEN_HEIGHT > 700 ? 0.5 : 0.4;
const ICON_SIZE = SCREEN_WIDTH > 768 ? 200 : SCREEN_WIDTH * 0.4;
const BUTTON_WIDTH_RATIO = SCREEN_WIDTH > 768 ? 0.6 : 0.8;
const BUTTON_BOTTOM_MARGIN = 30;
const BUTTON_PADDING = 15;
const BUTTON_BORDER_RADIUS = 25;
const GRADIENT_BORDER_RADIUS = 15;
const GRADIENT_PADDING = 20;

type EmotionIconName =
  | 'smile-plus'
  | 'frown'
  | 'angry'
  | 'siren'
  | 'Wind'
  | 'meh';

type Emotion = {
  title: string;
  description: string;
  colors: readonly [string, string];
  icon: EmotionIconName;
  route: `/emotions/${string}`;
};

const emotions: Emotion[] = [
  {
    title: '긍정적 감정',
    description: '현재 기분이 긍정적이에요.',
    colors: ['#FFE082', '#FFD54F'],
    icon: 'smile-plus',
    route: '/emotions/positiveEmotions',
  },
  {
    title: '슬픔/우울감',
    description: '현재 기분이 우울해요.',
    colors: ['#90CAF9', '#64B5F6'],
    icon: 'frown',
    route: '/emotions/sadness',
  },
  {
    title: '분노/짜증',
    description: '현재 기분이 화가 나요.',
    colors: ['#EF9A9A', '#E57373'],
    icon: 'angry',
    route: '/emotions/anger',
  },
  {
    title: '스트레스/압박감',
    description: '현재 스트레스를 받고 있어요.',
    colors: ['#FFCC80', '#FFB74D'],
    icon: 'siren',
    route: '/emotions/stress',
  },
  {
    title: '불안/불확실감',
    description: '현재 기분이 불안해요.',
    colors: ['#B39DDB', '#9575CD'],
    icon: 'Wind',
    route: '/emotions/anxiety',
  },
  {
    title: '무관심/흥미 상실',
    description: '현재 아무런 흥미를 느끼지 않아요.',
    colors: ['#CFD8DC', '#B0BEC5'],
    icon: 'meh',
    route: '/emotions/apathy',
  },
];

export default function EmotionsSlider() {
  const translateX = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  // 스크롤 핸들러
  const onScroll = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x / SCREEN_WIDTH;
  });

  // 스크롤 종료 시 현재 페이지 인덱스 업데이트
  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  // 애니메이션 스타일
  const getAnimatedStyle = (index: number) => {
    return useAnimatedStyle(() => {
      const scale = interpolate(
        translateX.value,
        [index - 1, index, index + 1],
        [1.4, 1, 1.4]
      );

      const rotate = `${interpolate(
        translateX.value,
        [index - 1, index, index + 1],
        [-10, 0, 10]
      )}deg`;

      return {
        transform: [{ scale }, { rotate }],
      };
    });
  };

  const handleSetMood = () => {
    const selectedEmotion = emotions[currentIndex];
    router.push(selectedEmotion.route);
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
        contentContainerStyle={{ 
          paddingHorizontal: (SCREEN_WIDTH - GRADIENT_WIDTH) / 2,
          minHeight: SCREEN_HEIGHT * 0.7 // 최소 높이 설정
        }}
        style={styles.scrollView}
      >
        {emotions.map((emotion, index) => (
          <Animated.View
            key={index}
            style={[styles.slide, getAnimatedStyle(index)]}
          >
            <LinearGradient
              colors={emotion.colors}
              style={[styles.gradient, { width: GRADIENT_WIDTH, height: SCREEN_HEIGHT * GRADIENT_HEIGHT_RATIO }]}
            >
              <CustomText style={styles.title}>오늘의 감정 상태는?</CustomText>
              <View style={styles.iconContainer}>
                {emotion.icon === 'smile-plus' && <SmilePlus size={ICON_SIZE} color="#FFF" />}
                {emotion.icon === 'frown' && <Frown size={ICON_SIZE} color="#FFF" />}
                {emotion.icon === 'angry' && <Angry size={ICON_SIZE} color="#FFF" />}
                {emotion.icon === 'siren' && <Siren size={ICON_SIZE} color="#FFF" />}
                {emotion.icon === 'Wind' && <Wind size={ICON_SIZE} color="#FFF" />}
                {emotion.icon === 'meh' && <Meh size={ICON_SIZE} color="#FFF" />}
              </View>
              <CustomText style={styles.description}>
                {emotion.description}
              </CustomText>
            </LinearGradient>
          </Animated.View>
        ))}
      </Animated.ScrollView>

      <TouchableOpacity 
        style={[
          styles.setMoodButton,
          { opacity: 0.95 } // 버튼 투명도 추가
        ]} 
        onPress={handleSetMood}
        activeOpacity={0.7} // 터치 피드백 개선
      >
        <CustomText style={styles.setMoodText}>LETS GO!</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: SCREEN_HEIGHT * 0.7,
  },
  scrollView: {
    flexGrow: 0,
    width: '100%',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    paddingVertical: 20,
  },
  gradient: {
    borderRadius: GRADIENT_BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: GRADIENT_PADDING,
    width: GRADIENT_WIDTH,
    height: SCREEN_HEIGHT * GRADIENT_HEIGHT_RATIO > 400 ? 400 : SCREEN_HEIGHT * GRADIENT_HEIGHT_RATIO,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  setMoodButton: {
    position: 'absolute',
    bottom: BUTTON_BOTTOM_MARGIN,
    width: SCREEN_WIDTH * BUTTON_WIDTH_RATIO > 400 ? 400 : SCREEN_WIDTH * BUTTON_WIDTH_RATIO,
    backgroundColor: '#FFF',
    borderRadius: BUTTON_BORDER_RADIUS,
    paddingVertical: BUTTON_PADDING,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  setMoodText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
