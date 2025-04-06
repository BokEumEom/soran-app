import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CustomText from "@/components/common/CustomText";
import { Story } from './types';
import { StoryImage } from './StoryImage';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

interface RecentStoriesProps {
  stories: Story[];
  onStoryPress: (story: Story) => void;
  imagesLoaded: Record<string | number, boolean>;
  onImageLoadChange: (id: string | number, isLoaded: boolean) => void;
}

export const RecentStories = ({ stories, onStoryPress, imagesLoaded, onImageLoadChange }: RecentStoriesProps) => (
  <View style={styles.recentContainer}>
    <CustomText style={styles.sectionTitle}>최근 동화</CustomText>
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
            storyId={story.id || 'default'}
            imagesLoaded={imagesLoaded}
            onLoadChange={(id, isLoaded) => onImageLoadChange(id, isLoaded)}
          />
          <CustomText style={styles.recentTitle}>{story.title}</CustomText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  recentContainer: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: width * 0.05, // 5% of screen width
    fontWeight: 'bold',
    marginBottom: width * 0.04, // 4% of screen width
    color: '#444',
  },
  recentCard: {
    marginLeft: 8,
    alignItems: 'center',
  },
  recentImage: {
    width: width * 0.35,
    height: height * 0.25,
    borderRadius: 16,
  },
  recentTitle: {
    fontSize: width * 0.035, // 3.5% of screen width
    fontWeight: '600',
    padding: width * 0.03, // 3% of screen width
    color: '#333',
    textAlign: 'center',
  },
}); 