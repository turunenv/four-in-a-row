import './App.css'
import { useState, useMemo } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameBoardDropzone } from './components/GameBoardDropzone';


import { GameColumn, GameState } from './types';

function initializeGameState() {
  const initialGameState: GameState = [];

  for (let i = 0; i < 7; i++) {
    const newCol = Array(6).fill(0) as GameColumn;
    initialGameState.push(newCol);
  }

  return initialGameState;
}


function App() {
  const [gameState, setGameState] = useState(initializeGameState);
  const [activeHoverColumn, setActiveHoverColumn] = useState<(number | null)>(null);

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
  console.log(nextDiskRowIndeces);
  
  const handleDropzoneColumnHover = (id: number) => {
    setActiveHoverColumn(id);
  }

  const handleDropzoneHoverExit = () => {
    setActiveHoverColumn(null);
  }

  return (
    <div className="main-content">
      <h1>Four in a row</h1>
      <GameBoardDropzone 
        handleMouseEnter={handleDropzoneColumnHover}
        handleMouseLeave={handleDropzoneHoverExit}
        activeColumn={activeHoverColumn}
      />
      <GameBoard 
        gameState={gameState} 
        activeHoverColumn={activeHoverColumn}
        nextDiskIndeces={nextDiskRowIndeces}
      />
    </div>
  )
}

export default App
