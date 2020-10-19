import { reduce } from 'lodash';

function xAndYAreSame(tile) {
  return tile[0] === tile[1];
}

function xAndYEqualBoardPlusOne(tile, boardLength) {
  return tile[0] + tile[1] === boardLength + 1;
}

export function checkDiagonalWin(tiles, boardLength) {
  const numberOfSameTiles = reduce(
    tiles,
    (result, value) => {
      if (xAndYAreSame(value)) {
        result++;
      }
      return result;
    },
    0
  );

  const numberOfTilesAddedEqualBoardLength = reduce(
    tiles,
    (result, value) => {
      if (xAndYEqualBoardPlusOne(value, boardLength)) {
        result++;
      }
      return result;
    },
    0
  );
  return (
    numberOfSameTiles === boardLength ||
    numberOfTilesAddedEqualBoardLength === boardLength
  );
}

export default checkDiagonalWin;
