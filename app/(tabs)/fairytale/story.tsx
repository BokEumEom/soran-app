import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@/constants/fairytale/colors';
import { storyPages } from '@/constants/fairytale/stories';
import Animated from 'react-native-reanimated';
import { Header } from '@/components/fairytale/Header';
import { StoryContent } from '../../../components/fairytale/StoryContent';
import { PageNavigation } from '../../../components/fairytale/PageNavigation';
import { ProgressDots } from '../../../components/fairytale/ProgressDots';
import { useStoryAnimation } from '@/hooks/useStoryAnimation';
import { GestureDetector } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function StoryDetailScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string | number, boolean>>({});

  const currentStory = storyPages[currentPage];
  if (!currentStory) {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }

  const changePage = (direction: number) => {
    const newPage = currentPage + direction;
    if (newPage >= 0 && newPage < storyPages.length) {
      setCurrentPage(newPage);
    }
  };

  // useStoryAnimation 훅에서 제스처 핸들러와 페이지 이동 애니메이션 스타일을 함께 받아옴
  const { titleStyle, imageAnimatedStyle, panGesture, pageStyle } = useStoryAnimation(currentPage, changePage);

  const handleLoadChange = (id: string | number, isLoaded: boolean) => {
    setImagesLoaded(prev => ({
      ...prev,
      [id]: isLoaded,
    }));
  };

  return (
    <View style={styles.container}>
      <Header />
      <LinearGradient colors={COLORS.background} style={styles.background}>
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
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 20,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
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
});
