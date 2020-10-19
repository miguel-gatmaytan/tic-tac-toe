import { reduce, forEach } from 'lodash';

export function checkVerticalWin(tiles, boardLength) {
  let win = false;
  /*This piece organizes the x and y coordinates into an object like below..
    tiles: [[1,1], [1,2], [1,3]]

    to

    {
      1: [1,2,3]
    }

    This way, we can tell that it is a vertical win when all the x coordinates
    are the same and the y coordinates take up all of the spots.
  */
  const organizedTiles = reduce(
    tiles,
    (result, value) => {
      if (!result[value[1]]) {
        result[value[1]] = [value[0]];
      } else {
        result[value[1]].push(value[0]);
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

export default checkVerticalWin;
