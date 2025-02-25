import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedProps, 
  withTiming,
  Easing
} from 'react-native-reanimated';
import Svg, { Circle, G } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type ChartProps = {
  score: number; // 사용자 점수 (0-20)
};

const Chart: React.FC<ChartProps> = ({ score }) => {
  const maxScore = 20; // 최대 점수
  const percentage = score / maxScore; // 점수 비율
  
  const size = Dimensions.get('window').width - 80;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
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
          <G rotation="-90" origin={`${size/2}, ${size/2}`}>
            {/* 배경 원 */}
            <Circle
              cx={size/2}
              cy={size/2}
              r={radius}
              stroke="#F0F0F0"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* 진행 원 */}
            <AnimatedCircle
              cx={size/2}
              cy={size/2}
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
        
        <View style={styles.textContainer}>
          <Text style={[styles.percentageText, { color }]}>
            {Math.round(percentage * 100)}%
          </Text>
          <Text style={[styles.statusText, { color }]}>
            {getStatusText(percentage)}
          </Text>
        </View>
      </View>
      
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
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2C3E50',
  },
  chartContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
  },
  legendContainer: {
    marginTop: 20,
    width: '100%',
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
    fontSize: 14,
    color: '#7F8C8D',
  },
});

export default Chart;
