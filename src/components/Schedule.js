import React, { useContext } from 'react';
import { WorkoutContext } from './App';
import Day from './Day';
import Button from './Button';


const Schedule = ({ days }) => {
  const { handleDayAdd } = useContext(WorkoutContext)

  return (
    <div className="w-1/2 min-h-screen">
      <div>
        {days.map((day) => {
          return (
            <Day
              key= {day.id}
              {...day}
            />
          )
        })}
      </div>
      <div className="w-full flex justify-center mt-4 text-center">
        <Button text="ADD DAY" onClick={handleDayAdd}/>
      </div>
    </div>
  )
};

export default Schedule
