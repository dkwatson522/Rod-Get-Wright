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
    <div className="w-full flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <p className="w-full text-2xl font-semibold px-2">
          {day} - {focus}
        </p>
        <div className="w-full flex flex-col items-end">
          <Button onClick={() => handleDaySelect(id)} text="EDIT"/>
          <Button onClick={() => handleDayDelete(id)} text="DELETE"/>
        </div>
      </div>
      <Workout/>
    </div>
  );
}


export default Day
