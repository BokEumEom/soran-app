import React, { useEffect } from "react";
import { View, StyleSheet, Pressable, Dimensions, Text, Platform, Image, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import CustomText from "@/components/common/CustomText";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, Easing } from "react-native-reanimated";

type DashboardCardProps = {
  title: string;
  subtitle: string;
  link: string | { pathname: string; params?: Record<string, string> };
  image: any; // Image source
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  link,
  image,
}) => {
  const router = useRouter();
  // reanimated를 사용한 스케일 애니메이션 값
  const scale = useSharedValue(1);
  // 이미지 애니메이션 진행 값
  const imageAnim = useSharedValue(0);

  useEffect(() => {
    imageAnim.value = withTiming(1, {
      duration: 500,
      delay: 100,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  const handlePressIn = () => {
    scale.value = withTiming(0.97, { duration: 100 });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 });
  };

  const handlePress = () => {
    if (typeof link === "string") {
      router.push(link);
    } else {
      router.push({
        pathname: link.pathname,
        params: link.params,
      });
    }
  };

  // 스케일 애니메이션 스타일 (전체 카드)
  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  // 이미지 애니메이션 스타일
  const imageStyle = useAnimatedStyle(() => ({
    opacity: imageAnim.value,
    transform: [
      {
        translateY: interpolate(imageAnim.value, [0, 1], [10, 0]),
      }
    ],
  }));

  return (
    <Animated.View style={[styles.cardContainer, scaleStyle]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        accessibilityLabel={`${title} 카드`}
        accessibilityHint={`${subtitle} 링크로 이동합니다.`}
        style={styles.pressable}
      >
        <Animated.View style={imageStyle}>
          <ImageBackground 
            source={image} 
            style={styles.card}
            imageStyle={styles.imageStyle}
            resizeMode="cover"
          >
            <View style={styles.textContainer}>
              <CustomText style={styles.cardTitle}>{title}</CustomText>
              <CustomText style={styles.cardSubtitle}>{subtitle}</CustomText>
            </View>
          </ImageBackground>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.45;
const CARD_HEIGHT = CARD_WIDTH * 0.75;

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginBottom: 12,
  },
  pressable: {
    width: '100%',
    height: '100%',
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 16,
  },
  textContainer: {
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#F0F0F0",
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default DashboardCard;
