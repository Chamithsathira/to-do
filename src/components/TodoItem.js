import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle = () =>{
        // if(this.props.abc.completed){
        //     return{
        //         textDecoration:'line-through'
        //     }
        // }
        // else{
        //     return{
        //         textDecoration:'none'
        //     }
        // }
        return{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.abc.completed? 'line-through' : 'none' 
        }
    }

    
    render() {
        const {text, id} = this.props.abc;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)}/>{' '}
                    {text}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}


TodoItem.props={
    abc:PropTypes.object.isRequired
}

const {btnStyle} = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 8px',
    cursor:'pointer',
    float:'left'
}


export default TodoItem
