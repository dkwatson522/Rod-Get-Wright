import React from 'react';
import Button from './Button';


const Exercise = (props) => {
  const {name, reps, weight} = props;


  return (
    <div>
      <div className="my-1">
        <p>Exercise - {name.toUpperCase()}</p>
        <p>Reps - {reps}</p>
        <p>Weight - {weight}</p>
      </div>
    </div>
  );
}

export default Exercise;
