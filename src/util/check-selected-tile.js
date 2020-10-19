import { filter } from 'lodash';

export const checkSelectedTile = (arr, target) => {
  return (
    filter(arr, (val) => {
      if (val[0] === target[0] && val[1] === target[1]) {
        return true;
      }
      return false;
    }).length > 0
  );
};

export default checkSelectedTile;
