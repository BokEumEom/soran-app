import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { UserRound } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from "@/components/common/CustomText";

// 타입 정의 추가
interface HeaderProps {
  title?: string;
  gradientColors?: string[];
  textColor?: string;
  iconColor?: string;
}

export const Header = ({
  title = '안녕하세요!',
  gradientColors = ['#FFB7B7', '#FFE2E2'],
  textColor = '#FF6B6B',
  iconColor = '#FF6B6B'
}: HeaderProps) => (
  <LinearGradient colors={gradientColors} style={styles.header}>
    <View style={styles.headerContent}>
      <CustomText style={[styles.greeting, { color: textColor }]}>{title}</CustomText>
      <TouchableOpacity style={styles.profileButton}>
        <UserRound size={32} color={iconColor} />
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