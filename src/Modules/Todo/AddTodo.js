import React from 'react'
import TodoModal from './TodoModal'
import TodoApiCall from './TodoApiCall'
import ClearAllModal from './ClearAllModal'
import NoneSelectedModal from './NoneSelectedModal'

const AddTodo = (props) => {
  //////////////////////////////
  // DATA OBJECT TO STRINGIFY //
  //////////////////////////////
  let todoData = {
    name: props.nameInput,
    detail: props.detailInput,
    tags: props.tags,
    dateDue: props.dateDueInput,
    timeDue: props.timeDueInput,
  }

  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <TodoApiCall getApi={props.getApi} />
        <h5 className="mb-1">
          <input
            id="input"
            type="text"
            value={props.nameInput}
            onChange={props.nc}
            placeholder="Enter a new to-do item..."
          />
        </h5>
        <div className="btn-toolbar">
          <div className="btn-group mr-5">
            <button
              type="button"
              className="btn btn-outline-primary"
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
            <button
              type="button"
              className="btn btn-outline-primary"
              data-toggle="modal"
              data-target="#todoModal"
              //TodoModal is located at bottom of divs in order to avoid rendering issues.
            >
              Add Details
            </button>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-danger px-4"
              data-toggle="modal"
              data-target={props.target}
              // data-target="#clearAllModal"
              onMouseDown={props.clearAllCheck}
            >
              Clear Finished
            </button>
          </div>
        </div>
      </div>
      {/* Modals */}
      <NoneSelectedModal />
      <ClearAllModal deleteFinished={props.deleteFinished} />
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
  )
}

export default AddTodo
