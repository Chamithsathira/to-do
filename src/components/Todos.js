import React, { Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component{
    render() {
        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} abc={todo} markComplete={this.props.complete} delTodo={this.props.delTodo} />
        ))
    }
}

Todos.props={
    todos: PropTypes.array.isRequired
}

export default Todos;