import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/fairytale/colors';

interface ProgressDotsProps {
  currentPage: number;
  totalPages: number;
}

export const ProgressDots = ({ currentPage, totalPages }: ProgressDotsProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentPage === index && styles.activeDot
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.progress.inactive,
  },
  activeDot: {
    backgroundColor: COLORS.progress.active,
    transform: [{ scale: 1.2 }],
  },
}); 