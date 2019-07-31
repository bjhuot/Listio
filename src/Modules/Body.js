import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TodoItems from './Todo/TodoItems'
import NoteItems from './Note/NoteItems'
import AddTodo from './Todo/AddTodo'
import AddNote from './Note/AddNote'

const Body = (props) => {
  return (
    //////////////////
    // ROUTE SWITCH //
    //////////////////
    <Switch>
      <Route
        path="/TodoItems"
        render={(routeProps) => (
          <div className="row">
            <div className="col ">
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
              <div
                className="accordion list-group flex-column-reverse"
                id="todo"
              >
                <TodoItems
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
                  updateApi={props.updateApi}
                />
              </div>
            </div>
          </div>
        )}
      />
      <Route
        path="/NoteItems"
        render={(routeProps) => (
          <div className="container-fluid">
            <div className="row">
              <div className="card-deck">
                <AddNote
                  addapi={props.addapi}
                  addtag={props.addtag}
                  removeTag={props.removeTag}
                  nc={props.nc}
                  nameInput={props.nameInput}
                  bc={props.bc}
                  bodyInput={props.bodyInput}
                  tc={props.tc}
                  tagsInput={props.tagsInput}
                  tags={props.tags}
                />
                <NoteItems
                  component={NoteItems}
                  notes={props.notes}
                  deleteapi={props.deleteapi}
                  addapi={props.addapi}
                  updateApi={props.updateApi}
                  addtag={props.addtag}
                  removeTag={props.removeTag}
                  nc={props.nc}
                  nameInput={props.nameInput}
                  bc={props.bc}
                  bodyInput={props.bodyInput}
                  tc={props.tc}
                  tagsInput={props.tagsInput}
                />
              </div>
            </div>
          </div>
        )}
      />
    </Switch>
  )
}

export default Body
