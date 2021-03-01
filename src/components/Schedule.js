import React from 'react';
import Day from './Day';
import WorkoutList from './WorkoutList';

const Schedule = () => {

  return (
    <div className="">
      <Day day='Monday' focus='Legs'/>
      <WorkoutList/>
      {/*
        <Day day='Tuesday' focus='Back & Shoulder'/>
        <WorkoutList/>
        <Day day='Wednesday' focus='Chest & Triceps'/>
        <WorkoutList/>
        <Day day='Thursday' focus='Legs'/>
        <WorkoutList/>
        <Day day='Friday' focus='Biceps'/>
        <WorkoutList/>
        <Day day='Saturday' focus='Full Body'/>
        <WorkoutList/>
        <Day day='Sunday' focus='Rest'/>
        <WorkoutList/>
      */}
    </div>
  )
};

export default Schedule
