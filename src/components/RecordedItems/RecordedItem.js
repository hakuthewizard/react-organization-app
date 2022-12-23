import React, {useState} from "react";
import './RecordedItem.css';

const RecordedItem = (props) => {
    const deleteHandler =() => {
        props.onDelete(props.id)
    }
return (
    <li className="list_item" >
        <button className="list_item_delete" onClick={deleteHandler}>Delete Note</button>
        <h3 >{props.title}</h3>
        <span>{props.noteContent}</span>
        
       
    </li>
)
}
export default RecordedItem;