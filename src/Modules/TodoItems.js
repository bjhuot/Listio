import React from "react"
import TodoItem from "./TodoItem"

const TodoItems = props => {
  return props.todos.map(function(todo) {
    return (
      <div key={todo.id}>
        <TodoItem
          updateApi={props.updateApi}
          todo={todo}
          deleteapi={props.deleteapi}
          removeTag={props.removeTag}
          nc={props.nc}
          nameInput={props.nameInput}
          dc={props.dc}
          detailInput={props.detailInput}
          tc={props.tc}
          tagsInput={props.tagsInput}
          tags={props.tags}
          addtag={props.addtag}
          ddc={props.ddc}
          dateDueInput={props.dateDueInput}
          tdc={props.tdc}
          timeDueInput={props.timeDueInput}
          setDateTime={props.setDateTime}
          setDateTimeDue={props.setDateTimeDue}
        />
      </div>
    )
  })
}

export default TodoItems
