import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Story } from './types';
import { StoryImage } from './StoryImage';

interface FeaturedStoryProps {
  story: Story;
  onPress: () => void;
  imagesLoaded: Record<string | number, boolean>;
  onImageLoadChange: (id: string | number, isLoaded: boolean) => void;
}

export const FeaturedStory = ({ story, onPress, imagesLoaded, onImageLoadChange }: FeaturedStoryProps) => (
  <View style={styles.featuredContainer}>
    <Text style={styles.sectionTitle}>오늘의 동화</Text>
    <TouchableOpacity style={styles.featuredCard} onPress={onPress}>
      <StoryImage
        uri={story.image}
        style={styles.featuredImage}
        storyId="featured"
        imagesLoaded={imagesLoaded}
        onLoadChange={(id, isLoaded) => onImageLoadChange(id, isLoaded)}
      />
      <View style={styles.featuredContent}>
        <Text style={styles.featuredTitle}>{story.title}</Text>
        <Text style={styles.featuredDescription}>{story.description}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  featuredContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#444',
  },
  featuredCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  featuredDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
}); 