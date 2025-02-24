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

const SWIPE_THRESHOLD = Dimensions.get('window').width * 0.3;

export const useStoryAnimation = (
  currentPage: number, 
  onChangePage: (direction: number) => void
) => {
  const titleAnimation = useSharedValue(0);
  const imageAnimation = useSharedValue(0);
  const imageFloat = useSharedValue(0);
  const dragX = useSharedValue(0);

  useEffect(() => {
    titleAnimation.value = 0;
    imageAnimation.value = 0;
    imageFloat.value = 0;

    titleAnimation.value = withTiming(1, { duration: 1000 });
    imageAnimation.value = withTiming(1, { duration: 1000 });
    imageFloat.value = withTiming(1, { duration: 1000 });

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

  // 새로운 제스처 API (Gesture.Pan 사용)
  const panGesture = Gesture.Pan()
    .onStart(() => {
      dragX.value = 0;
    })
    .onUpdate((e) => {
      dragX.value = e.translationX;
    })
    .onEnd((e) => {
      if (Math.abs(e.translationX) > SWIPE_THRESHOLD) {
        if (e.translationX > 0) {
          runOnJS(onChangePage)(-1);
        } else {
          runOnJS(onChangePage)(1);
        }
      }
      // withSpring 옵션 조정: overshootClamping을 true로 하여 튀는 현상 제거
      dragX.value = withSpring(0, {
        damping: 15,
        stiffness: 200,
        overshootClamping: true,
      });
    });

  const pageStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: dragX.value }],
  }));

  return {
    titleStyle,
    imageAnimatedStyle,
    panGesture,
    pageStyle,
  };
};
