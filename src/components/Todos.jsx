import React, { Component, Fragment } from 'react'
import ToDoItem from './ToDoItem';
import AddTodo from './AddTodo';

class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Brush Teeth',
        isCompleted: false
      },
      {
        id: 2,
        title: 'Clean Room',
        isCompleted: false
      },
      {
        id: 3,
        title: 'Do React App',
        isCompleted: false
      }
    ],
    errorMessage: null
  };

  render() {
    const { todos, errorMessage } = this.state;
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        {errorMessage && <h4>{errorMessage}</h4>}
        <div className='todos'>
          {todos && todos.map(todo => {
            return (
              <Fragment>
                <ToDoItem todo={todo} key={todo.id} removeTodos={this.removeTodo} />
              </Fragment>
            )
          })}
        </div>
      </div>
    )
  }

  removeTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  };

  addTodo = title => {
    if (title === '') this.setState({ errorMessage: 'Must provide To Do' })
    else {
      const newTodo = {
        id: this.state.todos.length + 1,
        title,
        isCompleted: false
      }
      this.setState({ todos: [...this.state.todos, newTodo], errorMessage: null })
    }
  };
};

export default Todos;