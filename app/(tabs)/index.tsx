import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Header } from '../../components/fairytale/Header';
import ProgressSection from '@/components/home/ProgressSection';
import ResignationBanner from '@/components/home/ResignationBanner';
import DashboardGrid from '@/components/home/DashboardGrid';
import VideoSection from '@/components/home/VideoSection';

export default function HomeScreen() {
  const renderItem = () => (
    <>
      <ProgressSection />
      <ResignationBanner />
      <DashboardGrid />
      <VideoSection />
    </>
  );

  return (
    <View style={styles.container}>
    <Header />
      <FlatList
        style={styles.listcontent}
        data={[{ key: 'content' }]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  listcontent: {
    paddingHorizontal: 15,
    paddingVertical: 15
  }
});
