import React from 'react';
import RecordedItem from './RecordedItem';
import './RecordedItemsList.css'

const RecordedItemsList = (props) => {

    return(
        <ul className='itemslist'>
        {props.items.map((note) => (
          <RecordedItem
            key={note.id}
            id={note.id}
            title={note.title}
            noteContent={note.noteContent}
            onDelete={props.onDeleteItem}
          >{note.text}
            </RecordedItem>
            
        ))}
      </ul>
    )
}
export default RecordedItemsList;