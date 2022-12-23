import React, { useState } from 'react';

import './GoalInput.css';


const GoalInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form  className='form-control' onSubmit={formSubmitHandler}>
      <div >
        <label>To Do List</label>
        <input 
        type="text" onChange={goalInputChangeHandler} />
      </div>
      <button type="submit">Add To Do</button>
    </form>
  );
};

export default GoalInput;
