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
    image: require('../assets/images/games/rock-paper-scissors.webp'),
  },
  {
    title: '2048',
    route: '/game/puzzle',
    colors: ['#a1c4fd', '#c2e9fb'],
    image: require('../assets/images/games/2048.webp'),
  },
  {
    title: 'Memory Game',
    route: '/game/memory',
    colors: ['#fbc2eb', '#a6c1ee'],
    image: require('../assets/images/games/memory.webp'),
  },
  {
    title: 'Pazaak Mobile',
    route: '/game/pazaak',
    colors: ['#fad0c4', '#ffd1ff'],
    image: require('../assets/images/games/pazaak.webp'),
  },
  {
    title: 'Tetris',
    route: '/game/tetris',
    colors: ['#ffecd2', '#fcb69f'],
    image: require('../assets/images/games/tetris.webp'),
  },
  {
    title: 'Othello',
    route: '/game/reversi',
    colors: ['#d4fc79', '#96e6a1'],
    image: require('../assets/images/games/othello.webp'),
  },
  {
    title: 'Chat Quiz',
    route: '/game/quiz',
    colors: ['#d4fc79', '#96e6a1'],
    image: require('../assets/images/games/quiz.webp'),
  },
  {
    title: 'Number Puzzle',
    route: '/game/numberpuz',
    colors: ['#d4fc79', '#96e6a1'],
    image: require('../assets/images/games/number-puzzle.webp'),
  },
]; 