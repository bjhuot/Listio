import React from 'react'

const NoteItem = ({ note, ...props }) => {
  // Formats tags
  function tags() {
    if (note.tags != null) {
      const tagArray = note.tags.map((tag, index) => {
        return (
          <span className="badge badge-pill badge-secondary tag" key={index}>
            {tag}
          </span>
        )
      })
      return tagArray
    }
  }

  return (
    <div className="col-4">
      <div className="card noteCard">
        <div className="card-body overflow-auto">
          <h5 className="card-title">{note.name}</h5>
          <p className="card-text">{note.body}</p>
          <p>{tags()}</p>
        </div>
        <div className="card-footer">
          <div
            className="btn-toolbar ml-auto"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div className="btn-group" role="group" aria-label="First group">
              <button type="button" className="btn btn-secondary">
                &larr;
              </button>
              <button type="button" className="btn btn-secondary">
                &#9998;
              </button>
              <button type="button" className="btn btn-secondary">
                &rarr;
              </button>
            </div>
            <div
              className="btn-group ml-auto"
              role="group"
              aria-label="Second group"
            >
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => {
                  props.deleteapi(
                    'https://localhost:5001/api/note/',
                    `${note.id}`,
                    'notes'
                  )
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
