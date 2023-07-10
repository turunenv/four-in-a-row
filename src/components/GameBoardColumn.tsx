import { GameColumn } from "../types";
import './styles/GameBoardColumn.css';

import { GameBoardCell } from "./GameBoardCell";

interface GameBoardColProps {
  column: GameColumn;
  isActiveHoverCol: boolean;
  nextDiskIndex: number | null;
}

export const GameBoardColumn = ({ column, isActiveHoverCol, nextDiskIndex }: GameBoardColProps) => {

  return (
    <div className="game-board-col">
      {column.map((status, i) => {
        return (
          <GameBoardCell 
            status={status} 
            key={i} 
            hoverIsActive={isActiveHoverCol}
            isNextDiskCell={isActiveHoverCol && nextDiskIndex === i} 
          />
        )
      }
        
      )}
    </div>
  )
}