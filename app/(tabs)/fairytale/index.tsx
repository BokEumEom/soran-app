// StoryHomeScreen.tsx (또는 Categories를 렌더링하는 화면)
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Header } from '../../../components/fairytale/Header';
import { FeaturedStory } from '../../../components/fairytale/FeaturedStory';
import { RecentStories } from '../../../components/fairytale/RecentStories';
import { Categories } from '@/components/fairytale/Categories';
import { Story } from '../../../components/fairytale/types';
import { FEATURED_STORY, RECENT_STORIES, CATEGORIES } from '../../../constants/fairytale/stories';
import { Asset } from 'expo-asset';

interface CategoryData {
  id?: string | number;
  title: string;
  imageUrl: string;
}

export default function StoryHomeScreen() {
  const router = useRouter();
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleImageLoadChange = (id: string | number, isLoaded: boolean) => {
    setImagesLoaded(prev => ({ ...prev, [id]: isLoaded }));
  };

  // FeaturedStory와 RecentStories가 이동할 Story 페이지는 /fairytale (index.tsx)
  const navigateToStory = (story: Story) => {
    router.push({
      pathname: '/fairytale/story',
      params: {
        title: story.title,
        description: story.description,
        image: story.image,
      },
    });
  };

  // "전래동화" 선택 시 VideoPlayer 페이지로, 그 외 카테고리는 Story 페이지(/fairytale)로 이동
  const navigateToCategory = (category: CategoryData) => {
    if (category.title === '전래동화') {
      router.push({
        pathname: '/fairytale/video',
        params: {
          videoId: '1', // 전래동화에 해당하는 동영상 ID 또는 파일 식별자
          title: category.title,
        },
      });
    } else {
      router.push('/fairytale/story');
    }
  };

  useEffect(() => {
    const allImages = [
      FEATURED_STORY.image,
      ...RECENT_STORIES.map(story => story.image),
    ];

    const preloadImages = async () => {
      try {
        const imagePromises = allImages.map(imageUrl => {
          if (typeof imageUrl === 'string') {
            return Asset.fromURI(imageUrl).downloadAsync();
          } else {
            return Asset.fromModule(imageUrl).downloadAsync();
          }
        });
        await Promise.all(imagePromises);
        console.log('All images preloaded');
      } catch (error) {
        console.warn('Image prefetch failed:', error);
      }
    };

    preloadImages();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollcontainer}>
        <FeaturedStory
          story={FEATURED_STORY}
          onPress={() => navigateToStory(FEATURED_STORY)}
          imagesLoaded={imagesLoaded}
          onImageLoadChange={handleImageLoadChange}
        />
        <RecentStories
          stories={RECENT_STORIES}
          onStoryPress={navigateToStory}
          imagesLoaded={imagesLoaded}
          onImageLoadChange={handleImageLoadChange}
        />
        <Categories
          categories={CATEGORIES}
          onCategoryPress={navigateToCategory}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollcontainer: {
    
  }
});
