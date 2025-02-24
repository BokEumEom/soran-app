import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/constants/fairytale/colors';

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onChangePage: (direction: number) => void;
}

export const PageNavigation = ({ currentPage, totalPages, onChangePage }: PageNavigationProps) => {
  return (
    <>
      {currentPage > 0 && (
        <TouchableOpacity
          style={[styles.navigationButton, styles.leftButton]}
          onPress={() => onChangePage(-1)}
        >
          <MaterialCommunityIcons 
            name="chevron-left" 
            size={36} 
            color={COLORS.primary} 
          />
        </TouchableOpacity>
      )}
      
      {currentPage < totalPages - 1 && (
        <TouchableOpacity
          style={[styles.navigationButton, styles.rightButton]}
          onPress={() => onChangePage(1)}
        >
          <MaterialCommunityIcons 
            name="chevron-right" 
            size={36} 
            color={COLORS.primary} 
          />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  navigationButton: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  leftButton: {
    left: -25,
  },
  rightButton: {
    right: -25,
  },
}); 