import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CustomText from "@/components/common/CustomText";
import { Story } from './types';
import { StoryImage } from './StoryImage';

interface FeaturedStoryProps {
  story: {
    title: string;
    image: string | number;  // 로컬 이미지를 위해 number 타입 추가
    description: string;
  };
  onPress: () => void;
  imagesLoaded: Record<string | number, boolean>;
  onImageLoadChange: (id: string | number, isLoaded: boolean) => void;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const ITEM_WIDTH = screenWidth * 0.9;
const ITEM_HEIGHT = screenHeight / 2.1;

export const FeaturedStory = ({ story, onPress, imagesLoaded, onImageLoadChange }: FeaturedStoryProps) => (
  <View style={styles.featuredContainer}>
    <CustomText style={styles.sectionTitle}>오늘의 동화</CustomText>
    <TouchableOpacity style={styles.featuredCard} onPress={onPress}>
      <StoryImage
        uri={story.image}
        style={styles.featuredImage}
        storyId="featured"
        imagesLoaded={imagesLoaded}
        onLoadChange={(id, isLoaded) => onImageLoadChange(id, isLoaded)}
      />
      <View style={styles.featuredContent}>
        <CustomText style={styles.featuredTitle}>{story.title}</CustomText>
        <CustomText style={styles.featuredDescription}>{story.description}</CustomText>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  featuredContainer: {
    padding: screenWidth * 0.05,
  },
  sectionTitle: {
    fontSize: screenWidth * 0.05,
    fontWeight: 'bold',
    marginBottom: screenWidth * 0.04,
    color: '#444',
  },
  featuredCard: {
    backgroundColor: '#FFF',
    borderRadius: screenWidth * 0.04,
  },
  featuredImage: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 16,
  },
  featuredContent: {
    padding: screenWidth * 0.04,
  },
  featuredTitle: {
    fontSize: screenWidth * 0.045,
    fontWeight: 'bold',
    marginBottom: screenWidth * 0.02,
    color: '#333',
  },
  featuredDescription: {
    fontSize: screenWidth * 0.035,
    color: '#666',
    lineHeight: screenWidth * 0.05,
  },
}); 