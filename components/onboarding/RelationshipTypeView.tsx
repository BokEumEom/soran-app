import React, { useCallback, useMemo } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

interface RelationshipTypeViewProps {
  types: { id: string; label: string }[];
  selectedType: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const PADDING_HORIZONTAL = 16; // 디바이스 좌우 패딩
const GAP = 8; // 버튼 간 여백
const BUTTON_WIDTH = (SCREEN_WIDTH - PADDING_HORIZONTAL * 2 - GAP * 2) / 2; // 정확한 2열 정렬 (간격 고려)
const IMAGE_SIZE = SCREEN_WIDTH * 0.4;
export const RelationshipTypeView: React.FC<RelationshipTypeViewProps> = React.memo(
  ({ types, selectedType, onSelect, onNext }) => {
    const router = useRouter();

    const handleSelect = useCallback(
      (id: string) => onSelect(id),
      [onSelect]
    );

    const handleSkip = useCallback(() => {
      router.push('/'); // Navigate to home screen
    }, [router]);

    const renderedTypes = useMemo(
      () =>
        types.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.typeButton,
              { backgroundColor: selectedType === type.id ? '#FACC15' : 'transparent' },
            ]}
            onPress={() => handleSelect(type.id)}
          >
            <Text
              style={[
                styles.typeButtonText,
                { color: selectedType === type.id ? '#fff' : '#333' },
              ]}
            >
              {type.label}
            </Text>
          </TouchableOpacity>
        )),
      [types, selectedType, handleSelect]
    );

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <Image source={require('@/assets/images/icon.png')} style={styles.logoImage} />
            <Text style={styles.title}>소란스러운 내면, 이겨내는 나</Text>
            <Text style={styles.subtitle}>소란과 함께 관계 개선을 위한</Text>
            <Text style={styles.subtitle}>첫 걸음을 시작해볼까요?</Text>

            <Text style={styles.selectTitle}>고민되는 관계를 선택해주세요.</Text>

            {/* ✅ 버튼 컨테이너 (항상 한 줄에 2개씩 꽉 차도록 설정) */}
            <View style={styles.typesContainer}>{renderedTypes}</View>
          </View>
        </ScrollView>

        {/* ✅ 하단 버튼 컨테이너 (푸터) */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>건너뛰기</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Text style={styles.nextButtonText}>시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  logoImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  selectTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
  },
  typesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  typeButton: {
    width: BUTTON_WIDTH,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FACC15',
    borderRadius: 15,
    marginHorizontal: GAP / 2,
    marginBottom: GAP,
  },
  typeButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: PADDING_HORIZONTAL,
    position: 'absolute',
    bottom: 20,
  },
  skipButton: {
    width: BUTTON_WIDTH,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    marginHorizontal: GAP / 2,
  },
  skipButtonText: {
    fontWeight: '700',
    color: '#666',
    fontSize: 16,
  },
  nextButton: {
    width: BUTTON_WIDTH,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FACC15',
    marginHorizontal: GAP / 2,
  },
  nextButtonText: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 18,
  },
});
