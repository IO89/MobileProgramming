import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', todos: [], date: '' }
  }

  inputChanged = (event) => {
    this.setState({ [event.target.name]: event.target.value });

  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, { desc: this.state.description, date: this.state.date }]
    });
  }

  deleteItem = (event) => {
    const index = +event.target.id;
    event.preventDefault();
    this.setState({
      todos: [delete this.state.todos.filter((item, index) => item !== index)]
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            Description:
            <input type="text" name="description" onChange={this.inputChanged} value={this.state.description} />
              Date:
            <input type="date" name="date" onChange={this.inputChanged} value={this.state.date} />
              <input type="submit" value="Add" />
             </form>
        </div>
        <div>
          
            <TodoTable todos={this.state.todos} />
          
        
        </div>
      </div>
    );
  }
}

export default App;