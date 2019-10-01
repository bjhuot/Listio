import React from 'react'
import TodoEditModal from './TodoEditModal'

const TodoItem = ({ todo, deleteapi, removeTag, updateApi, ...props }) => {
  // Sets null/default response for Date/Time Due from API to "None"
  function timeDue() {
    if (todo.timeDue === '12:00 AM') {
      return 'None'
    }
    return todo.timeDue
  }

  function dateDue() {
    if (todo.dateDue === '1/1/01') {
      return 'None'
    }
    return todo.dateDue
  }

  // Formats tags
  function tags() {
    if (todo.tags != null) {
      const tagArray = todo.tags.map((tag, index) => {
        return (
          <span
            className="badge badge-pill badge-secondary tag"
            onClick={removeTag}
            key={index}
          >
            {tag}
          </span>
        )
      })
      return tagArray
    }
  }

  // Prepends todo.id with letter for CSS compatibility, also with hash and letter for selecting ID as target
  const idid = `#t${todo.id}`
  const tid = `t${todo.id}`
  const idmid = `#m${todo.id}`
  const mid = `m${todo.id}`
  //!! TODO: KEEP TESTING DISABLED FOR LINK STYLING
  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between" id={todo.name}>
        <div className="form-check">
          <input
            className="form-check-input position-static"
            type="checkbox"
            id={todo.id}
            defaultChecked={todo.isComplete}
            onClick={() => {
              updateApi(
                'https://localhost:5001/api/todo/',
                todo.id,
                { isComplete: `${!todo.isComplete}` },
                'todos'
              )
              //TODO: THIS VVVVVV
              //set onClick to add disabled to top div
            }}
          />
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
        </h5>
        <div
          className="btn-toolbar ml-auto"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-secondary">
              &uarr;
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target={idmid}
            >
              &#9998;
            </button>
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
                  'https://localhost:5001/api/todo/',
                  `${todo.id}`,
                  'todos'
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
        <p className="mb-1">{todo.detail}</p>
        <p>{tags()}</p>
        <div className="d-flex justify-content-between">
          <small>
            {`Time Due: ${timeDue()}`}
            <br />
            {`Date Due: ${dateDue()}`}
          </small>
          <small>
            Date Created: {todo.dateCreated}
            <br />
            Time Created: {todo.timeCreated}
          </small>
        </div>
      </div>
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
    </div>
  )
}

export default TodoItem
