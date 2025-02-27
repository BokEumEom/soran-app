import { Dimensions } from 'react-native';
// import { Rocket } from 'lucide-react-native'; // 아이콘 import 제거
import { GameOption } from '../types/game/types';

const { width } = Dimensions.get('window');
export const CARD_WIDTH = width * 0.45;
export const CARD_HEIGHT = CARD_WIDTH * 0.97;

export const gameOptions: GameOption[] = [
  {
    title: 'Rock-Paper-Scissors',
    route: '/game/rock',
    colors: ['#ff9a9e', '#fad0c4'],
    // icon: Rocket, // 아이콘 대신 이미지 경로 사용
    image: require('../assets/images/games/image.jpg'),
  },
  {
    title: '2048',
    route: '/game/puzzle',
    colors: ['#a1c4fd', '#c2e9fb'],
    image: require('../assets/images/games/image.jpg'),
  },
  {
    title: 'Memory Game',
    route: '/game/memory',
    colors: ['#fbc2eb', '#a6c1ee'],
    image: require('../assets/images/games/image.jpg'),
  },
  {
    title: 'Pazaak Mobile',
    route: '/game/pazaak',
    colors: ['#fad0c4', '#ffd1ff'],
    image: require('../assets/images/games/image.jpg'),
  },
  {
    title: 'Tetris',
    route: '/game/tetris',
    colors: ['#ffecd2', '#fcb69f'],
    image: require('../assets/images/games/image.jpg'),
  },
  {
    title: 'Othello',
    route: '/game/reversi',
    colors: ['#d4fc79', '#96e6a1'],
    image: require('../assets/images/games/image.jpg'),
  },
  {
    title: 'Chat Quiz',
    route: '/game/quiz',
    colors: ['#d4fc79', '#96e6a1'],
    image: require('../assets/images/games/image.jpg'),
  },
  {
    title: 'Number Puzzle',
    route: '/game/numberpuz',
    colors: ['#d4fc79', '#96e6a1'],
    image: require('../assets/images/games/image.jpg'),
  },
]; 