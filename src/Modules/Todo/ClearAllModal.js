import React from 'react'

const ClearAllModal = (props) => {
  return (
    <div
      className="modal fade"
      id="clearAllModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="clearAllModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            Are you sure you want to permanently delete all tasks marked as
            complete?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => props.deleteFinished()}
            >
              Delete All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClearAllModal
