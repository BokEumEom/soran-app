// app/_layout.tsx

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FontSettingsProvider } from '@/contexts/FontSettingsContext';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

// 스플래시 화면 자동 숨김 방지
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  // useFonts 훅을 사용하여 폰트를 로드
  const [fontsLoaded] = useFonts({
    DepartureMono: {
      uri: 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/fonts/DepartureMono-Regular.otf',
    },
    NanumSquareNeo: {
      uri: 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/fonts/NanumSquareNeo-eHv.ttf',
    },
    NEXONLv2Gothic: {
      uri: 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/fonts/NEXON%20Lv2%20Gothic%20Medium.ttf',
    },
    NotoSansKR: {
      uri: 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/fonts/NotoSansKR-Medium.ttf',
    },
    Orbitron: {
      uri: 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/fonts/Orbitron-VariableFont-wght.ttf',
    },
    PressStart2P: {
      uri: 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/fonts/PressStart2P-Regular.ttf',
    },
    RobotoMono: {
      uri: 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/fonts/RobotoMono-Regular.ttf',
    },
    SpaceMono: {
      uri: 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/fonts/SpaceMono-Regular.ttf',
    },
    SpoqaHanSansNeo: {
      uri: 'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/fonts/SpoqaHanSansNeo-Medium.ttf',
    },
    // 추가: HSYuji-Regular 폰트 (woff 형식)
    'HSYuji-Regular': {
      uri: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/HSYuji-Regular.woff',
    },
  });

  // 폰트 로딩 완료 시 스플래시 화면 숨김 및 /onboarding으로 리디렉션
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().then(() => {
        setIsReady(true);
        router.replace('/onboarding'); // 첫 화면으로 /onboarding 리디렉션
      });
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // 폰트가 로드될 때까지 아무것도 렌더링하지 않음
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <FontSettingsProvider>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="onboarding" />
              <Stack.Screen name="emotions" />
              <Stack.Screen name="self-praise" />
              <Stack.Screen name="scenario" />
              <Stack.Screen name="game" />
              <Stack.Screen name="mbti" />
              <Stack.Screen name="meditate" />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
        </FontSettingsProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
