// hooks/useStoryAnimation.ts
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming, 
  withSpring,
  interpolate,
  cancelAnimation,
  runOnJS
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.25;
const SWIPE_DURATION = 250;

export const useStoryAnimation = (
  currentPage: number, 
  onChangePage: (direction: number) => void
) => {
  // 기본 애니메이션 공유값
  const titleAnimation = useSharedValue(0);
  const imageAnimation = useSharedValue(0);
  const imageFloat = useSharedValue(0);
  const dragX = useSharedValue(0);
  const pageOpacity = useSharedValue(1);

  useEffect(() => {
    // 페이지 전환 시 초기화
    titleAnimation.value = 0;
    imageAnimation.value = 0;
    imageFloat.value = 0;
    pageOpacity.value = 1;

    titleAnimation.value = withTiming(1, { duration: 500 });
    imageAnimation.value = withTiming(1, { duration: 500 });
    imageFloat.value = withTiming(1, { duration: 500 });

    return () => {
      cancelAnimation(titleAnimation);
      cancelAnimation(imageAnimation);
      cancelAnimation(imageFloat);
    };
  }, [currentPage]);

  const titleStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(titleAnimation.value, [0, 1], [50, 0]) },
      { scale: interpolate(titleAnimation.value, [0, 1], [0.8, 1]) },
    ],
    opacity: titleAnimation.value,
  }));

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(imageFloat.value, [0, 1], [0, -15]) },
    ],
    opacity: imageAnimation.value,
  }));

  const panGesture = Gesture.Pan()
    .onStart(() => {
      dragX.value = 0;
    })
    .onUpdate((e) => {
      dragX.value = e.translationX;
    })
    .onEnd((e) => {
      if (Math.abs(e.translationX) > SWIPE_THRESHOLD) {
        // 스와이프 방향에 따라 화면을 완전히 이동시키면서 fade-out 효과 적용
        if (e.translationX > 0) {
          // 오른쪽 스와이프: 이전 페이지 (화면 오른쪽으로 이동)
          dragX.value = withTiming(width, { duration: SWIPE_DURATION });
        } else {
          // 왼쪽 스와이프: 다음 페이지 (화면 왼쪽으로 이동)
          dragX.value = withTiming(-width, { duration: SWIPE_DURATION });
        }
        pageOpacity.value = withTiming(0, { duration: SWIPE_DURATION }, () => {
          // 애니메이션 완료 후 페이지 변경
          if (e.translationX > 0) {
            runOnJS(onChangePage)(-1);
          } else {
            runOnJS(onChangePage)(1);
          }
          // 새 페이지를 위해 값 초기화
          dragX.value = 0;
          pageOpacity.value = 1;
        });
      } else {
        // 임계치 미만이면 자연스럽게 원위치로 복귀
        dragX.value = withSpring(0, {
          damping: 20,
          stiffness: 200,
          overshootClamping: true,
        });
      }
    });

  const pageStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: dragX.value }],
    opacity: pageOpacity.value,
  }));

  return {
    titleStyle,
    imageAnimatedStyle,
    panGesture,
    pageStyle,
  };
};
