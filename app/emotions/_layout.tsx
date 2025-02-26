// app/emotions/_layout.tsx
import { Stack } from 'expo-router';

export default function EmotionLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
