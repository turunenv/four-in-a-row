import './styles/GameBoardCell.css';

interface CellProps {
  status: 0 | 1 | 2;
  hoverIsActive: boolean;
  isNextDiskCell: boolean;
}

export const GameBoardCell = ({ status, hoverIsActive, isNextDiskCell }: CellProps) => {
  const statusClassName =
    status === 1
    ? 'player-1'
    : status === 2
    ? 'player-2'
    : 'empty';


  return (
    <div className="game-board-cell">
      <div className={`
          ${statusClassName} 
          ${hoverIsActive ? 'hover-active' : ''}
          ${isNextDiskCell ? 'disk-preview' : ''}
          `}
     ></div>
    </div>
  )
}