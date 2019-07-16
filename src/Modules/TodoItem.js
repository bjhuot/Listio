import React from "react";

const TodoItem = ({todo, deleteapi}) => {

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

//Returns individual todo item  
  const idid = `#${todo.id}`
  return(
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between"> {/* From API: todo.IsCompleted class added if complete */}
        <div className="form-check">
          <input className="form-check-input position-static" type="checkbox" id={todo.name} value={todo.name} aria-label={todo.name} />
        </div>
        <h5 className="mb-1">
          <button className="btn btn-link" type="button" data-toggle="collapse" data-target={idid} aria-expanded="false" aria-controls={todo.id}>
            {todo.name}
          </button>
        </h5> {/* From API: todo.Name */}
        <small></small> {/* From API: DateTime.Date - todo.Created.Date */}
        <div className="btn-toolbar ml-auto" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-secondary">&uarr;</button>
            <button type="button" className="btn btn-secondary">&#9998;</button>
            <button type="button" className="btn btn-secondary">&darr;</button>
          </div>
          <div className="btn-group ml-2" role="group" aria-label="Second group">
            <button type="button" id="deleteItem" className="close" aria-label="Close" onClick={() => {
              deleteapi("https://localhost:5001/api/todo/", `${todo.id}`, "todos")
            }}>
            <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div id={todo.id} className="collapse" data-parent="#todo">
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
    </div>
  )
}

export default TodoItem;
