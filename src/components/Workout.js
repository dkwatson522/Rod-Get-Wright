import React, { useState } from 'react';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';


const Workout = ({ exercise, weight, reps, description }) => {
  const [workouts, setWorkouts] = useState([
    {
      id: uuidv4(),
      exercise:'Back Squats',
      weight:'225',
      reps:'5x5',
      description:'hold at bottom for 3 seconds'
    },
    {
      id: uuidv4(),
      exercise:'Pullups',
      weight:'Weighted 15lbs',
      reps:'5x4',
      description:''
    }
  ])
  const onClick = (() => {
    console.log('click');
  })


  return (
    <>
      {workouts.map((workout) => (
        <>
          <h1 className="font-semibold" key={workout.id}>{workout.exercise}</h1>
          <p>Weight - <span>{workout.weight}</span></p>
          <p>Sets<span className="text-xs">x</span>Reps - <span>{workout.reps}</span></p>
          <p>Description - <span>{workout.description}</span></p>
          <Button text='Add' color='blue' onClick={onClick}/>
        </>
        )
      )}
    </>
  );
}

export default Workout;
