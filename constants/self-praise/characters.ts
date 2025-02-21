import { ImageURISource } from 'react-native';

const BASE_URL = 'https://raw.githubusercontent.com/BokEumEom/compliments-app/refs/heads/main/public/assets/';
const characters: ImageURISource[] = Array.from({ length: 26 }, (_, i) => {
  const paddedIndex = i.toString().padStart(2, '0');
  return { uri: `${BASE_URL}character${paddedIndex}.webp` };
});

export default characters;