import React, { useCallback, useMemo } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

interface RelationshipTypeViewProps {
  types: { id: string; label: string }[];
  selectedType: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const PADDING_HORIZONTAL = 16; // 디바이스 좌우 패딩
const GAP = 8; // 버튼 간 여백 (8px)
const BUTTON_WIDTH = (SCREEN_WIDTH - PADDING_HORIZONTAL * 2 - GAP * 2) / 2; // 정확한 2열 정렬 (간격 고려)

export const RelationshipTypeView: React.FC<RelationshipTypeViewProps> = React.memo(
  ({ types, selectedType, onSelect, onNext }) => {
    const router = useRouter();

    const handleSelect = useCallback(
      (id: string) => onSelect(id),
      [onSelect]
    );

    const handleSkip = useCallback(() => {
      router.push('/');// Navigate to home screen
    }, [router]);

    const renderedTypes = useMemo(
      () =>
        types.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={{
              width: BUTTON_WIDTH, // 정확한 2열 정렬
              paddingVertical: 14,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#FACC15',
              borderRadius: 15,
              backgroundColor: selectedType === type.id ? '#FACC15' : 'transparent',
              marginHorizontal: GAP / 2, // 좌우 여백 동일하게 맞추기
              marginBottom: GAP, // 아래쪽 버튼 간격 유지
            }}
            onPress={() => handleSelect(type.id)}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: selectedType === type.id ? '#fff' : '#333',
              }}
            >
              {type.label}
            </Text>
          </TouchableOpacity>
        )),
      [types, selectedType, handleSelect]
    );

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 40,
          backgroundColor: '#fff',
          paddingHorizontal: PADDING_HORIZONTAL, // 디바이스와 콘텐츠 간격 16px
        }}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center', paddingBottom: 20 }}>
            <Image
              source={require('@/assets/images/icon.png')}
              style={{
                width: SCREEN_WIDTH * 0.4,
                height: SCREEN_WIDTH * 0.4,
                marginBottom: 30,
                resizeMode: 'contain',
              }}
            />
            <Text style={{ fontSize: 24, fontWeight: '500', textAlign: 'center', color: '#666', marginBottom: 20 }}>
              소란스러운 내면, 이겨내는 나
            </Text>
            <Text style={{ fontSize: 16, textAlign: 'center', color: '#666' }}>소란과 함께 관계 개선을 위한</Text>
            <Text style={{ fontSize: 16, textAlign: 'center', color: '#666' }}>첫 걸음을 시작해볼까요?</Text>

            <Text style={{ fontSize: 18, fontWeight: '700', color: '#000', marginTop: 50, marginBottom: 30, textAlign: 'center' }}>
              고민되는 관계를 선택해주세요.
            </Text>

            {/* ✅ 버튼 컨테이너 (항상 한 줄에 2개씩 꽉 차도록 설정) */}
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              {renderedTypes}
            </View>
          </View>
        </ScrollView>

        {/* ✅ 하단 버튼 컨테이너 (푸터) */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            paddingHorizontal: PADDING_HORIZONTAL, // 디바이스 여백 16px 유지
            position: 'absolute',
            bottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: BUTTON_WIDTH, // 푸터 버튼도 동일한 크기 적용
              paddingVertical: 15,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ccc',
              marginHorizontal: GAP / 2, // 푸터 버튼도 동일한 간격 적용
            }}
            onPress={handleSkip}
          >
            <Text style={{ fontWeight: '700', color: '#666', fontSize: 16 }}>건너뛰기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: BUTTON_WIDTH, // 푸터 버튼도 동일한 크기 적용
              paddingVertical: 15,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FACC15',
              marginHorizontal: GAP / 2, // 푸터 버튼도 동일한 간격 적용
            }}
            onPress={onNext}
          >
            <Text style={{ fontWeight: '700', color: '#fff', fontSize: 18 }}>시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);
