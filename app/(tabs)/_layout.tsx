import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Asset } from 'expo-asset';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const cacheImages = async (images: number[]) => {
  await Promise.all(images.map(image => Asset.loadAsync(image)));
};

const BASE_URL =
  'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets';

// 세부 폴더 경로를 미리 변수화
const GAME_IMAGES = `${BASE_URL}/game-images`;
const BG = `${BASE_URL}/bg`;
const IMAGES = `${BASE_URL}/images`;
const MEDITATION_IMAGES = `${BASE_URL}/meditation-images`;
const EMOTIONS = `${BASE_URL}/emotions`;

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      const images = [
        { uri: `${GAME_IMAGES}/rock-led.png` },
        { uri: `${GAME_IMAGES}/scissors-led.png` },
        { uri: `${GAME_IMAGES}/paper-led.png` },
        { uri: `${GAME_IMAGES}/rock.jpg` },
        { uri: `${GAME_IMAGES}/scissors.jpg` },
        { uri: `${GAME_IMAGES}/paper.jpg` },
      
        { uri: `${BG}/bg_mbti_question.png` },
        { uri: `${BG}/bg_question.png` },
        { uri: `${BG}/mint-bear-character-enthusiastic.webp` },
      
        { uri: `${IMAGES}/splash.png` },
        { uri: `${IMAGES}/soran-logo.png` },
        { uri: `${IMAGES}/sowii.png` },
        { uri: `${IMAGES}/soran.gif` },
        { uri: `${IMAGES}/soran-logo.gif` },
      
        { uri: `${MEDITATION_IMAGES}/meditating.webp` },
        { uri: `${MEDITATION_IMAGES}/meditate-under-tree.webp` },
        { uri: `${MEDITATION_IMAGES}/river.webp` },
        { uri: `${MEDITATION_IMAGES}/trees.webp` },
        { uri: `${MEDITATION_IMAGES}/waterfall.webp` },
        { uri: `${MEDITATION_IMAGES}/yosemite-stars.webp` },
        { uri: `${MEDITATION_IMAGES}/beach.webp` },
      
        { uri: `${EMOTIONS}/two-chibi-characters.webp` },
        { uri: `${EMOTIONS}/mint-bear-character.webp` },
        { uri: `${EMOTIONS}/mint-colored-bear-character.webp` },
        { uri: `${EMOTIONS}/mint-bear-cleansing-balm.webp` },
        { uri: `${EMOTIONS}/mint-bear-struggling.webp` },
        { uri: `${EMOTIONS}/mint-bear-character-balance.webp` },
      ];
      await cacheImages(images);
      setIsReady(true);
    };

    loadAssets();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarLabelStyle: {
          marginTop: 5, // Adjust the space between the icon and title
        },
        tabBarItemStyle: {
          paddingVertical: 5, // Add vertical padding around the tab items
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home-sharp' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fairytale"
        options={{
          title: '동화',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book-sharp' : 'book-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: '대시보드',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bar-chart-sharp' : 'bar-chart-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: '세팅',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings-sharp' : 'settings-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
