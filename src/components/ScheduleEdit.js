import React from 'react';
import { WorkoutContext } from './App';


const ScheduleEdit = ({day}) => {
  return (
    <div className="w-1/2 max-h-full overflow-y-auto fixed right-0 top-0 p-4">
      <div>
      <button>&times;</button>
      </div>
      <div>
        <label htmlFor="day">Day</label>
        <input type="text" name="day" id="day"/>
        <label htmlFor="focus">Focus</label>
        <input type="text" name="focus" id="focus"/>
      </div>
    </div>
  );
}


export default ScheduleEdit;
