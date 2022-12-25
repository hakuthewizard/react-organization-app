import React, {useState} from 'react';
import './UserInputForm.css'

const UserInputForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredNoteContent, setEnteredNoteContent] = useState('');

    const enteredTitleHandler = (event) => {
        setEnteredTitle(event.target.value);

    }
    const enteredNoteContentHandler = (event) => {
        setEnteredNoteContent(event.target.value);
    }
    
    const formSubmitHandler = (event) => {
        event.preventDefault();
        
    const noteData = {
        title: enteredTitle,
        noteContent: enteredNoteContent,
      } 
      props.onSaveNoteData(noteData);
      setEnteredTitle('');
      setEnteredNoteContent('');

    
   
    }
    
    return(
        <div>
            <header className='header'>Notes</header>
        <form  className='form' onSubmit={formSubmitHandler}>
            <label className='form_label title'>Title</label>
            <input className='form_input'

            value={enteredTitle}
            onChange={enteredTitleHandler}
            />
            <label className='form_label title'>Note Content</label>
            <textarea 
            className='form_textarea'
            rows="5"
     
            value={enteredNoteContent}
            onChange={enteredNoteContentHandler}
            />
            
            <button className='form_button'
            type='submit'
            disabled={!enteredTitle || !enteredNoteContent}
            >Add New Note</button>
        </form>
        </div>
    )
}
export default UserInputForm;