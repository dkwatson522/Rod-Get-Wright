import React from 'react';
import { WorkoutContext } from './App';


const ScheduleEdit = ({day}) => {
  return (
    <div className="w-1/2 max-h-full overflow-y-auto fixed right-0 top-0 p-4">
      <div>
        <p>{day.day}</p>
      </div>
    </div>
  );
}


export default ScheduleEdit;
