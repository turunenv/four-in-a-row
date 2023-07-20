import { GameColumn } from "../types";
import './styles/GameBoardColumn.css';

import { GameBoardCell } from "./GameBoardCell";

interface GameBoardColProps {
  column: GameColumn;
  isActiveHoverCol: boolean;
  playerOneIsNext: boolean;
}

export const GameBoardColumn = ({ column, isActiveHoverCol, playerOneIsNext }: GameBoardColProps) => {
  

  return (
    <div className="game-board-col">
      {column.map((status, i) => (
          <GameBoardCell 
            status={status} 
            key={i} 
            hoverIsActive={isActiveHoverCol}
            playerOneIsNext={playerOneIsNext}
          />
        )
      
        
      )}
    </div>
  )
}