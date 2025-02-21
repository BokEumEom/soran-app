import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

interface ComplimentCardProps {
  message: string;
  animate: boolean;
  characterSrc: ImageSourcePropType;
}

const ComplimentCard: React.FC<ComplimentCardProps> = ({
  message,
  animate,
  characterSrc,
}) => {
  const previousCharacter = usePrevious(characterSrc);

  // 새 이미지 애니메이션 값들
  const newImageOpacity = useSharedValue(animate ? 0 : 1);
  const newImageScale = useSharedValue(animate ? 0.8 : 1); // 시작 스케일을 더 작게
  const newImageRotate = useSharedValue(animate ? -10 : 0); // 회전 추가
  const newImageBrightness = useSharedValue(animate ? 0.5 : 1); // 밝기 추가

  // 이전 이미지 애니메이션 값들
  const prevImageOpacity = useSharedValue(1);
  const prevImageScale = useSharedValue(1);
  const prevImageRotate = useSharedValue(0);
  const prevImageBrightness = useSharedValue(1);

  // 말풍선 전체: opacity 0→1
  const bubbleOpacity = useSharedValue(animate ? 0 : 1);
  // 메시지 텍스트: translateY 50→0, opacity 0→1
  const messageTranslateY = useSharedValue(animate ? 50 : 0);
  const messageTextOpacity = useSharedValue(animate ? 0 : 1);

  useEffect(() => {
    if (animate) {
      const delayTime = 100;
      
      // 새 이미지 애니메이션
      newImageOpacity.value = withDelay(
        delayTime,
        withTiming(1, { duration: 1000, easing: Easing.bezier(0.4, 0, 0.2, 1) })
      );
      newImageScale.value = withDelay(
        delayTime,
        withTiming(1, { duration: 1200, easing: Easing.bezier(0.34, 1.56, 0.64, 1) })
      );
      newImageRotate.value = withDelay(
        delayTime,
        withTiming(0, { duration: 1200, easing: Easing.bezier(0.34, 1.56, 0.64, 1) })
      );
      newImageBrightness.value = withDelay(
        delayTime,
        withTiming(1, { duration: 800, easing: Easing.out(Easing.ease) })
      );

      // 이전 이미지 애니메이션
      if (previousCharacter) {
        prevImageOpacity.value = withDelay(
          delayTime,
          withTiming(0, { duration: 800, easing: Easing.out(Easing.ease) })
        );
        prevImageScale.value = withDelay(
          delayTime,
          withTiming(1.1, { duration: 800, easing: Easing.out(Easing.ease) })
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
    }
  }, [
    animate,
    newImageOpacity,
    newImageScale,
    newImageRotate,
    newImageBrightness,
    prevImageOpacity,
    prevImageScale,
    prevImageRotate,
    prevImageBrightness,
    bubbleOpacity,
    messageTranslateY,
    messageTextOpacity,
    previousCharacter,
  ]);

  const animatedNewImageStyle = useAnimatedStyle(() => ({
    opacity: newImageOpacity.value,
    transform: [
      { scale: newImageScale.value },
      { rotate: `${newImageRotate.value}deg` }
    ],
    filter: `brightness(${newImageBrightness.value})`,
  }));

  const animatedPrevImageStyle = useAnimatedStyle(() => ({
    opacity: prevImageOpacity.value,
    transform: [
      { scale: prevImageScale.value },
      { rotate: `${prevImageRotate.value}deg` }
    ],
    filter: `brightness(${prevImageBrightness.value})`,
  }));

  const animatedBubbleStyle = useAnimatedStyle(() => ({
    opacity: bubbleOpacity.value,
  }));

  const animatedMessageTextStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: messageTranslateY.value }],
    opacity: messageTextOpacity.value,
  }));

  return (
    <View style={styles.complimentCard}>
      <View style={styles.characterContainer}>
        {previousCharacter && (
          <Animated.Image
            source={previousCharacter}
            style={[
              styles.characterImage,
              styles.absoluteImage,
              animatedPrevImageStyle,
            ]}
            resizeMode="contain"
          />
        )}
        <Animated.Image
          source={characterSrc}
          style={[styles.characterImage, animatedNewImageStyle]}
          resizeMode="contain"
        />
      </View>
      <AnimatedLinearGradient
        colors={['#ffeb99', '#ffe680']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.messageBox, animatedBubbleStyle]}
      >
        <Animated.Text style={[styles.messageText, animatedMessageTextStyle]}>
          {message}
        </Animated.Text>
      </AnimatedLinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  complimentCard: {
    position: 'relative',
  },
  characterContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  characterImage: {
    width: 450,
    height: 450,
  },
  absoluteImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  messageBox: {
    borderRadius: 15,
    padding: 20,
    width: '95%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  messageText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'HSYuji-Regular',
  },
});

export default ComplimentCard;
