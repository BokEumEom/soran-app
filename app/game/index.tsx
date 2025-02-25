import React from 'react';
import { View, StyleSheet, Pressable, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Header } from '../../components/fairytale/Header';
import CustomText from '@/components/common/CustomText';
import { LinearGradient } from 'expo-linear-gradient';
import { gameOptions, CARD_WIDTH, CARD_HEIGHT } from '../../constants/gameConstants';

export default function GameSelectionScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={gameOptions}
        keyExtractor={(item) => item.route}
        renderItem={({ item }) => {
          const Icon = item.icon;
          return (
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
              onPress={() => router.push(item.route)}
            >
              <LinearGradient
                colors={item.colors}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.cardContent}>
                  <Icon size={54} color="#FFFFFF" />
                </View>
                <View style={styles.cardFooter}>
                  <CustomText style={styles.cardTitle}>{item.title}</CustomText>
                </View>
              </LinearGradient>
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
    backgroundColor: '#F5F6FA',
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
  },
  cardPressed: {
    opacity: 0.9,
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFooter: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});