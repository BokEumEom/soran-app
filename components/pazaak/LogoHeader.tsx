// components/pazaak/LogoHeader.tsx

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

/** 
 * 베이스 URL 분리 
 * => 여러 이미지를 사용할 때, 공통 경로를 재활용해 가독성과 유지보수 향상 
 */
const BASE_URL =
  'https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/images';

const cardImage = {
  uri: `${BASE_URL}/spread-cards.png`,
};

const LogoHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={cardImage} style={styles.cardImage} />
      <Text style={styles.logo}>PAZAAK</Text>
      <Text style={styles.subLogo}>ONLINE</Text>
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  cardImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  logo: {
    fontSize: 40,
    color: '#FFD700',
    fontWeight: 'bold',
    fontFamily: 'DepartureMono',
  },
  subLogo: {
    fontSize: 16,
    color: '#FFD700',
    fontFamily: 'DepartureMono',
    letterSpacing: 2,
  },
});
