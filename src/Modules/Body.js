import React from "react"
import { Switch, Route } from "react-router-dom"
import TodoItems from "./TodoItems"
import NoteItems from "./NoteItems"
import AddTodo from "./AddTodo"

const Body = props => {
  return (
    <Switch>
      <Route
        path="/TodoItems"
        render={routeProps => (
          <div className="row">
            <div className="col">
              <AddTodo
                setDateTime={props.setDateTime}
                setDateTimeDue={props.setDateTimeDue}
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
              <div className="accordion list-group" id="todo">
                <TodoItems
                  updateApi={props.updateApi}
                  component={TodoItems}
                  todos={props.todos}
                  deleteapi={props.deleteapi}
                  addapi={props.addapi}
                  removeTag={props.removeTag}
                  nc={props.nc}
                  nameInput={props.nameInput}
                  dc={props.dc}
                  detailInput={props.detailInput}
                  tc={props.tc}
                  tagsInput={props.tagsInput}
                  tags={props.tags}
                  addtag={props.addtag}
                  ddc={props.ddc}
                  dateDueInput={props.dateDueInput}
                  tdc={props.tdc}
                  timeDueInput={props.timeDueInput}
                  setDateTime={props.setDateTime}
                  setDateTimeDue={props.setDateTimeDue}
                />
              </div>
            </div>
          </div>
        )}
      />
      <Route
        path="/NoteItems"
        render={routeProps => (
          <div className="row">
            <NoteItems component={NoteItems} notes={props.notes} />
          </div>
        )}
      />
    </Switch>
  )
}

export default Body
