import React from 'react';
import Workout from './Workout';


const WorkoutSegment = ({ exercise, weight, reps, description }) => {

  return (
    <div className='py-2'>
      <Workout/>
    </div>
  );
}


export default WorkoutSegment;
