import { GameState } from '../types';

const noWinner1: GameState = [
  [0,1,1,2,2,1],
  [0,0,1,1,2,1],
  [0,0,1,2,2,2],
  [2,1,2,2,1,2],
  [0,1,2,1,1,2],
  [0,0,1,1,2,1],
  [0,0,1,1,2,2],
]

const noWinner2: GameState = [
  [0,0,1,2,1,1],
  [0,0,2,1,2,1],
  [0,2,1,2,1,2],
  [1,2,2,2,1,1],
  [0,1,2,1,2,2],
  [0,2,1,1,1,2],
  [0,0,1,2,2,2],
]

const horizontalWinner1: GameState = [
  [0,0,1,2,2,1],
  [0,0,2,1,2,1],
  [0,2,1,2,2,2],
  [1,2,1,2,2,1],
  [0,1,2,1,1,2],
  [0,0,1,1,1,2],
  [0,0,1,2,2,2],
]

const horizontalWinner2: GameState = [
  [0,0,1,2,2,1],
  [0,0,2,1,1,1],
  [0,2,1,2,2,2],
  [1,2,1,2,2,1],
  [0,1,1,1,1,2],
  [0,2,1,1,1,2],
  [0,0,0,2,2,2],
]

export default {
  noWinner1,
  noWinner2,
  horizontalWinner1,
  horizontalWinner2,
}