import { useEffect } from 'react';
import {
  useSharedValue,
  withTiming,
  withDelay,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { ImageSourcePropType } from 'react-native';

export const useComplimentAnimation = (
  animate: boolean,
  previousCharacter: ImageSourcePropType | undefined,
  characterSrc: ImageSourcePropType,
  imageSize: number // IMAGE_SIZE를 파라미터로 추가
) => {
  // 새 이미지 애니메이션 값들
  const newImageOpacity = useSharedValue(animate ? 0 : 1);
  const newImageRotate = useSharedValue(animate ? -5 : 0);
  const newImageBrightness = useSharedValue(animate ? 0.5 : 1);

  // 이전 이미지 애니메이션 값들
  const prevImageOpacity = useSharedValue(1);
  const prevImageRotate = useSharedValue(0);
  const prevImageBrightness = useSharedValue(1);

  // 말풍선 및 메시지 애니메이션 값들
  const bubbleOpacity = useSharedValue(animate ? 0 : 1);
  const messageTranslateY = useSharedValue(animate ? 50 : 0);
  const messageTextOpacity = useSharedValue(animate ? 0 : 1);

  // 그라디언트 색상 변화용 값
  const gradientOpacity = useSharedValue(animate ? 0 : 1);

  // 파티클 애니메이션 값들 (5개 파티클 설정)
  const particleY = Array(5).fill(0).map(() => useSharedValue(0));
  const particleX = Array(5).fill(0).map(() => useSharedValue(0));
  const particleOpacity = Array(5).fill(0).map(() => useSharedValue(1));

  useEffect(() => {
    if (animate) {
      const delayTime = 100;

      // 새 이미지 초기값 (scale 제거)
      newImageOpacity.value = 0.7;
      newImageRotate.value = -5;
      newImageBrightness.value = 0.8;

      // 나머지 애니메이션 값들 초기화
      bubbleOpacity.value = 0;
      messageTranslateY.value = 50;
      messageTextOpacity.value = 0;
      gradientOpacity.value = 0;

      // 새 이미지 애니메이션 (scale 관련 코드 제거)
      newImageOpacity.value = withDelay(
        delayTime,
        withTiming(1, { duration: 800, easing: Easing.bezier(0.4, 0, 0.2, 1) })
      );
      newImageRotate.value = withDelay(
        delayTime,
        withSequence(
          withTiming(-4, { duration: 200 }),
          withTiming(4, { duration: 300 }),
          withTiming(-2, { duration: 200 }),
          withTiming(2, { duration: 200 }),
          withTiming(0, { duration: 300, easing: Easing.elastic(1.5) })
        )
      );
      newImageBrightness.value = withDelay(
        delayTime,
        withTiming(1, { duration: 800, easing: Easing.out(Easing.ease) })
      );

      // 이전 이미지 애니메이션 (scale 제거)
      if (previousCharacter) {
        prevImageOpacity.value = withDelay(
          delayTime,
          withTiming(0, { duration: 800, easing: Easing.out(Easing.ease) })
        );
        prevImageRotate.value = withDelay(
          delayTime,
          withTiming(10, { duration: 800, easing: Easing.out(Easing.ease) })
        );
        prevImageBrightness.value = withDelay(
          delayTime,
          withTiming(0.5, { duration: 800, easing: Easing.out(Easing.ease) })
        );
      }

      // 말풍선 애니메이션
      bubbleOpacity.value = withDelay(
        delayTime,
        withTiming(1, { duration: 900, easing: Easing.out(Easing.ease) })
      );
      messageTranslateY.value = withDelay(
        delayTime,
        withTiming(0, { duration: 1200, easing: Easing.out(Easing.ease) })
      );
      messageTextOpacity.value = withDelay(
        delayTime,
        withTiming(1, { duration: 1200, easing: Easing.out(Easing.ease) })
      );

      // 그라디언트 색상 변화
      gradientOpacity.value = withDelay(
        delayTime,
        withTiming(1, { duration: 900, easing: Easing.out(Easing.ease) })
      );

      // 파티클 애니메이션 초기화 및 실행
      particleY.forEach((y, i) => {
        y.value = 0; // 초기값 리셋
        particleX[i].value = 0; // 초기값 리셋
        particleOpacity[i].value = 1; // 초기값 리셋
        
        y.value = withDelay(
          delayTime + i * 100,
          withTiming(-100, { duration: 1000, easing: Easing.out(Easing.ease) })
        );
        particleX[i].value = Math.random() * imageSize - imageSize / 2;
        particleOpacity[i].value = withDelay(
          delayTime + i * 100,
          withTiming(0, { duration: 1000, easing: Easing.out(Easing.ease) })
        );
      });
    }
  }, [animate, previousCharacter, characterSrc, imageSize]);

  return {
    newImageOpacity,
    newImageRotate,
    newImageBrightness,
    prevImageOpacity,
    prevImageRotate,
    prevImageBrightness,
    bubbleOpacity,
    messageTranslateY,
    messageTextOpacity,
    gradientOpacity,
    particleY,
    particleX,
    particleOpacity,
  };
};