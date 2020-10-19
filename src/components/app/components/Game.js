import React, { Component } from 'react';
import { uniq } from 'lodash';
import checkWin from 'util/check-win';
import { BOARD_LENGTH } from 'constants/board-constants';
import { checkSelectedTile } from 'util/check-selected-tile';

import Board from './Board';

export class Game extends Component {
  state = {
    playerIsX: true,
    winner: false,
    xTiles: [],
    oTiles: [],
  };

  checkWinner = () => {
    if (this.state.xTiles.length >= BOARD_LENGTH) {
      if (checkWin(this.state.xTiles, BOARD_LENGTH)) {
        this.setState({ winner: 'X' });
      }
    }

    if (this.state.oTiles.length >= BOARD_LENGTH) {
      if (checkWin(this.state.oTiles, BOARD_LENGTH)) {
        this.setState({ winner: 'O' });
      }
    }
  };

  addTile = (tile) => {
    let keyToUpdate = this.state.playerIsX ? 'xTiles' : 'oTiles';

    if (this.state.winner) {
      return;
    }

    if (!this.state.playerIsX) {
      const inXTiles = checkSelectedTile(this.state.xTiles, tile);

      if (inXTiles) {
        return;
      }
    } else {
      const inOTiles = checkSelectedTile(this.state.oTiles, tile);

      if (inOTiles) {
        return;
      }
    }
    this.setState(
      {
        [keyToUpdate]: uniq([...this.state[keyToUpdate], tile]),
        playerIsX: !this.state.playerIsX,
      },
      () => {
        this.checkWinner();
      }
    );
  };

  render() {
    return (
      <div className="game">
        <div>Current Player: {this.state.playerIsX ? 'X' : 'O'}</div>
        <div>WINNER: {this.state.winner || 'None'}</div>
        <Board
          addTile={this.addTile}
          winner={this.state.winner}
          xTiles={this.state.xTiles}
          oTiles={this.state.oTiles}
        />
      </div>
    );
  }
}

export default Game;
