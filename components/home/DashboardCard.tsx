import React, { useRef } from "react";
import { View, StyleSheet, Pressable, Dimensions, Animated as RNAnimated } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { LucideProps } from "lucide-react-native";
import CustomText from "@/components/common/CustomText";

type DashboardCardProps = {
  title: string;
  subtitle: string;
  icon: React.FC<LucideProps>;
  colors: [string, string];
  link: string | { pathname: string; params?: Record<string, string> };
  iconColor?: string;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  colors,
  link,
  iconColor = "#FFFFFF",
}) => {
  const router = useRouter();
  const scaleAnim = useRef(new RNAnimated.Value(1)).current;

  const handlePressIn = () => {
    RNAnimated.timing(scaleAnim, {
      toValue: 0.97,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    RNAnimated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
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

  return (
    <RNAnimated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        style={styles.card}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        accessibilityLabel={`${title} 카드`}
        accessibilityHint={`${subtitle} 링크로 이동합니다.`}
      >
        <LinearGradient
          colors={colors}
          style={styles.cardBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <BlurView intensity={50} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.iconContainer}>
            <Icon size={40} color={iconColor} />
          </View>
          <View style={styles.textContainer}>
            <CustomText style={styles.cardTitle}>{title}</CustomText>
            <CustomText style={styles.cardSubtitle}>{subtitle}</CustomText>
          </View>
        </LinearGradient>
      </Pressable>
    </RNAnimated.View>
  );
};

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.45;
const CARD_HEIGHT = CARD_WIDTH * 0.68;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  cardBackground: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  textContainer: {
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    opacity: 0.9,
  },
});

export default DashboardCard;
