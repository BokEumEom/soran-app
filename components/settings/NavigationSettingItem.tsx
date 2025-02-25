import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SettingsItem } from './SettingsItem';

interface NavigationSettingItemProps {
  label: string;
  onPress?: () => void;
}

export const NavigationSettingItem = ({ 
  label, 
  onPress 
}: NavigationSettingItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SettingsItem label={label} />
    </TouchableOpacity>
  );
}; 