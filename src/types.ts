export type GameCellState = (0 | 1 | 2)
export type GameColumn = GameCellState[];
export type GameState = GameColumn[];



export interface DiskIndeces {
  col: number;
  row: number;
}

export interface PlayerHasWon {
  player: 1 | 2;
  indices: DiskIndeces[];
}

export type HasPlayerWon = PlayerHasWon | false;