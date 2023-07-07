import { ActiveDisk } from './ActiveDisk';
import { GameBoardRow } from './GameBoardRow';

import { GameState } from '../types';

interface GameBoardProps {
  gameState: GameState;
  activeHoverColumn: number | null;
  nextDiskIndeces: (number | null)[];
}

export const GameBoard = ({ 
  gameState, 
  activeHoverColumn,
  nextDiskIndeces
}: GameBoardProps) => {
  return (
    <div className="game-board">
      {gameState.map((row, i) => (
        <GameBoardRow 
          key={i}
          activeHoverColumn={activeHoverColumn} 
          row={row} 
          nextDiskIndex={nextDiskIndeces[i]}
        />
      ))}
    </div>
  )
}