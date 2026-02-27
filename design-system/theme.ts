import { tokens } from './tokens';

export const theme = {
  ...tokens,
  // Add any helper functions or computed theme values here
  getSpacing: (multiplier: number) => `${multiplier * 4}px`,
};

export type Theme = typeof theme;
