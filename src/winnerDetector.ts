import { GameState, HasPlayerWon } from './types';

export function gameHasWinner(game: GameState): HasPlayerWon {
  const horizontalCheck = checkHorizontal(game);
  if (horizontalCheck) return horizontalCheck;

  const verticalCheck = checkVertical(game);
  if (verticalCheck) return verticalCheck;

  const diagonalsCheck = checkDiagonals(game);
  if (diagonalsCheck) return diagonalsCheck;

  return false;
}

function checkVertical(game: GameState): HasPlayerWon {

  for (let j = 0; j < game.length; j++) {
    const col = game[j];
    for (let i = 0; i < col.length - 3; i++) {
      if (col[i] !== 0 && col[i] === col[i+1] && col[i+1] === col[i+2] && col[i+2] === col[i+3]) {
        return {
          player: col[i] as (1 | 2),
          indices: [
            { col: j, row: i },
            { col: j, row: i + 1 },
            { col: j, row: i + 2 },
            { col: j, row: i + 3 }, 
          ]
        }
      }
    }
  }
  return false;
}

function checkHorizontal(game: GameState): HasPlayerWon {

  for (let i = 0; i < game[0].length; i++) {
    for (let j = 0; j < game.length - 3; j++) {
      if (game[j][i] !== 0 && game[j][i] === game[j+1][i] && game[j+1][i] === game[j+2][i] && game[j+2][i] === game[j+3][i]) {
        return {
          player: game[j][i] as (1 | 2),
          indices: [
            { col: i, row: j },
            { col: i + 1, row: j },
            { col: i + 2, row: j },
            { col: i + 3, row: j }, 
          ]
        }
      }
    }
  }
  return false;
}

function checkDiagonals(game: GameState): HasPlayerWon {

  const ROW_LEN = game.length;
  const COL_LEN = game[0].length;

  let playerHasWon: HasPlayerWon = false;

  let colIdx_1 = 0;
  let colIdx_2 = ROW_LEN;
  let rowIdx = 0;

  while(colIdx_1 < ROW_LEN) {
    
    playerHasWon = checkForNorthEastWinner(game, colIdx_1, rowIdx) || 
                   checkForNorthWestWinner(game, colIdx_2, rowIdx);
    if (playerHasWon) return playerHasWon;

    if (colIdx_1 === ROW_LEN - 1) break;

    colIdx_1++;
    colIdx_2 = ROW_LEN - colIdx_1;
  }

  while(rowIdx < COL_LEN) {

    playerHasWon = checkForNorthEastWinner(game, colIdx_1, rowIdx) ||
                   checkForNorthWestWinner(game, colIdx_2, rowIdx);
    if (playerHasWon) return playerHasWon;

    rowIdx++;
  }
  return false;
}

function checkForNorthWestWinner(game: GameState, colIdx: number, rowIdx: number): HasPlayerWon {
 if (!coordinatesInBounds(colIdx + 3, rowIdx + 3, game.length, game[0].length)) return false;

 if (
  game[colIdx][rowIdx] !== 0 &&
  game[colIdx][rowIdx] === game[colIdx + 1][rowIdx + 1] &&
  game[colIdx + 1][rowIdx + 1] === game[colIdx + 2][rowIdx + 2] &&
  game[colIdx + 2][rowIdx + 2] === game[colIdx + 3][rowIdx + 3]
 ) {
    return {
      player: game[colIdx][rowIdx] as (1 | 2),
      indices: [
        { col: colIdx, row: rowIdx },
        { col: colIdx + 1, row: rowIdx + 1 },
        { col: colIdx + 2, row: rowIdx + 2},
        { col: colIdx + 3, row: rowIdx + 3}
      ]
  }
 }
 return checkForNorthWestWinner(game, colIdx + 1, rowIdx + 1);
}

function checkForNorthEastWinner(game: GameState, colIdx: number, rowIdx: number): HasPlayerWon {

  if (!coordinatesInBounds(colIdx - 3, rowIdx + 3, game.length, game[0].length)) return false;

  if (
    game[colIdx][rowIdx] !== 0 &&
    game[colIdx][rowIdx] === game[colIdx - 1][rowIdx + 1] &&
    game[colIdx - 1][rowIdx + 1] === game[colIdx - 2][rowIdx + 2] &&
    game[colIdx - 2][rowIdx + 2] === game[colIdx - 3][rowIdx + 3]
  ) {
    return {
      player: game[colIdx][rowIdx] as (1 | 2),
      indices: [
        { col: colIdx, row: rowIdx },
        { col: colIdx - 1, row: rowIdx + 1 },
        { col: colIdx - 2, row: rowIdx + 2},
        { col: colIdx - 3, row: rowIdx + 3}
      ]
    }
  }

  return checkForNorthEastWinner(game, colIdx - 1, rowIdx + 1);
  
}

function coordinatesInBounds(colIdx: number, rowIdx: number, ROW_LEN: number, COL_LEN: number) {
  const colIdxInBounds = (colIdx >= 0 && colIdx < ROW_LEN);
  const rowIdxInBounds = (rowIdx >= 0 && rowIdx < COL_LEN);

  return colIdxInBounds && rowIdxInBounds;
}






