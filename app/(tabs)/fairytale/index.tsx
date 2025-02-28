import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
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
  const [imagesLoaded, setImagesLoaded] = useState<Record<string | number, boolean>>({});

  const handleImageLoadChange = (id: string | number, isLoaded: boolean) => {
    setImagesLoaded(prev => ({ ...prev, [id]: isLoaded }));
  };

  const navigateToStory = (story: Story) => {
    router.push({
      pathname: '/fairytale/story',
      params: {
        title: story.title,
        description: story.description,
        image: story.image
      }
    });
  };

  const navigateToCategory = (category: CategoryData) => {
    router.push('/fairytale/story');
  };

  useEffect(() => {
    const allImages = [
      FEATURED_STORY.image,
      ...RECENT_STORIES.map(story => story.image),
    ];

    const preloadImages = async () => {
      try {
        const imagePromises = allImages.map((imageUrl, index) => {
          const id = index === 0 ? 'featured' : `recent-${index}`;
          if (typeof imageUrl === 'string') {
            return Asset.fromURI(imageUrl).downloadAsync()
              .then(() => handleImageLoadChange(id, true))
              .catch(() => handleImageLoadChange(id, false));
          } else {
            return Asset.fromModule(imageUrl).downloadAsync()
              .then(() => handleImageLoadChange(id, true))
              .catch(() => handleImageLoadChange(id, false));
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
    <ScrollView style={styles.container}>
      <Header />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});