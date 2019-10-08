import React from 'react'

///////////////////////////////
// DROP DOWN ARRAYS AND MAPS //
///////////////////////////////

const TodoModal = (props) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]
  const monthArray = months.map((month, index) => {
    return <option key={index}>{month}</option>
  })
  const dates = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ]

  const dateArray = dates.map((date, index) => {
    return <option key={index}>{date}</option>
  })

  const years = []
  function yearSet() {
    const nyear = new Date().getFullYear()
    for (let i = nyear; i <= nyear + 10; i++) {
      let newyear = i.toString()
      years.push(newyear)
    }
    return years
  }

  const yearArray = yearSet().map((year, index) => {
    return <option key={index}>{year}</option>
  })

  const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  const hourArray = hours.map((hour, index) => {
    return <option key={index}>{hour}</option>
  })
  const minutes = [
    ':00',
    ':05',
    ':10',
    ':15',
    ':20',
    ':25',
    ':30',
    ':35',
    ':40',
    ':45',
    ':50',
    ':55',
  ]
  const minuteArray = minutes.map((minute, index) => {
    return <option key={index}>{minute}</option>
  })

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

  return (
    <div>
      <div
        id="todoModal"
        className="modal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/*   ////////////////
                    // MODAL FORM //
                    //////////////// */}
              <form>
                <div className="form-group">
                  <label htmlFor="nameInputModal">To-do Item</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInputModal"
                    value={props.nameInput}
                    onChange={props.nc}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="detailInputModal">More Details</label>
                  <input
                    type="text"
                    className="form-control"
                    id="detailInputModal"
                    value={props.detailInput}
                    onChange={props.dc}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tagInputModal">Add some tags</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tagInputModal"
                    value={props.tagsInput}
                    onChange={props.tc}
                    onKeyPress={props.addtag}
                  />
                  <div className="form-row">{tagArray}</div>
                </div>
                <label htmlFor="datetimeInputModal">
                  Set a due date and time
                </label>
                <div className="form-row" id="datetimeInputModal">
                  {/* DATE */}
                  <div className="form-group col-auto">
                    <select
                      className="form-control form-control-sm date"
                      id="month"
                      onChange={(e) => {
                        props.setDateTimeDue(e)
                      }}
                    >
                      <option>Month</option>
                      {monthArray}
                    </select>
                  </div>
                  <div className="form-group col-auto">
                    <select
                      className="form-control form-control-sm date"
                      id="day"
                      onChange={(e) => {
                        props.setDateTimeDue(e)
                      }}
                    >
                      <option>Day</option>
                      {dateArray}
                    </select>
                  </div>
                  <div className="form-group col-auto">
                    <select
                      className="form-control form-control-sm date"
                      id="year"
                      onChange={(e) => {
                        props.setDateTimeDue(e)
                      }}
                    >
                      <option>Year</option>
                      {yearArray}
                    </select>
                  </div>
                  {/* TIME */}
                  <div className="form-group col-auto ml-auto">
                    <select
                      className="form-control form-control-sm time"
                      id="hour"
                      onChange={(e) => {
                        props.setDateTimeDue(e)
                      }}
                    >
                      <option>Hour</option>
                      {hourArray}
                    </select>
                  </div>
                  <div className="form-group col-auto">
                    <select
                      className="form-control form-control-sm time"
                      id="minute"
                      onChange={(e) => {
                        props.setDateTimeDue(e)
                      }}
                    >
                      <option>Min</option>
                      {minuteArray}
                    </select>
                  </div>
                  <div className="form-group col-auto">
                    <select
                      className="form-control form-control-sm time"
                      id="ampm"
                      onChange={(e) => {
                        props.setDateTimeDue(e)
                      }}
                    >
                      <option>AM/PM</option>
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            {/* !!!!! MODAL FORM ENDS HERE!!!!! */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  props.addapi(
                    'https://localhost:5001/api/todo/',
                    props.todoData,
                    'todos'
                  )
                }}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoModal
