import { useDerivedValue, useAnimatedProps } from 'react-native-reanimated';
import { SharedValue, interpolateColor } from 'react-native-reanimated';

export const useAnimatedGradient = (progress: SharedValue<number>) => {
  // 색상 변화를 위한 파생 값 생성
  const colors = useDerivedValue(() => {
    const color1 = interpolateColor(
      progress.value,
      [0, 1], 
      ['#fff5cc', '#ffeb99']
    );
    
    const color2 = interpolateColor(
      progress.value,
      [0, 1], 
      ['#ffeb99', '#ffe680']
    );
    
    return [color1, color2];
  });
  
  // LinearGradient에 사용할 animatedProps 생성
  const animatedProps = useAnimatedProps(() => {
    return {
      colors: colors.value,
    };
  });
  
  return { animatedProps };
}; 