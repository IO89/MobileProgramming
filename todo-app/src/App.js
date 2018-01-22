import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    event.preventDefault();
    this.setState({
      todos: [delete this.state.todos.filter((item, index) => item !== index)]
    });
  }

  render() {
    const itemsList = this.state.todos.map((item, index) =>
      <tr key={index}>
        <td>{item.desc}</td>
        <td>{item.date}</td>
        <td><button id={index} onClick={this.deleteItem}>Delete</button></td>
      </tr>

    )


    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            <p>Description:
            <input type="text" name="description" onChange={this.inputChanged} value={this.state.description} />
              Date:
            <input type="date" name="date" onChange={this.inputChanged} value={this.state.date} />
              <input type="submit" value="Add" />
            </p>
          </form>
        </div>
        <div>
          <table align="center"><tbody>
            <tr><th>Description</th><th>Date</th></tr>
            {itemsList}
          </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;