import { Dimensions } from 'react-native';
import { Dices } from 'lucide-react-native';
import { GameOption } from '../../types/game/types';

const { width } = Dimensions.get('window');
export const CARD_WIDTH = width * 0.45;
export const CARD_HEIGHT = CARD_WIDTH * 0.97;

export const gameOptions: GameOption[] = [
  {
    title: 'Rock-Paper-Scissors',
    route: '/game/rock',
    colors: ['#ff9a9e', '#fad0c4'],
    icon: Dices,
  },
  {
    title: '2048',
    route: '/game/puzzle',
    colors: ['#a1c4fd', '#c2e9fb'],
    icon: Dices,
  },
  {
    title: 'Memory Game',
    route: '/game/memory',
    colors: ['#fbc2eb', '#a6c1ee'],
    icon: Dices,
  },
  {
    title: 'Pazaak Mobile',
    route: '/game/pazaak',
    colors: ['#fad0c4', '#ffd1ff'],
    icon: Dices,
  },
  {
    title: 'Tetris',
    route: '/game/tetris',
    colors: ['#ffecd2', '#fcb69f'],
    icon: Dices,
  },
  {
    title: 'Othello',
    route: '/game/reversi',
    colors: ['#d4fc79', '#96e6a1'],
    icon: Dices,
  },
  {
    title: 'Chat Quiz',
    route: '/game/quiz',
    colors: ['#d4fc79', '#96e6a1'],
    icon: Dices,
  },
  {
    title: 'Number Puzzle',
    route: '/game/numberpuz',
    colors: ['#d4fc79', '#96e6a1'],
    icon: Dices,
  },
]; 