import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  SharedValue,
  withSpring,
  useDerivedValue,
} from 'react-native-reanimated';

// Constants
const DOT_CONTAINER_SIZE = 20;
const DOT_SIZE = 8;
const ACTIVE_DOT_SIZE = 12;
const ACTIVE_DOT_COLOR = '#FF9800';
const INACTIVE_DOT_COLOR = 'rgba(255, 255, 255, 0.5)';
const SPACING = 10;

function Dot({ index, animation }: { index: number; animation: SharedValue<number> }) {
  const stylez = useAnimatedStyle(() => {
    const isActive = Math.abs(animation.value - index) < 0.5;
    
    return {
      backgroundColor: interpolateColor(
        animation.value,
        [index - 1, index, index + 1],
        [INACTIVE_DOT_COLOR, ACTIVE_DOT_COLOR, INACTIVE_DOT_COLOR]
      ),
      width: withSpring(isActive ? ACTIVE_DOT_SIZE : DOT_SIZE, {
        damping: 20,
        stiffness: 150,
      }),
      height: withSpring(isActive ? ACTIVE_DOT_SIZE : DOT_SIZE, {
        damping: 20,
        stiffness: 150,
      }),
      borderRadius: withSpring(isActive ? ACTIVE_DOT_SIZE / 2 : DOT_SIZE / 2, {
        damping: 20,
        stiffness: 150,
      }),
      transform: [
        {
          scale: withSpring(isActive ? 1.2 : 1, {
            damping: 20,
            stiffness: 150,
          }),
        },
      ],
      opacity: withSpring(isActive ? 1 : 0.8, {
        damping: 20,
        stiffness: 150,
      }),
    };
  });

  return (
    <View style={styles.dotContainer}>
      <Animated.View style={[styles.dot, stylez]} />
    </View>
  );
}

export function Indicator({
  total,
  selectedIndex,
  activeColor,
  inactiveColor,
}: {
  total: number;
  selectedIndex: number;
  activeColor?: string;
  inactiveColor?: string;
}) {
  const animation = useDerivedValue(() => {
    return withSpring(selectedIndex, {
      damping: 20,
      stiffness: 150,
    });
  });

  // 최대 표시할 점의 개수 제한 (선택적)
  const maxVisibleDots = total > 10 ? 7 : total;
  const dots = [...Array(total).keys()];
  
  // 많은 점이 있을 경우 현재 선택된 점 주변만 표시
  const visibleDots = total > maxVisibleDots 
    ? dots.filter(i => 
        i === 0 || 
        i === total - 1 || 
        Math.abs(i - selectedIndex) < Math.floor(maxVisibleDots / 2)
      )
    : dots;

  return (
    <View style={styles.paginationContainer}>
      {visibleDots.map((i, idx) => {
        // 생략 표시 (...)
        if (idx > 0 && visibleDots[idx - 1] !== i - 1) {
          return (
            <View key={`ellipsis-${i}`} style={styles.ellipsisContainer}>
              <View style={styles.ellipsis} />
              <View style={styles.ellipsis} />
              <View style={styles.ellipsis} />
            </View>
          );
        }
        
        return (
          <Dot 
            key={`dot-${i}`} 
            index={i} 
            animation={animation} 
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    width: DOT_CONTAINER_SIZE,
    height: DOT_CONTAINER_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: INACTIVE_DOT_COLOR,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING,
    marginVertical: SPACING,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  ellipsisContainer: {
    flexDirection: 'row',
    width: DOT_CONTAINER_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  ellipsis: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: INACTIVE_DOT_COLOR,
  },
});
