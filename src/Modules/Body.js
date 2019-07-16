import React from 'react'
import {Switch, Route} from 'react-router-dom'
import TodoItems from './TodoItems'
import NoteItems from './NoteItems'
import AddTodoModal from './AddTodoModal'

const Body = (props) => {
    return (
        <Switch>
            <Route path="/TodoItems" render={(routeProps) => 
                (<div className="row">
                    <div className="col">
                    <AddTodoModal 
                        addapi={props.addapi}
                        nc={props.nc} name={props.name}
                    />
                <TodoItems component={TodoItems} todos={props.todos} deleteapi={props.deleteapi} addapi={props.addapi}/>
                    </div>
                </div>
                )} />
            <Route path="/NoteItems" render={(routeProps) => 
                (<div className="row">
                <NoteItems component={NoteItems} notes={props.notes} />
                </div>
                )} />
        </Switch>
    )
}

export default Body