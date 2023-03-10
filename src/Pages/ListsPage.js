import React, { useState,useEffect } from 'react';
import {Route} from 'react-router-dom'
import GoalList from '../components/CourseGoals/GoalList/GoalList';
import GoalInput from '../components/CourseGoals/GoalInput/GoalInput';
import './ListsPage.css'

const ListsPage = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  useEffect(() => {
    const storedGoals = localStorage.getItem('goals')
    if (storedGoals) {
        const goalsArray = JSON.parse(storedGoals);
        setCourseGoals(goalsArray)
    }
   }, []);

  const addGoalHandler = enteredText => {
    if (!enteredText) return;
    setCourseGoals(prevGoals => {
      const updatedGoals = [{ text: enteredText, id: Math.random().toString() }, ...prevGoals];
      localStorage.setItem('goals', JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      localStorage.setItem('goals', JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };
  let content = (
    <p style={{ textAlign: 'center' }}>No To-Do's found. Add One!</p>
  );

  if (courseGoals && courseGoals.length > 0) {
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
