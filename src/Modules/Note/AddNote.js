import React from 'react'

const AddNote = (props) => {
  let noteData = {
    name: props.nameInput,
    body: props.bodyInput,
    tags: props.tags,
  }

  const tagArray = props.tags.map((tag, index) => {
    return (
      <span
        className="badge badge-pill badge-secondary tag"
        onClick={props.removeTag}
        key={index}
      >
        {tag}
      </span>
    )
  })
  //TODO: Why isn't card-deck making this equal height??
  return (
    <div className="col-4">
      <div className="card" id="addnote">
        <h5 className="card-header">Add a new note</h5>
        <div className="card-body overflow-auto">
          <form className="d-flex flex-column">
            <h5 className="card-title">
              <input
                id="input"
                type="text"
                value={props.nameInput}
                onChange={props.nc}
                placeholder="Enter title"
              />
            </h5>
            <div className="card-text">
              <textarea
                className="overflow-auto"
                id="text"
                type="text"
                value={props.bodyInput}
                onChange={props.bc}
                placeholder="Enter more detail"
              />
            </div>
            <input
              id="tagsInputNote"
              type="text"
              value={props.tagsInput}
              onChange={props.tc}
              onKeyPress={props.addtag}
            />
            <div>{tagArray}</div>
          </form>
        </div>
        <div className="card-footer">
          <div className="btn-toolbar">
            <button
              type="button"
              className="btn btn-primary mr-auto"
              onClick={() => {
                props.addapi(
                  'https://localhost:5001/api/note/',
                  noteData,
                  'notes'
                )
              }}
            >
              Submit
            </button>
            <button type="button" className="btn btn-danger">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNote
