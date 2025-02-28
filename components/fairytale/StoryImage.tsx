import React, { useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { ImageIcon } from 'lucide-react-native';

interface StoryImageProps {
  uri: string | number;
  style: StyleProp<ImageStyle>;
  storyId: string | number;
  imagesLoaded: Record<string | number, boolean>;
  onLoadChange: (id: string | number, isLoaded: boolean) => void;
}

export const StoryImage = ({ uri, style, storyId, imagesLoaded, onLoadChange }: StoryImageProps) => {
  const [isLoading, setIsLoading] = useState(!imagesLoaded[storyId]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoadChange(storyId, true);
  };

  const handleError = () => {
    setIsLoading(false);
    onLoadChange(storyId, false);
  };

  return (
    <View style={[style, { overflow: 'hidden' }]}>
      {isLoading && (
        <View style={[style, styles.loadingContainer]}>
          <ActivityIndicator size="large" color="#FF9500" />
        </View>
      )}
      
      {typeof uri === 'string' ? (
        <Image
          source={{ uri }}
          style={[style, isLoading && styles.hiddenImage]}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <Image
          source={uri}
          style={[style, isLoading && styles.hiddenImage]}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </View>
  );
};

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
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hiddenImage: {
    opacity: 0,
  },
}); 