import React from 'react';
import UserInputForm from './UserInputForm';


const NewUserInput= (props) =>  {


const saveNoteDataHandler = (enteredNoteData) => {
    const noteData = {
        ...enteredNoteData,
        id: Math.random().toString()
    }
    props.onAddNote(noteData);
    console.log(noteData);

}
return(
<UserInputForm 
onSaveNoteData={saveNoteDataHandler}/>
)
}
export default NewUserInput;