import React from 'react'
import TodoModal from './TodoModal'

//////////////////////////////
// DATA OBJECT TO STRINGIFY //
//////////////////////////////
const AddTodo = (props) => {
  let todoData = {
    name: props.nameInput,
    detail: props.detailInput,
    tags: props.tags,
    dateDue: props.dateDueInput,
    timeDue: props.timeDueInput,
  }

  //TODO: Ensure newest creations go to top of list (fix on server?)

  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          <input
            id="input"
            type="text"
            value={props.nameInput}
            onChange={props.nc}
            placeholder="Enter a new to-do item..."
          />
        </h5>
        <div className="btn-toolbar ml-auto">
          <button
            type="button"
            className="btn btn-link"
            onClick={() =>
              props.addapi(
                'https://localhost:5001/api/todo/',
                todoData,
                'todos'
              )
            }
          >
            Quick Add
          </button>
          <TodoModal
            setDateTime={props.setDateTime}
            setDateTimeDue={props.setDateTimeDue}
            todoData={todoData}
            addapi={props.addapi}
            nc={props.nc}
            nameInput={props.nameInput}
            dc={props.dc}
            detailInput={props.detailInput}
            tc={props.tc}
            tagsInput={props.tagsInput}
            tags={props.tags}
            addtag={props.addtag}
            removeTag={props.removeTag}
            ddc={props.ddc}
            dateDueInput={props.dateDueInput}
            tdc={props.tdc}
            timeDueInput={props.timeDueInput}
          />
        </div>
      </div>
    </div>
  )
}

export default AddTodo
