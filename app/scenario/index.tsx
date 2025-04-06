import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { scenarios } from '../../constants/scenarios';
import { useRouter } from 'expo-router';
import { Header } from '../../components/fairytale/Header';
import { Ionicons } from '@expo/vector-icons';
import { Scenario } from '@/types/scenario';

const ScenarioListScreen = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: Scenario }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => router.push(`/scenario/${item.id}`)}
    >
      <View style={styles.iconAndTextContainer}>
        <View style={styles.icon}>
          <Ionicons 
            name={
              item.id === 1 ? 'hand-left-outline' :  // 비즈니스/갈등 상황
              item.id === 2 ? 'bulb-outline' :       // 윤리적 딜레마
              item.id % 2 === 0 ? 'heart-outline' : 'happy-outline'  // 인연과 관계 (번갈아가며)
            } 
            size={24} 
            color="#FFFFFF"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header 
        title="스토리 시뮬레이션"
      />
      <FlatList
        data={scenarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ScenarioListScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F7FA',
  },
  listContainer: { 
    padding: 20, 
  },
  itemContainer: {
    backgroundColor: '#1F618D',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  iconAndTextContainer: {
    flexDirection: 'row', 
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 20,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  textContainer: {
    flex: 1,
  },
  title: { 
    fontSize: 16, 
    fontWeight: '600', 
    marginBottom: 8, 
    color: '#FFFFFF',
    lineHeight: 22,
    letterSpacing: -0.3,
  },
  description: { 
    fontSize: 14, 
    color: '#E2E8F0',
    lineHeight: 20,
    letterSpacing: -0.2,
    opacity: 0.9,
  },
});
