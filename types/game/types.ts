import { LucideIcon } from 'lucide-react-native';

export type GameOption = {
  title: string;
  route: `/${string}`; // Type-safe route
  colors: [string, string, ...string[]]; // Tuple with at least two colors
  icon: LucideIcon;
}; 