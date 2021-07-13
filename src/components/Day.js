import React, { useContext } from 'react';
import Exercise from './Exercise';
// import { v4 as uuidv4 } from 'uuid';
import { DayContext } from './App';

export default function Day(props) {
  const { handleDaySelect, handleDayClear } = useContext(DayContext)

  const {
    handleModalOpen,
    handleDayChange,
    id,
    name,
    focus,
    exercises
  } = props

  return (
    <div>
      <div className="bg-gray-400 rounded-lg m-2 p-4">
        <div
        className="flex justify-between items-center text-xl font-bold"
        >
          <div>
            <span className="text-gray-100 p-1 mx-1">
              {name}
            </span>
            <span className="p-1 mx-1 text-gray-800" >
              {focus}
            </span>
          </div>
        </div>
        <ul className="p-2 divide-y divide-gray-200">
          {exercises.map(exercise => {
            return (
              <Exercise
                key={exercise.id} {...exercise}
                handleModalOpen={handleModalOpen}
                handleDayChange={handleDayChange}
              />
            )
          })}
        </ul>
        <div className="flex justify-center relative z-0">
          <button
            type="button"
            className="relative inline-flex items-center mx-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onClick = {() => handleDayClear(id)}
          >
            Clear {name}
          </button>
          <button
            type="button"
            className="relative inline-flex items-center mx-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onClick = {() => handleDaySelect(id)}
          >
            Edit {name}
          </button>
        </div>
      </div>
    </div>
  )
}
