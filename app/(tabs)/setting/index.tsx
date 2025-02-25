// app/(tabs)/setting/index.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../../../components/fairytale/Header';
import { useRouter } from 'expo-router';
import useMusicPlayer from '@/hooks/useMusicPlayer';
import songs from '@/constants/songs';
import { SwitchSettingItem } from '@/components/settings/SwitchSettingItem';
import { NavigationSettingItem } from '@/components/settings/NavigationSettingItem';
import { VersionInfo } from '@/components/settings/VersionInfo';

const SettingsScreen = () => {
  const router = useRouter();
  const [personalAlert, setPersonalAlert] = useState(false);
  const { isPlaying, toggleMusic } = useMusicPlayer(songs, songs[0].name);

  return (
    <View style={styles.container}>
      <Header />

      <SwitchSettingItem
        label="배경음악"
        value={isPlaying}
        onValueChange={async () => {
          try {
            await toggleMusic();
          } catch (error) {
            console.error('Failed to toggle music:', error);
          }
        }}
      />

      <SwitchSettingItem
        label="나만의 알림 설정"
        value={personalAlert}
        onValueChange={setPersonalAlert}
        timeText="6:00 PM"
      />

      <NavigationSettingItem label="다크모드/라이트모드" />
      <NavigationSettingItem label="언어 설정" />
      <NavigationSettingItem 
        label="음악 변경" 
        onPress={() => router.push('/setting/music')} 
      />
      <NavigationSettingItem 
        label="폰트 변경" 
        onPress={() => router.push('/setting/font')} 
      />
      <NavigationSettingItem 
        label="Tab 구현" 
        onPress={() => router.push('/setting/tabs')} 
      />
      <NavigationSettingItem 
        label="배경화면 구현" 
        onPress={() => router.push('/setting/wallpaper')} 
      />
      <NavigationSettingItem 
        label="VerticalList 구현" 
        onPress={() => router.push('/setting/animations')} 
      />

      <VersionInfo />

      <NavigationSettingItem label="앱 별점 남기기" />
      <NavigationSettingItem label="의견 및 피드백 남기기" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default SettingsScreen;
