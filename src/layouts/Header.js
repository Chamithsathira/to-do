import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDo List</h1>
        </header>
    )
}

const headerStyle ={
    background:'black',
    color:'white',
    textAlign:'center',
    padding:'10px'
}




