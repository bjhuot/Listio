import React from 'react'
import {Switch, Route} from 'react-router-dom'
import TodoItems from './TodoItems'
import NoteItems from './NoteItems'

const Body = (props) => {
    return (
        <Switch>
            <Route path="/TodoItems" render={(routeProps) => 
                (<TodoItems component={TodoItems} todos={props.todos} />)} />
            <Route path="/NoteItems" render={(routeProps) => 
                (<NoteItems component={NoteItems} notes={props.notes} />)} />
        </Switch>
    )
}

export default Body