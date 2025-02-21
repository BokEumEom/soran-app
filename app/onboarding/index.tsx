import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { relationshipTypes } from '@/constants/RelationshipModel';
import { RelationshipTypeView } from '@/components/onboarding/RelationshipTypeView';

type RelationshipType = string; // Consider making this more specific based on your actual types

const RelationshipTypeScreen: React.FC = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<RelationshipType | null>(null);

  const handleNext = () => {
    if (selectedType) {
      router.push({
        pathname: '/onboarding/question',
        params: { relationshipType: selectedType },
      });
    } else {
      alert('관계 유형을 선택해주세요.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RelationshipTypeView
        types={relationshipTypes}
        selectedType={selectedType}
        onSelect={setSelectedType}
        onNext={handleNext}
      />
    </SafeAreaView>
  );
};

export default RelationshipTypeScreen;
