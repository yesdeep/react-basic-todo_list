import React, { Component } from 'react'

class AddTodo extends Component {
    state={
        content:null
    }
    handleChange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Add todo:</label>
                    <input type="text" onChange={this.handleChange}></input>
                    
                </form>
            </div>
        )
    }
}

export default AddTodo
