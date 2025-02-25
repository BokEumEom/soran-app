import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import CustomText from "@/components/common/CustomText";

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Update the interface to match the actual data structure
interface CategoryData {
  id?: string | number;
  title: string;
  imageUrl: string;
}

interface CategoriesProps {
  categories: CategoryData[];
  onCategoryPress: (category: CategoryData) => void;
}

export const Categories = ({ categories, onCategoryPress }: CategoriesProps) => (
  <View style={styles.categoriesContainer}>
    <CustomText style={styles.sectionTitle}>동화 카테고리</CustomText>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.categoryCard}
          onPress={() => onCategoryPress(category)}
        >
          <Image 
            source={{ uri: category.imageUrl }}
            style={styles.categoryImage}
            resizeMode="cover"
          />
          <CustomText style={styles.categoryTitle}>{category.title}</CustomText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: width * 0.04,
    color: '#444',
  },
  categoryCard: {
    marginLeft: 8,
    alignItems: 'center',
  },
  categoryImage: {
    width: width * 0.26,
    height: height * 0.17,
    borderRadius: width * 0.04,
  },
  categoryTitle: {
    fontSize: width * 0.035,
    fontWeight: '600',
    padding: width * 0.03,
    color: '#333',
    textAlign: 'center',
  },
}); 