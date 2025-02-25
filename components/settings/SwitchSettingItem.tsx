import React from 'react';
import { Switch, StyleSheet } from 'react-native';
import { SettingsItem } from './SettingsItem';
import CustomText from '@/components/common/CustomText';

interface SwitchSettingItemProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  timeText?: string;
}

export const SwitchSettingItem = ({ 
  label, 
  value, 
  onValueChange, 
  timeText 
}: SwitchSettingItemProps) => {
  return (
    <SettingsItem label={label}>
      {timeText && <CustomText style={styles.timeText}>{timeText}</CustomText>}
      <Switch value={value} onValueChange={onValueChange} />
    </SettingsItem>
  );
};

const styles = StyleSheet.create({
  timeText: {
    fontSize: 16,
    color: '#555555',
    marginRight: 10,
  },
}); 