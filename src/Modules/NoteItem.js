import React from "react";

const NoteItem = ({ note }) => {

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{note.name}</h5>
        <p className="card-text">
          {note.body}
        </p>
        <a href="#" className="btn btn-primary">
          Edit
        </a>
      </div>
    </div>
  );
};

export default NoteItem