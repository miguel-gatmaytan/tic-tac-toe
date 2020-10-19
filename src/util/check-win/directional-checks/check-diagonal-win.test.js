import checkDiagonalWin from './check-diagonal-win';

const WINNING_TO_RIGHT_DIAGONAL = [
  [1, 1],
  [2, 2],
  [3, 3],
];

const WINNING_TO_LEFT_DIAGONAL = [
  [3, 1],
  [2, 2],
  [1, 3],
];

const LOSING_DIAGONAL = [
  [1, 1],
  [2, 2],
  [3, 1],
  [1, 2],
];

const BOARD_LENGTH = 3;

describe('Confirm Diagonal Wins', () => {
  test('Confirms Winning To Right Diagonal', () => {
    expect(checkDiagonalWin(WINNING_TO_RIGHT_DIAGONAL, BOARD_LENGTH)).toBe(
      true
    );
  });

  test('Confirms Winning To Left Diagonal', () => {
    expect(checkDiagonalWin(WINNING_TO_LEFT_DIAGONAL, BOARD_LENGTH)).toBe(true);
  });

  test('Confirms Losing Diagonal', () => {
    expect(checkDiagonalWin(LOSING_DIAGONAL, BOARD_LENGTH)).toBe(false);
  });
});
