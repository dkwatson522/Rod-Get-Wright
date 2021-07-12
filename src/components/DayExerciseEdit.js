import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

const DayExerciseEdit = (props) => {
  const {
    exercise,
    handleExerciseChange,
    handleExerciseDelete
  } = props

  const handleChange = (changes) => {
    handleExerciseChange(exercise.id, { ...exercise, ...changes })
  }

  return(
    <div className="grid grid-cols-6 divide-x-4">
      <div className="px-4 col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
          Workout
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="workout"
            value={exercise.workout}
            onChange={(e) => handleChange({workout: e.target.value})}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="px-4 col-span-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
          Description
        </label>
        <div className="mt-1">
          <textarea
            name="description"
            id="description"
            value= {exercise.description}
            onChange={(e) => handleChange({description: e.target.value})}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <button
        className="flex items-center justify-center mx-1"
        onClick={() => handleExerciseDelete(exercise.id)}
      >
        <FontAwesomeIcon
          className="h-auto w-auto text-red-600"
          aria-hidden="true"
          icon={faTrashAlt}
        />
      </button>
    </div>
  )
};

export default DayExerciseEdit;
