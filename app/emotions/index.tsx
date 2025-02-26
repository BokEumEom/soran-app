// app/emotions/index.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../../components/fairytale/Header';
import EmotionsSelector from '../../components/emotions/EmotionsSelector';

export default function EmotionsMain() {
  return (
    <View style={styles.container}>
      <Header />
      <EmotionsSelector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
  },
});
