import './App.css'
import { useState, useMemo } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameBoardDropzone } from './components/GameBoardDropzone';
import { ActiveDisk } from './components/ActiveDisk';
import { WinnerHeader } from './components/WinnerHeader';
import { RestartButton } from './components/RestartButton';
import { gameHasWinner } from './winnerDetector';


import {  
  GameColumn, 
  GameState,
} from './types';

const COL_LEN = 6;
const ROW_LEN = 7;

function initializeGameState() {
  const initialGameState: GameState = [];

  for (let i = 0; i < ROW_LEN; i++) {
    const newCol = Array(COL_LEN).fill(0) as GameColumn;
    initialGameState.push(newCol);
  }

  return initialGameState;
}


function App() {
  const [gameState, setGameState] = useState(initializeGameState);
  const [playerOneIsNext, setPlayerOneIsNext] = useState(true);
  const [activeHoverColumn, setActiveHoverColumn] = useState<(number | null)>(null);
  const [winner, setWinner] = useState<(1 | 2 | null)>(null);

  //for each column, calculate the row index of the next disk, null if column is full
  const getNextDiskRowIndeces = () => {
    const nextDiskRowIndeces: (number | null)[] =  [];

    for (const col of gameState) {
      let nextIdx: number | null = null;
      for (let rowIdx = col.length - 1; rowIdx >= 0; rowIdx--) {
        if (col[rowIdx] === 0) {
          nextIdx = rowIdx;
          break;
        }
      }
      nextDiskRowIndeces.push(nextIdx);
    }

    return nextDiskRowIndeces;
  }

  const nextDiskRowIndeces = useMemo(getNextDiskRowIndeces, [gameState]);
  
  const handleDropzoneColumnHover = (id: number) => {
    setActiveHoverColumn(id);
  }

  const handleDropzoneHoverExit = () => {
    setActiveHoverColumn(null);
  }

  const handleDropzoneClick = (colNum: number) => {
    if (winner) return;
    
    const nextRowIdx = nextDiskRowIndeces[colNum];
    if (nextRowIdx !== null) {
      const newGameState = gameState.map((column, i) => {
        if (i !== colNum) return column;

        const diskStatus = playerOneIsNext ? 1 : 2;
        return [...column.slice(0, nextRowIdx), diskStatus, ...column.slice(nextRowIdx + 1)] as GameColumn;
      })

      const winnerFound = gameHasWinner(newGameState);
      if (winnerFound) {
        setWinner(winnerFound.player);
      }

      setGameState(newGameState);
      setPlayerOneIsNext(!playerOneIsNext)
    }
  }

  const resetGame = () => {
    setGameState(initializeGameState);
    setPlayerOneIsNext(true);
    setWinner(null);
  }

  const gameHasStarted = nextDiskRowIndeces.some(idx => idx !== COL_LEN - 1);

  return (
    <div className="main-content">
      <h1>Four in a row</h1>
      
      <WinnerHeader winner={winner} />
      
      { !winner && 
        <ActiveDisk playerOneIsNext={playerOneIsNext}/>
      }
      
      <GameBoardDropzone 
        handleMouseEnter={handleDropzoneColumnHover}
        handleMouseLeave={handleDropzoneHoverExit}
        activeColumn={activeHoverColumn}
        handleClick={handleDropzoneClick}
      />
      <GameBoard 
        gameState={gameState} 
        activeHoverColumn={activeHoverColumn}
        nextDiskIndeces={nextDiskRowIndeces}
        playerOneIsNext={playerOneIsNext}
      />

      <RestartButton 
        resetGame={resetGame} 
        winner={winner !== null} 
        gameHasStarted={gameHasStarted}
      />
    </div>
  )
}

export default App
