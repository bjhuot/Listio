import React from "react";

const AddTodoModal = (props) => {

    const quickdata = {name:`${props.name}`}
    const fulldata = 
    {
        name: "",
        detail: "",
        tags: [],
        dateDue: "",
        timeDue: ""
    }

    //TODO: Add modal window
    //Ensure newest creations go to top of list (fix on server?)

  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          <input id="input" type="text" value={props.name} onChange={props.nc}/>
        </h5>
        <div className="btn-toolbar ml-auto">
          <button type="button" className="btn btn-link" onClick={() => props.addapi("https://localhost:5001/api/todo/", quickdata, "todos")}>
            Quick Add
          </button>
          <button type="button" className="btn btn-link">
            Add Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTodoModal;
