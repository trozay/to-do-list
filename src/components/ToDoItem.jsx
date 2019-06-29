import React, { Component, Fragment } from 'react';

class ToDoItem extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='container-fluid'>
        <input className='input-group-text input-group-append' type='checkbox' />
        <h3>{this.props.todo.title}</h3>
        <button className="btn" onClick={() => this.props.removeTodos(this.props.todo.id)}>Remove</button>
      </div>
    )
  }
};

export default ToDoItem;