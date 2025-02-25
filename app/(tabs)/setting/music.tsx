import React, { useEffect } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from '../../../components/fairytale/Header';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '@/components/common/CustomText';
import songs from '@/constants/songs';
import useMusicPlayer from '@/hooks/useMusicPlayer';
import { useRouter } from 'expo-router';

const MusicChangeScreen = () => {
  const { selectedSong, selectSong, stopMusic, isPlaying } = useMusicPlayer(songs, songs[0].name);
  const router = useRouter();

  // 뒤로 가기 처리
  const handleBackPress = async () => {
    try {
      await stopMusic(); // 음악 재생 중지
      router.back(); // 이전 화면으로 이동
    } catch (error) {
      console.error('Failed to handle back press:', error);
    }
  };

  // 컴포넌트 언마운트 시 음악 중지
  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, [stopMusic]);

  const handleSelectSong = async (song: { name: string; file: any }) => {
    try {
      const previousState = isPlaying;
      await selectSong(song.name, previousState);
      alert(`음악 "${song.name}" 으로 변경되었습니다.`);
      // 선택 후 자동으로 이전 화면으로 돌아가기
      setTimeout(() => router.back(), 1000);
    } catch (error) {
      console.error('Failed to select and play song:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={songs}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.songItem,
              selectedSong === item.name && styles.selectedSong,
            ]}
            onPress={() => handleSelectSong(item)}
          >
            <CustomText
              style={[
                styles.songText,
                selectedSong === item.name && styles.selectedSongText,
              ]}
            >
              {item.name}
            </CustomText>
            {selectedSong === item.name && (
              <Ionicons name="checkmark" size={20} color="#00796B" />
            )}
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  songItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 20,
  },
  songText: {
    fontSize: 16,
    color: '#333333',
  },
  selectedSong: {
    backgroundColor: '#E0F7FA',
    borderRadius: 8,
  },
  selectedSongText: {
    fontWeight: 'bold',
    color: '#00796B',
  },
});

export default MusicChangeScreen;
