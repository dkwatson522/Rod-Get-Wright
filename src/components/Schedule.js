import React, { useContext } from 'react';
import { WorkoutContext } from './App';
import Day from './Day';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const Schedule = ({ days }) => {
  const { handleDayAdd } = useContext(WorkoutContext)

  return (
    <>
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
      <div className="flex flex-row justify-around items-center">
      <Button text="ADD DAY" onClick={handleDayAdd}/>
      </div>
    </>
  )
};

export default Schedule
