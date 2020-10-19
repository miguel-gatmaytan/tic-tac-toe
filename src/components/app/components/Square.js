import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Square extends Component {
  render() {
    return (
      <div
        className="square"
        onClick={this.props.onClick}
      >
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Square.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Square;
