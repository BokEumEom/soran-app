import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Category } from './types';

const { width } = Dimensions.get('window');

interface CategoriesProps {
  categories: Category[];
}

export const Categories = ({ categories }: CategoriesProps) => (
  <View style={styles.categoriesContainer}>
    <Text style={styles.sectionTitle}>동화 카테고리</Text>
    <View style={styles.categoryGrid}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryCard}>
          <MaterialCommunityIcons 
            name={category.icon}
            size={28} 
            color="#FF6B6B" 
          />
          <Text style={styles.categoryTitle}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  categoriesContainer: {
    padding: 20,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#444',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (width - 60) / 2,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    color: '#444',
  },
}); 