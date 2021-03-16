import React, { useState } from 'react';
import WorkoutSegment from './WorkoutSegment'
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import Exercise from './Exercise'

const Workout = ({}) => {

  const [workoutSegments, setWorkoutSegments] = useState([]);
  const [selectedWorkoutSegementId, setSelectedWorkoutSegementId] = useState();

  const handleWorkoutSegmentAdd = () => {
    const newWorkoutSegment = {
      id: uuidv4()
    }

    console.log(newWorkoutSegment)
    setSelectedWorkoutSegementId(newWorkoutSegment.id)
    setWorkoutSegments([...workoutSegments, newWorkoutSegment])
  }

  return (
    <div>
      <div>
        {workoutSegments.map((workout) => {
          return (
            <WorkoutSegment key={workout.id}/>
          )
        })}
      </div>

      <div className="w-full flex justify-center">
        <Button text="ADD SEGMENT" onClick={handleWorkoutSegmentAdd}/>
      </div>
    </div>
  );
}

export default Workout;
