import React from 'react';
import UserInputForm from './UserInputForm';
import { v4 as uuidv4 } from 'uuid';


const NewUserInput= (props) =>  {


    const saveNoteDataHandler = (enteredNoteData) => {
        const noteData = {
            ...enteredNoteData,
            id: Math.random().toString()

        }
        props.onAddNote(noteData);
    
    
}
return(
<UserInputForm 
onSaveNoteData={saveNoteDataHandler}/>
)
}
export default NewUserInput;