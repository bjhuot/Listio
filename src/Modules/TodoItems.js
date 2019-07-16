import React from "react";
import TodoItem from './TodoItem'

const TodoItems = (props) => {
    return props.todos.map(function(todo) {
        return (
                <div className="list-group accordion" id="todo" key={todo.id}>
                    <TodoItem 
                        todo={todo}
                        deleteapi={props.deleteapi}
                    />
                </div>
        )
    })
}

export default TodoItems;