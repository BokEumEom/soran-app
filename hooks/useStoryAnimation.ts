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
  runOnJS,
  Extrapolation,
  withDelay
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.25;
const SWIPE_DURATION = 250;

export const useStoryAnimation = (
  currentPage: number, 
  onChangePage: (direction: number) => void
) => {
  // 기존 애니메이션 공유값
  const titleAnimation = useSharedValue(0);
  const imageAnimation = useSharedValue(0);
  const imageFloat = useSharedValue(0);
  
  // 제스처 및 전환 관련 공유값
  const dragX = useSharedValue(0);
  const pageOpacity = useSharedValue(1);
  const containerScale = useSharedValue(1); // 페이드 & 스케일 효과를 위한 값

  // 애니메이션 초기화 함수
  const resetAnimations = () => {
    cancelAnimation(titleAnimation);
    cancelAnimation(imageAnimation);
    cancelAnimation(imageFloat);
    
    titleAnimation.value = 0;
    imageAnimation.value = 0;
    imageFloat.value = 0;
    
    titleAnimation.value = withDelay(100, withTiming(1, { duration: 400 }));
    imageAnimation.value = withTiming(1, { duration: 300 });
    
    // 플로팅 효과 (수직 이동)
    setTimeout(() => {
      imageFloat.value = withTiming(1, { duration: 1500 }, () => {
        const loop = () => {
          imageFloat.value = 0;
          imageFloat.value = withTiming(1, { duration: 3000 }, (finished) => {
            if (finished) loop();
          });
        };
        loop();
      });
    }, 300);
  };

  useEffect(() => {
    resetAnimations();
    dragX.value = 0;
    pageOpacity.value = 1;
    containerScale.value = 1;
    return () => {
      cancelAnimation(titleAnimation);
      cancelAnimation(imageAnimation);
      cancelAnimation(imageFloat);
      cancelAnimation(dragX);
      cancelAnimation(pageOpacity);
      cancelAnimation(containerScale);
    };
  }, [currentPage]);

  // 제스처 핸들러: 드래그 중에는 dragX와 opacity 업데이트, 종료 시 페이드 & 스케일 전환 적용
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      dragX.value = e.translationX;
      pageOpacity.value = interpolate(
        Math.abs(e.translationX),
        [0, width / 2],
        [1, 0.7],
        Extrapolation.CLAMP
      );
    })
    .onEnd((e) => {
      const translationX = e.translationX;
      const velocityX = e.velocityX;
      const absTranslation = Math.abs(translationX);
      const absVelocity = Math.abs(velocityX);
      const shouldChangePage = absTranslation > SWIPE_THRESHOLD || absVelocity > 1000;
      
      if (shouldChangePage) {
        const direction = translationX > 0 ? -1 : 1;
        // 페이드 & 스케일 효과: 컨테이너를 약간 축소하고 불투명도를 0으로 전환
        containerScale.value = withTiming(0.9, { duration: SWIPE_DURATION });
        pageOpacity.value = withTiming(0, { duration: SWIPE_DURATION }, () => {
          runOnJS(onChangePage)(direction);
          // 전환 후 새 페이지를 위해 값 초기화
          dragX.value = 0;
          containerScale.value = 1;
          pageOpacity.value = 1;
        });
      } else {
        dragX.value = withSpring(0, {
          damping: 25,
          stiffness: 250,
          overshootClamping: true,
        });
        pageOpacity.value = withSpring(1, {
          damping: 25,
          stiffness: 250,
          overshootClamping: true,
        });
      }
    });

  // 제목 애니메이션 스타일 (페이드 인 및 약간 위로 이동)
  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleAnimation.value,
    transform: [{ translateY: interpolate(titleAnimation.value, [0, 1], [20, 0]) }]
  }));

  // 이미지 애니메이션 스타일: 플로팅 효과만 유지
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const floatTranslateY = interpolate(
      imageFloat.value, 
      [0, 0.5, 1], 
      [0, -15, 0], 
      Extrapolation.CLAMP
    );
    return {
      transform: [{ translateY: floatTranslateY }],
      opacity: 1,
    };
  });

  // 페이지 컨테이너 애니메이션 스타일: dragX와 containerScale, opacity 적용
  const pageStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: dragX.value }, { scale: containerScale.value }],
    opacity: pageOpacity.value,
  }));

  return {
    titleStyle,
    imageAnimatedStyle,
    panGesture,
    pageStyle,
    resetAnimations,
  };
};
