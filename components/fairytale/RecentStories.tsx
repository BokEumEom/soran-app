import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Story } from './types';
import { StoryImage } from './StoryImage';

interface RecentStoriesProps {
  stories: Story[];
  onStoryPress: (story: Story) => void;
  imagesLoaded: Record<string | number, boolean>;
  onImageLoadChange: (id: string | number, isLoaded: boolean) => void;
}

export const RecentStories = ({ stories, onStoryPress, imagesLoaded, onImageLoadChange }: RecentStoriesProps) => (
  <View style={styles.recentContainer}>
    <Text style={styles.sectionTitle}>최근 동화</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {stories.map((story) => (
        <TouchableOpacity 
          key={story.id} 
          style={styles.recentCard}
          onPress={() => onStoryPress(story)}
        >
          <StoryImage
            uri={story.image}
            style={styles.recentImage}
            storyId={story.id}
            imagesLoaded={imagesLoaded}
            onLoadChange={(id, isLoaded) => onImageLoadChange(id, isLoaded)}
          />
          <Text style={styles.recentTitle}>{story.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  recentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#444',
  },
  recentCard: {
    width: 140,
    marginRight: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  recentImage: {
    width: 140,
    height: 140,
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: '600',
    padding: 12,
    color: '#333',
    textAlign: 'center',
  },
}); 