import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ImageSourcePropType, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useComplimentAnimation } from '../../hooks/useComplimentAnimation';
import { useAnimatedGradient } from '../../hooks/useAnimatedGradient';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedView = Animated.createAnimatedComponent(View);

const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_SIZE = SCREEN_WIDTH * 1.2;

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

  const {
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
  } = useComplimentAnimation(animate, previousCharacter, characterSrc, IMAGE_SIZE); // IMAGE_SIZE 전달

  const animatedNewImageStyle = useAnimatedStyle(() => ({
    opacity: newImageOpacity.value,
    transform: [
      { rotate: `${newImageRotate.value}deg` },
    ],
    filter: `brightness(${newImageBrightness.value})`,
  }));

  const animatedPrevImageStyle = useAnimatedStyle(() => ({
    opacity: prevImageOpacity.value,
    transform: [
      { rotate: `${prevImageRotate.value}deg` },
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

  // 그라데이션을 위한 커스텀 훅 사용
  const { animatedProps } = useAnimatedGradient(gradientOpacity);

  // 파티클 애니메이션 스타일
  const animatedParticleStyles = particleY.map((y, i) =>
    useAnimatedStyle(() => ({
      transform: [
        { translateY: y.value },
        { translateX: particleX[i].value },
      ],
      opacity: particleOpacity[i].value,
    }))
  );

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
        {animatedParticleStyles.map((style, index) => (
          <AnimatedView key={index} style={[styles.particle, style]} />
        ))}
      </View>
      <Animated.View style={[styles.messageBoxContainer, animatedBubbleStyle]}>
        <AnimatedLinearGradient
          animatedProps={animatedProps}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.messageBox}
        >
          <Animated.Text style={[styles.messageText, animatedMessageTextStyle]}>
            {message}
          </Animated.Text>
        </AnimatedLinearGradient>
      </Animated.View>
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
    position: 'relative',
  },
  characterImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  absoluteImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  messageBoxContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  messageBox: {
    borderRadius: 15,
    padding: SCREEN_WIDTH * 0.05,
    width: '100%',
    elevation: 5,
  },
  messageText: {
    fontSize: SCREEN_WIDTH * 0.045,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'HSYuji-Regular',
  },
  particle: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#ffd700',
    borderRadius: 5,
  },
});

export default ComplimentCard;