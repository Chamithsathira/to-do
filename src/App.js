import { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

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
        id:2,
        text: 'To Do 3',
        completed: false
      },
    ]
  }
  render(){
    return (
    <div className="App">
      <Todos todos = {this.state.todos}/>
    </div>
  );
  }
  
}

export default App;
