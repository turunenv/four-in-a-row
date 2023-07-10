import { ActiveDisk } from './ActiveDisk';
import { GameBoardColumn } from './GameBoardColumn';

import './styles/GameBoard.css';
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
      {gameState.map((col, i) => (
        <GameBoardColumn
          key={i}
          isActiveHoverCol={i === activeHoverColumn} 
          column={col} 
          nextDiskIndex={nextDiskIndeces[i]}
        />
      ))}
    </div>
  )
}