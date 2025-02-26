import React, { useEffect } from 'react';
import { View, StyleSheet, Pressable, FlatList, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Header } from '../../components/fairytale/Header';
import CustomText from '@/components/common/CustomText';
import { Asset } from 'expo-asset';
import { gameOptions, CARD_WIDTH, CARD_HEIGHT } from '../../constants/gameConstants';

export default function GameSelectionScreen() {
  const router = useRouter();

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = gameOptions.map(item => {
          if (typeof item.image === 'number') {
            return Asset.fromModule(item.image).downloadAsync();
          } else if (typeof item.image === 'string') {
            return Asset.fromURI(item.image).downloadAsync();
          }
          return Promise.resolve(); // fallback if image가 없는 경우
        });
        await Promise.all(imagePromises);
        console.log('All images preloaded');
      } catch (error) {
        console.log('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  return (
    <View style={styles.container}>
      <Header 
        title="게임 고!고!"
      />
      <FlatList
        data={gameOptions}
        keyExtractor={(item) => item.route}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
              onPress={() => router.push(item.route)}
            >
              <Image source={item.image} style={styles.gameImage} />
              <View style={styles.overlay} />
              <View style={styles.cardFooter}>
                <CustomText style={styles.cardTitle}>{item.title}</CustomText>
              </View>
            </Pressable>
          );
        }}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 15,
    overflow: 'hidden',
    margin: 5,
    elevation: 5,
    backgroundColor: 'white',
    position: 'relative',
  },
  cardPressed: {
    opacity: 0.9,
  },
  gameImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  cardFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
