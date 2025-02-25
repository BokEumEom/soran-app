import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { Header } from '@/components/fairytale/Header';
import { StoryContent } from '../../../components/fairytale/StoryContent';
import { PageNavigation } from '../../../components/fairytale/PageNavigation';
import { ProgressDots } from '../../../components/fairytale/ProgressDots';
import { useStoryAnimation } from '@/hooks/useStoryAnimation';
import { GestureDetector } from 'react-native-gesture-handler';
import { COLORS } from '@/constants/fairytale/colors';
import { storyPages } from '@/constants/fairytale/stories';

const { width, height } = Dimensions.get('window');
const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function StoryDetailScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const currentStory = storyPages[currentPage];
  if (!currentStory) {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }

  const changePage = useCallback((direction: number) => {
    const newPage = currentPage + direction;
    if (newPage >= 0 && newPage < storyPages.length) {
      setCurrentPage(newPage);
    }
  }, [currentPage]);

  const { 
    titleStyle, 
    imageAnimatedStyle, 
    panGesture, 
    pageStyle, 
    resetAnimations 
  } = useStoryAnimation(currentPage, changePage);

  const handleLoadChange = useCallback((id: string | number, isLoaded: boolean) => {
    // 이미지 로드 완료 시 배경 이미지 설정 및 애니메이션 초기화
    if (isLoaded && id === currentPage) {
      setBackgroundImage(currentStory.image);
      resetAnimations();
    }
  }, [currentPage, currentStory.image, resetAnimations]);

  useEffect(() => {
    if (currentPage < storyPages.length - 1) {
      const nextImageUrl = storyPages[currentPage + 1].image;
      Image.prefetch(nextImageUrl).catch(error => {
        console.log('Image prefetch error:', error);
      });
    }
  }, [currentPage]);

  return (
    <View style={styles.container}>
      <Header />
      <LinearGradient colors={COLORS.background} style={styles.background}>
        {backgroundImage && (
          <Animated.Image
            source={{ uri: backgroundImage }}
            style={[StyleSheet.absoluteFillObject, styles.backgroundImage]}
            blurRadius={30}
          />
        )}
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.pageContainer, pageStyle]}>
            <AnimatedImage
              source={{ uri: currentStory.image }}
              style={[styles.storyImage, imageAnimatedStyle]}
              onLoadStart={() => handleLoadChange(currentPage, false)}
              onLoadEnd={() => handleLoadChange(currentPage, true)}
              onError={(e) => {
                console.log('Image load error:', e.nativeEvent.error);
                handleLoadChange(currentPage, true);
              }}
            />
            <StoryContent
              title={currentStory.title}
              text={currentStory.text}
              titleStyle={titleStyle}
            />
            <PageNavigation
              currentPage={currentPage}
              totalPages={storyPages.length}
              onChangePage={changePage}
            />
            <ProgressDots
              currentPage={currentPage}
              totalPages={storyPages.length}
            />
          </Animated.View>
        </GestureDetector>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, padding: 20 },
  pageContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  storyImage: {
    width: '100%',
    height: height * 0.45,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  backgroundImage: { opacity: 0.5 },
});
