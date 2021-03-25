import React, { useState } from 'react';
import Exercise from './Exercise';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';


const WorkoutSegment = ({}) => {

  const [exercises, setExercises] = useState([]);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState('');


  const handleExerciseAdd = () => {
    const newExercise = {
      id: uuidv4(),
      name: "New Exercise",
      reps: "",
      weight: ""
    }
    console.log(newExercise)
    setSelectedWorkoutId(newExercise.id)
    setExercises([...exercises, newExercise])
  }

  return (
    <div className="m-2 p-2 border-black border-2 rounded-md">
      <div className="divide-y divide-gray-800">
        {exercises.map((exercise) => {
          return(
              <Exercise key={exercise.id} {...exercise} />
          )
        })}
      </div>
      <div>
        <input value= "exercise" />
      </div>
      <div className="w-full flex justify-start">
        <Button text="ADD WORKOUT" onClick={handleExerciseAdd}/>
      </div>
    </div>
  );
}



export default WorkoutSegment
