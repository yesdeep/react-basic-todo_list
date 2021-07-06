import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
  state={
    todo:[
      {id:1,content:'haha'},
      {id:2, content:'yoyo'}
    ]
  }

  deleteTodo=(id)=>{
    let temp=this.state.todo.filter(x=>{
      return x.id!=id
    });

    this.setState({
      todo:temp
    })
    
  }

  addTodo=(x)=>{
     x.id=Math.random();
     let temp=[...this.state.todo,x];
     this.setState({
       todo:temp
     })
  }
  render(){
    return (
      <div className="App">
        <Todos  todo={this.state.todo} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
