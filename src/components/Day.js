import React, { useContext } from 'react';
import Button from './Button';
import Workout from './Workout';
import { v4 as uuidv4 } from 'uuid';
import { WorkoutContext } from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Day = (props) => {
  const { day, focus, id } = props;
  const { handleDayDelete, handleDaySelect } = useContext(WorkoutContext);

  return (
    <div className="flex flex-col">
      <div className="text-xl flex flex-col justify-between items-center ">
        <div className="w-full flex flex-row items-center justify-start">
          <p className="text-2xl font-semibold px-2">
            {day} - {focus}
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-start">
          <Button onClick={() => handleDaySelect(id)} text="EDIT"/>
          <Button onClick={() => handleDayDelete(id)} text="DELETE"/>
        </div>
      </div>
      <Workout/>
    </div>
  );
}


export default Day
