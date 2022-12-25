
import React, { useState, useEffect } from 'react';
import NewUserInput from '../components/UserInput/NewUserInput';
import RecordedItemsList from '../components/RecordedItems/RecordedItemsList';

const NotesPage = (props) => {
  const [notes, setNotes] = useState('');
  useEffect(() => {
   const storedNotes = localStorage.getItem('notes')
   const notesArray = JSON.parse(storedNotes);
   setNotes(notesArray)
  }, []);

  const saveNotesToLocalStorage = (notes)=> {
    localStorage.setItem('notes', JSON.stringify(notes))
  }
const addNoteHandler = (note) => {
  setNotes((prevNotes)=> {
    if(!prevNotes){
      return[note]
    }
    const updatedNotes = [note, ...prevNotes];
    saveNotesToLocalStorage(updatedNotes)
    return updatedNotes;
  })
}
const removeItemFromLocalStorage = (itemKey) => {
  localStorage.removeItem(itemKey);
}
const deleteItemHandler = noteId => {
  setNotes(prevNotes => {
    const updatedNotes = prevNotes.filter(note => note.id !==noteId)
    removeItemFromLocalStorage('notes');
    return updatedNotes;
  })
}
let content = (
  <p style={{ textAlign: 'center' }}>No notes found. Go ahead, add one :)</p>
);
if (notes && notes.length > 0) {
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
