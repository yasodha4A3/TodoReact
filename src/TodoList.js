import React,{Component} from "react";

class TodoList extends Component{
    
    deleteTodo=(e)=>this.props.deleteTodo(e.target.id);
    editTodo=(todo)=> this.props.editTodo(todo);

    render(){
        
        return <div>
                    <ul className="list-group">
                        {this.props.todos.map(t=>
                            <li key={t.id} className="list-group-item">
                                {t.text} 
                                <button id={t.id} onClick={this.deleteTodo}>Delete</button>
                                <button onClick = {()=>this.editTodo(t)}>Edit</button>
                            </li>)}
                    </ul>

                </div>


    }
}
 export default TodoList;