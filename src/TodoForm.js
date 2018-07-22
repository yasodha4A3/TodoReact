import React,{Component} from "react";

class TodoForm extends Component{
     changeText = ()=> this.props.changeText(this.refs.todoText.value);

     submitText = (e) => {
         e.preventDefault();
         this.props.addTodo(this.refs.todoText.value);
        
    }




    render(){
        return <div>

            <form className="form-group" onSubmit={this.submitText}>
                <input type="text" ref="todoText" className="form-control" placeholder="Enter new todo here" value={this.props.text} onChange={this.changeText}/>
            </form>
        </div>
    }
}
 export default TodoForm;