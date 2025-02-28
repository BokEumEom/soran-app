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
    image: require('../assets/images/games/image03.jpg'),
  },
  {
    title: '2048',
    route: '/game/puzzle',
    image: require('../assets/images/games/image03.jpg'),
  },
  {
    title: 'Memory Game',
    route: '/game/memory',
    image: require('../assets/images/games/image03.jpg'),
  },
  {
    title: 'Pazaak Mobile',
    route: '/game/pazaak',
    image: require('../assets/images/games/image03.jpg'),
  },
  {
    title: 'Tetris',
    route: '/game/tetris',
    image: require('../assets/images/games/image03.jpg'),
  },
  {
    title: 'Othello',
    route: '/game/reversi',
    image: require('../assets/images/games/image03.jpg'),
  },
  {
    title: 'Chat Quiz',
    route: '/game/quiz',
    image: require('../assets/images/games/image03.jpg'),
  },
  {
    title: 'Number Puzzle',
    route: '/game/numberpuz',
    image: require('../assets/images/games/image03.jpg'),
  },
]; 