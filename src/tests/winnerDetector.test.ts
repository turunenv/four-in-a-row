import { describe, expect, it } from 'vitest';
import { gameHasWinner } from '../winnerDetector';
import testCases from './gameStateTestCases';


describe('gameHasWinner-function', () => {

  describe('gameStates with no winner', () => {
    it('returns false', () => {
      expect(gameHasWinner(testCases.noWinner1)).equal(false);
    })
    it('returns false, different configuration', () => {
      expect(gameHasWinner(testCases.noWinner2)).equal(false);
    })
  })

  describe('gameState with horizontal winner', () => {
    it('returns player 1 as the winner when four 1:s in a row horizontally', () => {
      expect(gameHasWinner(testCases.horizontalWinner1)).toMatchObject({
        player: 2,
        indices: [
          {col: 0, row: 4}, {col: 1, row: 4}, {col: 2, row: 4}, {col: 3, row: 4}
        ]
      })
    })
  })
  
  
})

