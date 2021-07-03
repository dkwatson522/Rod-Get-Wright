import { v4 as uuidv4 } from 'uuid';



export default function WorkoutPlan({ handleModalToggle }) {
  return (
    <>
      <div>
        <p>Workout Here</p>
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-green-500 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            New Segment
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-green-500 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            onClick = {handleModalToggle}
          >
            New Workout
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-green-500 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Edit Day
          </button>
        </span>
      </div>
    </>
  )
}
