import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { UserRound } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from "@/components/common/CustomText";

export const Header = () => (
  <LinearGradient colors={['#FFB7B7', '#FFE2E2']} style={styles.header}>
    <View style={styles.headerContent}>
      <CustomText style={styles.greeting}>안녕하세요!</CustomText>
      <TouchableOpacity style={styles.profileButton}>
        <UserRound size={32} color="#FF6B6B" />
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