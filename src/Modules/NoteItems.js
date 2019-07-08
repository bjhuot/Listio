import React from 'react'
import NoteItem from './NoteItem'

const NoteItems = (props) => {
    return props.notes.map(function(note) { 
        return(
            <div className="col-4">
                <NoteItem 
                        note={note}
                    />
            </div>
        )
    })
}

export default NoteItems