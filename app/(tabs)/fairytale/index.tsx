import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';
import { Header } from '../../../components/fairytale/Header';
import { FeaturedStory } from '../../../components/fairytale/FeaturedStory';
import { RecentStories } from '../../../components/fairytale/RecentStories';
import { Categories } from '../../../components/fairytale/Categories';
import { Story } from '../../../components/fairytale/types';
import { FEATURED_STORY, RECENT_STORIES, CATEGORIES } from '../../../constants/fairytale/stories';

export default function StoryHomeScreen() {
  const router = useRouter();
  const [imagesLoaded, setImagesLoaded] = useState({});

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

  useEffect(() => {
    const allImages = [
      FEATURED_STORY.image,
      ...RECENT_STORIES.map(story => story.image)
    ];

    Promise.all(allImages.map(imageUrl => Image.prefetch(imageUrl)))
      .catch(error => console.warn('Image prefetch failed:', error));
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
      <Categories categories={CATEGORIES} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});