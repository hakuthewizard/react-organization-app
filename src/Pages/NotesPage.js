
import React, { useState, useEffect } from 'react';
import NewUserInput from '../components/UserInput/NewUserInput';
import RecordedItemsList from '../components/RecordedItems/RecordedItemsList';

const NotesPage = (props) => {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);
  const addNoteHandler = (note) => {
    setNotes((prevNotes)=> {
      const updatedNotes = [note, ...prevNotes];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    })
  }

  const deleteItemHandler = noteId => {
    setNotes(prevNotes => {
      const updatedNotes = prevNotes.filter(note => note.id !==noteId)
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    })
  }

let content = (
  <p style={{ textAlign: 'center' }}>No notes found. Go ahead, add one :</p>
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