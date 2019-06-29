import React, { Component } from 'react';

class RemoveTodo extends Component {
  render() {
    return (
      <button className="btn" onClick={this.props.removeTodo}>Remove</button>
    )
  };
};

export default RemoveTodo;