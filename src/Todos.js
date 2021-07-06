import React, { Component } from 'react'

class Todos extends Component {
    render() {
        const todo =this.props.todo;
        const deleteTodo= this.props.deleteTodo;
        const todolist= todo.length ? (
            todo.map(x=>{
            return(
                <h1 key={x.id} onClick={()=> deleteTodo(x.id)}>{x.content}</h1>
            )
        })):(
            <p>YOU ARE FREE!</p>
        )
        
        return (
            <div className="todo-lists"  style={{textAlign: 'center'}} >
                <h1 style={{color:'grey'}}>Todo's </h1>
                {todolist}
            </div>
        )
    }
}

export default Todos
