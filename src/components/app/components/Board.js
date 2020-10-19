import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BOARD_LENGTH } from 'constants/board-constants';
import { checkSelectedTile } from 'util/check-selected-tile';

import Square from './Square';

export class Board extends Component {
  render() {
    const rows = [];
    for (let y = 1; y <= BOARD_LENGTH; y++) {
      const squares = [];
      for (let x = 1; x <= BOARD_LENGTH; x++) {
        const inXTiles = checkSelectedTile(this.props.xTiles, [x, y]);
        const inOTiles = checkSelectedTile(this.props.oTiles, [x, y]);

        squares.push(
          <Square onClick={() => this.props.addTile([x, y])}>
            {inXTiles ? 'X' : inOTiles ? 'O' : ''}
          </Square>
        );
      }
      rows.push(<div className="board-row">{squares}</div>);
    }
    return <div className="board">{rows}</div>;
  }
}

Board.propTypes = {
  xTiles: PropTypes.array,
  oTiles: PropTypes.array,
  addTile: PropTypes.func.isRequired
}

export default Board;
