import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface StoryImageProps {
  uri: string;
  style: any;
  storyId: string | number;
  imagesLoaded: Record<string | number, boolean>;
  onLoadChange: (id: string | number, isLoaded: boolean) => void;
}

export const StoryImage = ({ uri, style, storyId, imagesLoaded, onLoadChange }: StoryImageProps) => (
  <View style={styles.imageContainer}>
    <Image
      source={{ uri }}
      style={style}
      onLoadStart={() => onLoadChange(storyId, false)}
      onLoad={() => onLoadChange(storyId, true)}
    />
    {!imagesLoaded[storyId] && (
      <View style={[styles.imagePlaceholder, style]}>
        <MaterialCommunityIcons 
          name="image" 
          size={style.height > 150 ? 40 : 30} 
          color="#DDD" 
        />
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  imagePlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 