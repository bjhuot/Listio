import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return(
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/TodoItems">Todo List</Link>
            </li>
            <li className="nav-item">
                <Link to="/NoteItems">Notepad</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Calendar</a>
            </li>
        </ul>
    )
}

export default Nav