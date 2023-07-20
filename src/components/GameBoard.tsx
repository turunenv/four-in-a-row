import { ActiveDisk } from './ActiveDisk';
import { GameBoardColumn } from './GameBoardColumn';

import './styles/GameBoard.css';
import { GameState, HasPlayerWon } from '../types';

interface GameBoardProps {
  gameState: GameState;
  activeHoverColumn: number | null;
  nextDiskIndeces: (number | null)[];
  playerOneIsNext: boolean;
}

export const GameBoard = ({ 
  gameState, 
  activeHoverColumn,
  playerOneIsNext
}: GameBoardProps) => {
  return (
    <div className="game-board">
      {gameState.map((col, i) => (
        <GameBoardColumn
          key={i}
          isActiveHoverCol={i === activeHoverColumn} 
          column={col} 
          playerOneIsNext={playerOneIsNext}
        />
      ))}
    </div>
  )
}