import React from 'react';

class AddTodo extends React.Component {
  state = {
    title: '',
    value: ''
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-group input-group mb-3'>
        <label>Add Todo <input type='text' id='addTodoInput' onChange={this.updateNewTodoTitle} value={this.state.title} /></label>
        <input className='form-control' type='submit' />
      </form>
    )
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    e.target.value = ''
    this.setState({ title: '' })
  };

  updateNewTodoTitle = e => {
    this.setState({ title: e.target.value });
  };
};

export default AddTodo;