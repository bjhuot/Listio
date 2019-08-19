import React from 'react'
import TodoModal from './TodoModal'

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
            >
              Add Details
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
          <div className="btn-group">
            <button
              type="button"
              class="btn btn-outline-danger px-4"
              data-toggle="modal"
              data-target="#clearAllModal"
            >
              Clear Finished
            </button>
            <div
              class="modal fade"
              id="clearAllModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="clearAllModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    Are you sure you want to permanently delete all tasks marked
                    as complete?
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      onClick={() => props.deleteFinished()}
                    >
                      Delete All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo
