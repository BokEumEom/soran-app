export interface MeditationType {
  id: number;
  title: string;
  image: string;
  audio: string;
}

export const MEDITATION_DATA: MeditationType[] = [
  {
      id: 1,
      title: "Mountains",
      image: "trees.webp",
      audio: "trees.mp3",
  },
  {
      id: 2,
      title: "Rivers",
      image: "river.webp",
      audio: "river.mp3",
  },
  {
      id: 3,
      title: "Sunset",
      image: "meditate-under-tree.webp",
      audio: "meditate-under-tree.mp3",
  },
  {
      id: 4,
      title: "Beaches",
      image: "beach.webp",
      audio: "beach.mp3",
  },
  {
      id: 5,
      title: "Starry Night",
      image: "yosemite-stars.webp",
      audio: "yosemite-stars.mp3",
  },
  {
      id: 6,
      title: "Waterfall",
      image: "waterfall.webp",
      audio: "waterfall.mp3",
  },
];

const BASE_URL =
  "https://raw.githubusercontent.com/BokEumEom/makeup-app/refs/heads/main/assets/audio";

export const AUDIO_FILES: { [key: string]: string } = {
  "trees.mp3": `${BASE_URL}/trees.mp3`,
  "river.mp3": `${BASE_URL}/river.mp3`,
  "meditate-under-tree.mp3": `${BASE_URL}/meditate-under-tree.mp3`,
  "beach.mp3": `${BASE_URL}/beach.mp3`,
  "yosemite-stars.mp3": `${BASE_URL}/yosemite-stars.mp3`,
  "waterfall.mp3": `${BASE_URL}/waterfall.mp3`,
};