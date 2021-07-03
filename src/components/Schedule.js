import Day from './Day'

export default function Schedule( {handleModalToggle}) {
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Weekly Workout Schedule</h3>
          <p className="mt-1 text-sm text-gray-500">
            Let's get to it this week!
          </p>
        </div>
        <div className="ml-4 mt-4 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center mx-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Clear Schedule
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-xl">
        <Day handleModalToggle={handleModalToggle}/>
      </div>
    </div>
  )
}
