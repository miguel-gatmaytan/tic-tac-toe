import checkDiagonalWin from './directional-checks/check-diagonal-win';
import checkVerticalWin from './directional-checks/check-vertical-win';
import checkHorizontalWin from './directional-checks/check-horizontal-win';

export function checkWin(tiles, boardLength) {
  let verticalWin = checkVerticalWin(tiles, boardLength);
  let horizontalWin = checkHorizontalWin(tiles, boardLength);
  let diagonalWin = checkDiagonalWin(tiles, boardLength);

  if (verticalWin || horizontalWin || diagonalWin) {
    return true;
  }

  return false;
}

export default checkWin;
