import React from 'react';

import './GoalItem.css';
import done from './done.png'
const GoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
      
      <img src={done}
      className='delete_button'/>
    </li>
  );
};

export default GoalItem;
