import { GameRow } from "../types";
import './styles/GameBoardRow.css';

import { GameBoardCell } from "./GameBoardCell";

interface GameBoardRowProps {
  row: GameRow;
  activeHoverColumn: number | null;
  nextDiskIndex: number | null;
}

export const GameBoardRow = ({ row, activeHoverColumn, nextDiskIndex }: GameBoardRowProps) => {

  return (
    <div className="game-board-row">
      {row.map((status, i) => {
        const hoverIsActive = (activeHoverColumn === i && nextDiskIndex !== null);

        return <GameBoardCell status={status} key={i} hoverIsActive={hoverIsActive}/>
      }
        
      )}
    </div>
  )
}