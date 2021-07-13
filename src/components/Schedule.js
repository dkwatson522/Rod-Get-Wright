import React, { useContext } from 'react';
import Day from './Day';
import { DayContext } from './App';

export default function Schedule( {handleModalOpen, handleDayChange, workouts, setWorkouts, days, handleWorkoutDelete} ) {
  const { handleScheduleClear } = useContext(DayContext)

  return (
    <div className="bg-gray-100 px-4 py-5 rounded-md border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-4 flex justify-center items-center flex-wrap sm:flex-nowrap">
        <div className="mt-4 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center mx-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onClick={handleScheduleClear}
          >
            Clear Schedule
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-xl">
        {days.map(day => {
          return (
            <Day
              key={day.id} {...day}
              day={day}
              handleModalOpen={handleModalOpen}
              handleDayChange={handleDayChange}
              handleWorkoutDelete={handleWorkoutDelete}
            />
          )
        })}
      </div>
    </div>
  )
}
