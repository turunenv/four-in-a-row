interface WinnerHeaderProps {
  winner: 1 | 2 | null;
}

export const WinnerHeader = ({ winner }: WinnerHeaderProps) => {
  
  return (
    <div className="winner-header">
      { winner &&
        <h2>Player {winner} has won!</h2>
      }
    </div>
    
  )
}