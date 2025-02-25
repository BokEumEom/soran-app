import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import CustomText from "@/components/common/CustomText";
import { COLORS } from '@/constants/fairytale/colors';

interface StoryContentProps {
  title: string;
  text: string;
  titleStyle: any;
}

export const StoryContent = ({ title, text, titleStyle }: StoryContentProps) => {
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, titleStyle]}>
        {title}
      </Animated.Text>
      <CustomText style={styles.text}>
        {text}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text.secondary,
    textAlign: 'justify',
  },
}); 