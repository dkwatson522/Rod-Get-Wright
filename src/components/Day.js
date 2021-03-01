import React from 'react';

const Day = ({ day, focus }) => {

  return (
    <div className="text-2xl">
      <h1>{day} - {focus}</h1>
    </div>
  );
}


export default Day
