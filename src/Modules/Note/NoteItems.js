import React from 'react'
import NoteItem from './NoteItem'

const NoteItems = (props) => {
  return props.notes
    .sort(function(a, b) {
      return b.id - a.id
    })
    .map(function(note) {
      const tid = `t${note.id}`
      return (
        <NoteItem
          key={tid}
          note={note}
          deleteapi={props.deleteapi}
          addapi={props.addapi}
          updateApi={props.updateApi}
          addtag={props.addtag}
          removeTag={props.removeTag}
          nc={props.nc}
          nameInput={props.nameInput}
          bc={props.bodyChange}
          bodyInput={props.bodyInput}
          tc={props.tc}
          tagsInput={props.tagsInput}
          tags={props.tags}
        />
      )
    })
}

export default NoteItems
