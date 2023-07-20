interface WinnerHeaderProps {
  winner: 1 | 2 | null;
}

export const WinnerHeader = ({ winner }: WinnerHeaderProps) => {
  
  return (
    <h2 className={`winner-header ${winner ? 'announce-winner': ''}`}>
      Player {winner} has won!
    </h2>
  )
}