import { create } from 'zustand';

type Direction = 'up' | 'down' | 'left' | 'right';

interface GameState {
  board: number[][];
  score: number;
  gameOver: boolean;
  moveTiles: (direction: Direction) => void;
  restartGame: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  board: generateInitialBoard(),
  score: 0,
  gameOver: false,
  
  moveTiles: (direction) => {
    const { board } = get();
    const { newBoard, points } = slideTiles(board, direction);
    
    if (hasBoardChanged(board, newBoard)) {
      addRandomTile(newBoard);
      set((state) => ({ 
        board: newBoard,
        score: state.score + points 
      }));
      
      // Check game over after board update
      if (!canMove(newBoard)) {
        set({ gameOver: true });
      }
    }
  },
  
  restartGame: () => {
    set({
      board: generateInitialBoard(),
      score: 0,
      gameOver: false
    });
  }
}));

// Helper Functions

const generateInitialBoard = (): number[][] => {
  const newBoard = Array.from({ length: 4 }, () => Array(4).fill(0));
  addRandomTile(newBoard);
  addRandomTile(newBoard);
  return newBoard;
};

const addRandomTile = (board: number[][]) => {
  const emptyCells = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) emptyCells.push([i, j]);
    }
  }
  if (emptyCells.length > 0) {
    const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[row][col] = Math.random() < 0.9 ? 2 : 4;
  }
};

const slideTiles = (board: number[][], direction: Direction) => {
  let newBoard: number[][];
  let points = 0;

  switch (direction) {
    case 'up':
      newBoard = transpose(board).map(row => slideAndCombine(row));
      newBoard = transpose(newBoard);
      break;
    case 'down':
      newBoard = transpose(board).map(row => slideAndCombine(row.reverse()).reverse());
      newBoard = transpose(newBoard);
      break;
    case 'left':
      newBoard = board.map(row => slideAndCombine(row));
      break;
    case 'right':
      newBoard = board.map(row => slideAndCombine(row.reverse()).reverse());
      break;
    default:
      return { newBoard: board, points: 0 };
  }

  points = calculatePoints(newBoard, board);
  return { newBoard, points };
};

const slideAndCombine = (row: number[]): number[] => {
  const nonZeroTiles = row.filter(num => num !== 0);
  const newRow: number[] = [];

  let i = 0;
  while (i < nonZeroTiles.length) {
    if (i < nonZeroTiles.length - 1 && nonZeroTiles[i] === nonZeroTiles[i + 1]) {
      newRow.push(nonZeroTiles[i] * 2);
      i += 2;
    } else {
      newRow.push(nonZeroTiles[i]);
      i += 1;
    }
  }

  return [...newRow, ...Array(4 - newRow.length).fill(0)];
};

const transpose = (matrix: number[][]): number[][] => {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
};

const hasBoardChanged = (oldBoard: number[][], newBoard: number[][]): boolean => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (oldBoard[i][j] !== newBoard[i][j]) return true;
    }
  }
  return false;
};

const calculatePoints = (newBoard: number[][], oldBoard: number[][]): number => {
  let points = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (newBoard[i][j] !== oldBoard[i][j] && newBoard[i][j] > oldBoard[i][j]) {
        points += newBoard[i][j];
      }
    }
  }
  return points;
};

const canMove = (board: number[][]): boolean => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) return true;
      if (i < 3 && board[i][j] === board[i + 1][j]) return true;
      if (j < 3 && board[i][j] === board[i][j + 1]) return true;
    }
  }
  return false;
}; 