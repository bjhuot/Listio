import React, {Component} from "react";
import TodoItem from './TodoItem'

class TodoItems extends Component {
    render() {
        return (
            <TodoItem 
                todos={this.props.todos}
            />
        )
    }
}

export default TodoItems;
