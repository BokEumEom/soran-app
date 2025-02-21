import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Header from '@/components/home/Header';
import ProgressSection from '@/components/home/ProgressSection';
import ResignationBanner from '@/components/home/ResignationBanner';
import DashboardGrid from '@/components/home/DashboardGrid';
import VideoSection from '@/components/home/VideoSection';

export default function HomeScreen() {
  const renderItem = () => (
    <>
      <Header />
      <ProgressSection />
      <ResignationBanner />
      <DashboardGrid />
      <VideoSection />
    </>
  );

  return (
    <FlatList
      style={styles.container}
      data={[{ key: 'content' }]}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      keyExtractor={(item) => item.key}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 60,
    backgroundColor: '#F5F5F5',
  },
});
