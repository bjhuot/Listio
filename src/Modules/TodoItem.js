import React, {Component} from "react";

class TodoItem extends Component {
    constructor(TodoItem) {
      super()
      this.state = {
        todo: {
          id: '',
          name: '',
          detail: '',
          tag: '',
          isCompleted: false,
          created: '',
          due: ''
        }
      }
    }

    //TODO: LOOK AT PERSON/PEOPLE FROM CLASS PROJECT TO SEE HOW THAT WAS MODELED

    render() {
      // this.props.todos.foreach(todo => {

      // })

        return(
            <a href="#" className="list-group-item list-group-item-action active">
              <div className="d-flex w-100 justify-content-between"> {/* From API: todo.IsCompleted class added if complete */}
                <h5 className="mb-1">List group item heading</h5> {/* From API: todo.Name */}
                <small>3 days ago</small> {/* From API: DateTime.Date - todo.Created.Date */}
              </div>
              <p className="mb-1"> {/* From API: todo.Detail */}
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                eget risus varius blandit.
              </p>
              <small>Donec id elit non mi porta.</small> {/* From API: todo.Due */}
            </a>
      )
    }
}

export default TodoItem;
