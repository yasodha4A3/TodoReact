import React, { Component } from 'react';
import axios from 'axios';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends Component {

  state={
    text:'',
    editMode:false,
    currentlyEditingId:0,
    todos:[ ]
  }
  componentDidMount(){
      this.updateTodoList();
  }

  updateTodoList = () => {
    axios.get("http://localhost:8080/todo").then(res =>{

      this.setState({
        todos:res.data
      });
    });
  }
  deleteTodo = (id) =>{
    axios.get("http://localhost:8080/deleteTodo/"+id).then(res =>{
      this.updateTodoList();
    }).catch(e=>console.log("oops! something went wrong"));
  }

  saveTodo=(todo)=>{
    console.log(todo)
    axios.post("http://localhost:8080/addTodo",todo).then(res =>{
      this.updateTodoList();
    })
  }


  addTodo=(todoText) => {
    this.saveTodo({
      id:this.state.editMode?this.state.currentlyEditingId:0,
      text:todoText
    })
    // let todos=this.state.todos;
    
    // if(this.state.editMode==true){
    //   let currentTodo=todos.filter(t=> t.id==this.state.currentlyEditingId);
    //   currentTodo[0].text=todoText;
    //   this.setState({todos:todos,editMode:false,currentlyEditingId:0});
    // }else{
    //   this.setState({
    //                   todos:todos.concat({id:todos.length+1,text:todoText}),
    //                   editMode:false,
    //                   currentlyEditingId:0,
    //                   text:""
    //                 });
    //}
    
  }
  // deleteTodo = (id) =>{
  //   this.setState({todos:this.state.todos.filter(t=> t.id!=id)})
  // }
  editTodo = (todo) =>{
    this.setState({
      text:todo.text,
      editMode:true,
      currentlyEditingId:todo.id
    })
  }
  changeText = (t)=>{
    this.setState({text:t})
  }
  render() {
    return <div className="container">
             <TodoForm addTodo={this.addTodo} text={this.state.text} changeText={this.changeText} editMode={this.state.editMode} currentlyEditingId={this.state.currentlyEditingId}/>
             <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>
            </div>
  }
}

export default App;
