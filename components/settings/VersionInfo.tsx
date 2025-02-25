import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '@/components/common/CustomText';

export const VersionInfo = () => {
  return (
    <View style={styles.footer}>
      <CustomText style={styles.footerLabel}>나의 Soran 버전</CustomText>
      <CustomText style={styles.versionText}>0.0.1</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  footerLabel: {
    fontSize: 16,
    color: '#888888',
  },
  versionText: {
    fontSize: 16,
    color: '#888888',
  },
}); 