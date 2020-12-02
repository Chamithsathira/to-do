import { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './layouts/Header';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        text: 'To Do 1',
        completed: false
      },
      {
        id:2,
        text: 'To Do 2',
        completed: false
      },
      {
        id:3,
        text: 'To Do 3',
        completed: false
      },
    ]
  }
  markComplete =(id) =>{
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )]});
  }

  render(){
    return (
    <div className="App">
      <Header />
      <Todos todos = {this.state.todos} complete = {this.markComplete} delTodo={this.delTodo} />
    </div>
  );
  }
  
}

export default App;
