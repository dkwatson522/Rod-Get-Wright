import React, { useContext } from 'react';
import Day from './Day';
import { DayContext } from './App';

export default function Schedule( {handleModalOpen, handleDayChange, workouts, setWorkouts, days, handleWorkoutDelete} ) {
  const { handleScheduleClear } = useContext(DayContext)

  // const doubleConfirm = document.querySelector('.double-confirm')
  const doubleConfirmScheduleInner = document.querySelector('.double-confirm-schedule-inner')

  const doubleConfirmScheduleClear = () => {
    doubleConfirmScheduleInner.classList.add('-translate-x-full')
    setTimeout(() => {
      doubleConfirmScheduleInner.classList.remove('-translate-x-full')
      // console.log('Should reset the button')
    }, 3000);
  }

  return (
    <div className="bg-gray-100 px-4 py-5 rounded-sm border-b border-gray-200 sm:px-6">
      <div className="flex justify-center items-center flex-wrap sm:flex-nowrap">
        <form>
          <div
            className="overflow-hidden"
            onClick={doubleConfirmScheduleClear}
          >
            <div className="double-confirm-schedule-inner relative transform transition duration-500 ease-in-out">
              <button
                type="button"
                className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-yellow-600 hover:bg-yellow-700 hover:text-blue-800"
              >
                Clear Schedule
              </button>
              <button
                type="button"
                className="absolute px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-sm text-red-300 bg-red-600"
                onClick={handleScheduleClear}
              >
                Confirm?
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4 flex-shrink-0">

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
