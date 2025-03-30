import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Svg, { Circle, G } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type ChartProps = {
  score: number; // 사용자 점수 (0-20)
};

const Chart: React.FC<ChartProps> = ({ score }) => {
  const maxScore = 20;
  const percentage = score / maxScore;

  // 차트 크기
  const size = Dimensions.get('window').width - 230;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // 애니메이션 값
  const progressValue = useSharedValue(0);

  useEffect(() => {
    progressValue.value = withTiming(percentage, {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [percentage]);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = circumference * (1 - progressValue.value);
    return {
      strokeDashoffset,
    };
  });

  // 차트 색상
  const getColor = (value: number) => {
    if (value <= 0.25) return '#2ECC71'; // 초록색
    if (value <= 0.5) return '#F1C40F'; // 노란색
    if (value <= 0.75) return '#E67E22'; // 주황색
    return '#E74C3C'; // 빨간색
  };

  const color = getColor(percentage);

  // 상태 텍스트
  const getStatusText = (value: number) => {
    if (value <= 0.25) return '안정';
    if (value <= 0.5) return '주의';
    if (value <= 0.75) return '경고';
    return '위험';
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Svg width={size} height={size}>
          <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
            {/* 배경 원 */}
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#F0F0F0"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* 진행 원 (Animated) */}
            <AnimatedCircle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={circumference}
              animatedProps={animatedProps}
            />
          </G>
        </Svg>

        {/* 차트 중앙 텍스트 */}
        <View style={styles.textContainer}>
          <Text style={[styles.percentageText, { color }]}>
            {Math.round(percentage * 100)}%
          </Text>
          <Text style={[styles.statusText, { color }]}>
            {getStatusText(percentage)}
          </Text>
        </View>
      </View>

      {/* 범례 */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#2ECC71' }]} />
          <Text style={styles.legendText}>0-25%: 안정</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#F1C40F' }]} />
          <Text style={styles.legendText}>26-50%: 주의</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#E67E22' }]} />
          <Text style={styles.legendText}>51-75%: 경고</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#E74C3C' }]} />
          <Text style={styles.legendText}>76-100%: 위험</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 200, // 차트가 너무 작지 않도록 최소 높이 확보
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#ffffff',
    elevation: 5,
    borderRadius: 16,
  },
  chartContainer: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {  
    position: 'absolute',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  legendContainer: {
    position: 'absolute',
    top: 0,
    right: 0, 
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 10,
    borderRadius: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 8,
    color: '#7F8C8D',
  },
});

export default Chart;
