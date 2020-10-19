import { reduce, forEach } from 'lodash';

export function checkHorizontalWin(tiles, boardLength) {
  let win = false;
  /*This piece organizes the x and y coordinates into an object like below..
    tiles: [[1,1], [2,1], [3,1]]

    to

    {
      1: [1,2,3]
    }

    This way, we can tell that it is a vertical win when all the y coordinates
    are the same and the x coordinates take up all of the spots.
  */
  const organizedTiles = reduce(
    tiles,
    (result, value) => {
      if (!result[value[0]]) {
        result[value[0]] = [value[1]];
      } else {
        result[value[0]].push(value[1]);
      }
      return result;
    },
    {}
  );

  forEach(organizedTiles, (tile) => {
    if (tile.length === boardLength) {
      win = true;
    }
  });

  return win;
}

export default checkHorizontalWin;
