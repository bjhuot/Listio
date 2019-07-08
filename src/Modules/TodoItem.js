import React from "react";

const TodoItem = ({todo}) => {

  function timeDue() {
    if (todo.timeDue === "12:00 AM") {
      return "None"
    }
    return todo.timeDue
  }

  function dateDue() {
    if (todo.dateDue === "1/1/01") {
      return "None"
    }
    return todo.dateDue
  }

  function tags() {
    if(todo.tags != null) {
    return todo.tags.join(', ')
  }
}

  return(
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between"> {/* From API: todo.IsCompleted class added if complete */}
        <h5 className="mb-1">{todo.name}</h5> {/* From API: todo.Name */}
        <small></small> {/* From API: DateTime.Date - todo.Created.Date */}
      </div>
      <p className="mb-1"> {/* From API: todo.Detail */}
        {todo.detail}
      </p>
      <p>
        {tags()}
      </p>
      <small>
        {`Time Due: ${timeDue()}`}<br />
        {`Date Due: ${dateDue()}`}
      </small> {/* From API: todo.Due */}
    </div>
  )
}

export default TodoItem;
