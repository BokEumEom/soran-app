// VideoScreen.tsx (예: /app/fairytale/video.tsx)
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import CustomText from '@/components/common/CustomText';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Asset } from 'expo-asset';

const { width, height } = Dimensions.get('window');

// 로컬 비디오 매핑
const videoMapping: Record<string, any> = {
  '1': require('@/assets/video/fairytale1.mov'),
  // 추가 비디오 매핑 필요 시 추가
};

export default function VideoScreen() {
  const { videoId, title } = useLocalSearchParams();
  const [videoUri, setVideoUri] = useState<string | null>(null);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        if (videoId && videoMapping[videoId]) {
          const asset = Asset.fromModule(videoMapping[videoId]);
          await asset.downloadAsync();
          setVideoUri(asset.localUri || asset.uri);
        }
      } catch (error) {
        console.error('비디오 로딩 오류:', error);
      }
    };

    loadVideo();
  }, [videoId]);

  if (!videoUri) {
    return (
      <View style={styles.loadingContainer}>
        <CustomText>비디오 로딩 중...</CustomText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: title || '전래동화' }} />
      <Video
        source={{ uri: videoUri }}
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        isLooping
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  video: {
    width: width,
    height: height * 0.5,
    alignSelf: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
