import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = () => (
  <LinearGradient colors={['#FFB7B7', '#FFE2E2']} style={styles.header}>
    <View style={styles.headerContent}>
      <Text style={styles.greeting}>안녕하세요!</Text>
      <TouchableOpacity style={styles.profileButton}>
        <MaterialCommunityIcons name="account-circle" size={32} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  profileButton: {
    padding: 4,
  },
}); 