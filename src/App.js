import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {generateId, addTodo, findById, toggleTodo, updateTodo} from './lib/todoHelpers';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isCompleted: true},
        {id: 2, name: 'Build an awesome website', isCompleted: false},
        {id: 3, name: 'Ship it!', isCompleted: false}
      ],
      currentTodo: ''
    }
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const updatedTodo = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, updatedTodo);
    this.setState({
      todos: updatedTodos
    })
  }

  handleInputChange = (evt) => {
    this.setState({currentTodo: evt.target.value});
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    const id = generateId();
    const newTodo = {name: this.state.currentTodo, isCompleted: false, id: id};
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  onEmptyFormSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please enter a valid todo.'
    })
  }

  render() {
    const formSubmit = this.state.currentTodo ? this.onFormSubmit : this.onEmptyFormSubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
            onFormSubmit={formSubmit}/>
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
