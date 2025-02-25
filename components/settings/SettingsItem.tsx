import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '@/components/common/CustomText';

interface SettingsItemProps {
  label: string;
  children?: React.ReactNode;
}

export const SettingsItem = ({ label, children }: SettingsItemProps) => {
  return (
    <View style={styles.item}>
      <CustomText style={styles.label}>{label}</CustomText>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 15,
    color: '#333333',
  },
}); 