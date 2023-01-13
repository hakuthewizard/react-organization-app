import React, {useState} from 'react';
import './UserInputForm.css'
import DOMPurify from 'dompurify';
const UserInputForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredNoteContent, setEnteredNoteContent] = useState('');

    const enteredTitleHandler = (event) => {
        const sanitizedTitle = DOMPurify.sanitize(event.target.value);
        setEnteredTitle(sanitizedTitle);
    }
    
    const enteredNoteContentHandler = (event) => {
        const sanitizedNoteContent = DOMPurify.sanitize(event.target.value);
        setEnteredNoteContent(sanitizedNoteContent);
    }
    
    
    const formSubmitHandler = (event) => {
        event.preventDefault();
        // Sanitize user input
        const sanitizedTitle = DOMPurify.sanitize(enteredTitle);
        const sanitizedNoteContent = DOMPurify.sanitize(enteredNoteContent);
    
        const noteData = {
            title: sanitizedTitle,
            noteContent: sanitizedNoteContent,
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