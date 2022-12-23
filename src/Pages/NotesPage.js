
import React, { useState } from 'react';
import NewUserInput from '../components/UserInput/NewUserInput';
import RecordedItemsList from '../components/RecordedItems/RecordedItemsList';
import Navbar from '../components/NavigationBar/Navbar';
import {Route} from 'react-router-dom'



const NotesPage = (props) => {
  
  const dummy_notes =[
{id: 'e6',
title: `note of the day`,
noteContent: 'do not forget'},
  ]
  const [notes, setNotes] = useState('');

const addNoteHandler = (note) => {
  setNotes((prevNotes)=> {
    return [note, ...prevNotes];
   
  })
}
const deleteItemHandler = noteId => {
  setNotes(prevNotes => {
    const updatedNotes = prevNotes.filter(note => note.id !==noteId)
    return updatedNotes;
  })
}
let content = (
  <p style={{ textAlign: 'center' }}>No notes found. Go ahead, add one :)</p>
);
if (notes.length > 0) {
  content = (<RecordedItemsList items={notes} onDeleteItem={deleteItemHandler}/>)
}

  return (
    <div>

      <main>
          <NewUserInput 
          onAddNote={addNoteHandler}/>
           {content}
           </main>

           </div>
  );
};

export default NotesPage;
