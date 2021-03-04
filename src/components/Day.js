import React, { useContext } from 'react';
import Button from './Button';
import { WorkoutContext } from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Day = (props) => {
  const { day, focus, id } = props;
  const { handleDayDelete, handleDaySelect } = useContext(WorkoutContext)


  return (
    <div>
      <div className="text-xl flex flex-row justify-between items-center ">
        <div className="mx-2 flex flex-row items-center">
          <span>{day}</span><span> - </span><span>{focus}</span>
        </div>
        <div className="mx-2 flex flex-row items-center">
          <Button onClick={() => handleDaySelect(id)} text="EDIT"/>
          <Button onClick={() => handleDayDelete(id)} text="DELETE"/>
          <FontAwesomeIcon icon={faTrashAlt} className="text-red-500"/>
        </div>
      </div>
    </div>
  );
}


export default Day
