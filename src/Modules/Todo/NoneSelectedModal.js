import React from 'react'

const NoneSelectedModal = (props) => {
  return (
    <div
      className="modal fade"
      id="noneSelectedModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="noneSelectedModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            Please select some tasks to clear before continuing.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoneSelectedModal
