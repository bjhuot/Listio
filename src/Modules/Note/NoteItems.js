import React from 'react'
import NoteItem from './NoteItem'

const NoteItems = (props) => {
    
    return props.notes.map(function(note) {
            return(
                <NoteItem 
                    note={note}
                />
            )
    })
}

export default NoteItems