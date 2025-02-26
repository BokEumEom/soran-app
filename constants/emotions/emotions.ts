export type EmotionIconName =
  | 'smile-plus'
  | 'frown'
  | 'angry'
  | 'siren'
  | 'Wind'
  | 'meh';

export type Emotion = {
  title: string;
  description: string;
  colors: readonly [string, string];
  icon: EmotionIconName;
  route: `/emotions/${string}`;
};

export const emotions: Emotion[] = [
  {
    title: '긍정적 감정',
    description: '현재 기분이 긍정적이에요.',
    colors: ['#FFE082', '#FFD54F'],
    icon: 'smile-plus',
    route: '/emotions/positiveEmotions',
  },
  {
    title: '슬픔/우울감',
    description: '현재 기분이 우울해요.',
    colors: ['#90CAF9', '#64B5F6'],
    icon: 'frown',
    route: '/emotions/sadness',
  },
  {
    title: '분노/짜증',
    description: '현재 기분이 화가 나요.',
    colors: ['#EF9A9A', '#E57373'],
    icon: 'angry',
    route: '/emotions/anger',
  },
  {
    title: '스트레스/압박감',
    description: '현재 스트레스를 받고 있어요.',
    colors: ['#FFCC80', '#FFB74D'],
    icon: 'siren',
    route: '/emotions/stress',
  },
  {
    title: '불안/불확실감',
    description: '현재 기분이 불안해요.',
    colors: ['#B39DDB', '#9575CD'],
    icon: 'Wind',
    route: '/emotions/anxiety',
  },
  {
    title: '무관심/흥미 상실',
    description: '현재 아무런 흥미를 느끼지 않아요.',
    colors: ['#CFD8DC', '#B0BEC5'],
    icon: 'meh',
    route: '/emotions/apathy',
  },
]; 