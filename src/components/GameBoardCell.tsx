import './styles/GameBoardCell.css';

interface CellProps {
  status: 0 | 1 | 2;
  hoverIsActive: boolean;
  playerOneIsNext: boolean;
}

export const GameBoardCell = ({ status, hoverIsActive }: CellProps) => {
  const statusClassName =
    status === 1
    ? 'player-1'
    : status === 2
    ? 'player-2'
    : 'empty';

  return (
    <div className="game-board-cell">
      <div className={`${statusClassName} ${hoverIsActive ? 'hover-active' : ''}`}></div>
    </div>
  )
}