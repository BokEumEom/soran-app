import React from 'react';
import { View, StyleSheet } from 'react-native';
import DashboardCard from './DashboardCard';

const dashboardData: {
  title: string;
  subtitle: string;
  image: any; // Path to the image
  link: string;
}[] = [
  {
    title: '감정 지수',
    subtitle: '나의 감정 상태',
    image: require('@/assets/images/category/emotions.jpg'),
    link: '/emotions',
  },
  {
    title: 'MBTI',
    subtitle: '성격 유형 분석',
    image: require('@/assets/images/category/mbti.jpg'),
    link: '/mbti',
  },
  {
    title: 'GAME',
    subtitle: '즐겜 GO!GO!',
    image: require('@/assets/images/category/game.jpg'),
    link: '/game',
  },
  {
    title: '시나리오',
    subtitle: '가상 상황 연습',
    image: require('@/assets/images/category/scenario.jpg'),
    link: '/scenario',
  },
  {
    title: '마음챙김',
    subtitle: '명상과 휴식',
    image: require('@/assets/images/category/meditate.jpg'),
    link: '/meditate',
  },
  {
    title: '셀프칭찬',
    subtitle: '긍정의 한마디',
    image: require('@/assets/images/category/self-praise.jpg'),
    link: '/self-praise',
  },
];

const DashboardGrid: React.FC = () => {
  return (
    <View style={styles.grid}>
      {dashboardData.map((data, index) => (
        <DashboardCard key={index} {...data} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default DashboardGrid;
