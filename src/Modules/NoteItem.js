import React from "react";

const NoteItem = ({ note }) => {

  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.name}</h5>
          <p className="card-text">
            {note.body}
          </p>
          <div className="btn-toolbar ml-auto" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group" role="group" aria-label="First group">
              <button type="button" className="btn btn-secondary">&larr;</button>
              <button type="button" className="btn btn-secondary">&#9998;</button>
              <button type="button" className="btn btn-secondary">&rarr;</button>
            </div>
            <div className="btn-group ml-auto" role="group" aria-label="Second group">
              <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem