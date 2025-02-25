// app/(tabs)/setting/font.tsx

import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Header } from '../../../components/fairytale/Header';
import CustomText from '@/components/common/CustomText';
import { useFontSettingsContext } from '@/contexts/FontSettingsContext';
import { FONTS } from '@/constants/fonts';
import { Check } from 'lucide-react-native';

const FontSelectionScreen = () => {
  const { fontFamily, fontSize, updateFontFamily, updateFontSize } = useFontSettingsContext();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tipContainer}>
        <CustomText style={styles.tipText}>폰트 사이즈와 종류를 변경할 수 있어요.</CustomText>
        <CustomText style={styles.tipDescription}>
          앱 스토어 혹은 인스타그램을 통해서 추가했으면 하는 폰트 및 앱 사용 후기를 알려주세요.
        </CustomText>
      </View>

      <View style={styles.sliderContainer}>
        <CustomText style={styles.sliderLabel}>A</CustomText>
        <Slider
          style={styles.slider}
          minimumValue={12}
          maximumValue={24}
          value={fontSize}
          onValueChange={updateFontSize}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#888"
          thumbTintColor="#4A90E2"
        />
        <CustomText style={[styles.sliderLabel, { fontSize: 24 }]}>A</CustomText>
      </View>

      <ScrollView contentContainerStyle={styles.fontList}>
        {FONTS.map(({ label, value }) => (
          <TouchableOpacity
            key={value}
            style={styles.fontItem}
            onPress={() => updateFontFamily(value)}
          >
            <CustomText style={[styles.fontText, { fontSize, fontFamily: value }]}>
              {label}
            </CustomText>
            {fontFamily === value && <Check size={20} color="black" />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tipContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  tipText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  tipDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  sliderLabel: {
    fontSize: 16,
    color: '#333333',
  },
  fontList: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  fontItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  fontText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default FontSelectionScreen;
