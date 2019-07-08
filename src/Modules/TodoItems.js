import React from "react";
import TodoItem from './TodoItem'

const TodoItems = (props) => {
    return props.todos.map(function(todo) {
        return (
            <div className="col-12">
                <div className="list-group">
                    <TodoItem 
                        todo={todo}
                    />
                </div>
            </div>
        )
    })
}

export default TodoItems;