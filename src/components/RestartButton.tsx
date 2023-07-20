interface RestartButtonProps {
  resetGame: () => void;
  winner: boolean;
  gameHasStarted: boolean;
}

export const RestartButton = ({ resetGame, winner, gameHasStarted }: RestartButtonProps) => {

  const visibility = gameHasStarted ? "" : "hidden";

  return (
    <button 
      onClick={resetGame}
      className={`restart-button ${visibility}`}
    >
      {winner ?
        "New Game" :
        "Restart"
      }
    </button>
  )
}