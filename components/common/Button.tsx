import React from 'react';
import { 
  TouchableOpacity,  
  StyleSheet, 
  ActivityIndicator, 
  View, 
  ViewStyle, 
  TextStyle 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonProps } from '../../types/common';
import CustomText from "@/components/common/CustomText";

interface CustomButtonProps extends ButtonProps {
  gradientColors?: readonly [string, string, ...string[]];
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<CustomButtonProps> = ({ 
  title, 
  onPress, 
  disabled = false, 
  loading = false,
  gradientColors,
  style,
  textStyle
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[style, disabled && styles.disabledButton]}
    >
      {gradientColors ? (
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.button]}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <CustomText style={[styles.buttonText, textStyle]}>{title}</CustomText>
          )}
        </LinearGradient>
      ) : (
        <View style={[styles.button, { backgroundColor: '#6A92B8' }]}>
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <CustomText style={[styles.buttonText, textStyle]}>{title}</CustomText>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
