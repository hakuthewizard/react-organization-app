import React, { useState } from 'react';
import {Route} from 'react-router-dom'
import GoalList from '../components/CourseGoals/GoalList/GoalList';
import GoalInput from '../components/CourseGoals/GoalInput/GoalInput';
import './ListsPage.css'

const ListsPage = () => {
  const [courseGoals, setCourseGoals] = useState([

  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No To-Do's found. Add One!</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <GoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
  
      </section>
       
    </div>
  );
};

export default ListsPage;
