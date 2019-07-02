import React from 'react'

function Nav() {
    return(
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="#">Todo List</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Notepad</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Calendar</a>
            </li>
        </ul>
    )
}

export default Nav