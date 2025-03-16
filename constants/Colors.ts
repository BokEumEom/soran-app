/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  primary: "#007AFF", // iOS 기본 블루
  secondary: "#FF9500", // 강조 색상
  success: "#4CD964", // 성공
  danger: "#FF3B30", // 오류
  warning: "#FFCC00", // 경고
  white: "#FFFFFF",
  black: "#000000",
  gray: "#8E8E93",
  lightGray: "#D1D1D6",
  darkGray: "#3A3A3C",
  background: "#F2F2F7", // 기본 배경색
  darkBackground: "#1C1C1E", // 다크 모드 배경색
};

export const GAMECOLORS = {
  primary: '#4c669f',
  secondary: '#FF416C',
  background: '#000',
  white: '#FFFFFF',
  gray: '#f0f0f0',
};

// ✅ Colors를 기본 내보내기로 설정
export default Colors;