import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Asset } from 'expo-asset';
import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';
import { useEvent } from 'expo';
import CustomText from '@/components/common/CustomText';
import { PlayCircle, PauseCircle } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface VideoScreenParams {
  videoId: string;
  title?: string;
}

// 로컬 비디오 매핑 (파일 경로를 실제 위치에 맞게 수정)
const videoMapping: Record<string, any> = {
  '1': require('../../../assets/video/fairytale1.mov'),
};

export default function VideoScreen(): JSX.Element {
  const { videoId, title } = useLocalSearchParams<VideoScreenParams>();
  const [videoSource, setVideoSource] = useState<string | null>(null);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        if (videoId && videoMapping[videoId]) {
          const asset = Asset.fromModule(videoMapping[videoId]);
          await asset.downloadAsync();
          setVideoSource(asset.localUri || asset.uri);
        }
      } catch (error) {
        console.error('비디오 로딩 오류:', error);
      }
    };
    loadVideo();
  }, [videoId]);

  // videoSource가 준비되지 않아도 후크 호출 순서를 유지하기 위해 빈 문자열을 전달합니다.
  const player = useVideoPlayer(videoSource ?? '', (playerInstance) => {
    if (videoSource) {
      playerInstance.loop = true;
      playerInstance.play();
    }
  });

  // useEvent로 재생 상태를 구독
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  if (!videoSource) {
    return (
      <View style={styles.loadingContainer}>
        <CustomText>비디오 로딩 중...</CustomText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: title || '전래동화' }} />
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        >
          {isPlaying ? (
            <PauseCircle size={32} color="#fff" />
          ) : (
            <PlayCircle size={32} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000' 
  },
  video: {
    width: width,
    height: height * 0.5,
    alignSelf: 'center',
    marginVertical: 50,
  },
  controlsContainer: {
    padding: 10,
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 30,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
