import React from "react"
import TodoEditModal from "./TodoEditModal"

const TodoItem = ({ todo, deleteapi, removeTag, updateApi, ...props }) => {
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
    if (todo.tags != null) {
      const tagArray = todo.tags.map(tag => {
        return (
          <span
            className="badge badge-pill badge-secondary tag"
            onClick={removeTag}
          >
            {tag}
          </span>
        )
      })
      return tagArray
    }
  }

  //Returns individual todo item
  const idid = `#t${todo.id}`
  const tid = `t${todo.id}`
  const idmid = `#m${todo.id}`
  const mid = `m${todo.id}`

  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between" id={todo.name}>
        {" "}
        {/* From API: todo.IsCompleted class added if complete */}
        <div className="form-check">
          <input className="form-check-input position-static" type="checkbox" />
        </div>
        <h5 className="mb-1">
          <button
            className="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target={idid}
            aria-expanded="false"
            aria-controls={tid}
          >
            {todo.name}
          </button>
        </h5>{" "}
        {/* From API: todo.Name */}
        <small /> {/* From API: DateTime.Date - todo.Created.Date */}
        <div
          className="btn-toolbar ml-auto"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-secondary">
              &uarr;
            </button>
            <TodoEditModal
              todo={todo}
              mid={mid}
              idmid={idmid}
              updateApi={updateApi}
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
            <button type="button" className="btn btn-secondary">
              &darr;
            </button>
          </div>
          <div
            className="btn-group ml-2"
            role="group"
            aria-label="Second group"
          >
            <button
              type="button"
              id="deleteItem"
              className="close"
              aria-label="Close"
              onClick={() => {
                deleteapi(
                  "https://localhost:5001/api/todo/",
                  `${todo.id}`,
                  "todos"
                )
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div
        id={tid}
        className="collapse"
        data-parent="#todo"
        aria-labelledby={todo.name}
      >
        <p className="mb-1">
          {/* From API: todo.Detail */}
          {todo.detail}
        </p>
        <p>{tags()}</p>
        <small>
          {`Time Due: ${timeDue()}`}
          <br />
          {`Date Due: ${dateDue()}`}
        </small>
        {/* From API: todo.Due */}
      </div>
    </div>
  )
}

export default TodoItem
