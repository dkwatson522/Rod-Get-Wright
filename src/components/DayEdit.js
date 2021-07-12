import { Fragment, useRef, useContext} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { DayContext } from './App';
import DayExerciseEdit from './DayExerciseEdit';
import { v4 as uuidv4 } from 'uuid';

export default function DayEdit (props) {
  const { handleModalClose, handleDayChange } = useContext(DayContext);

  const { day, openDayModal } = props;

  const cancelButtonRef = useRef(null);

  const handleChange = (changes) => {
    handleDayChange(day.id, { ...day, ...changes })
  }

  const handleExerciseAdd = () => {
    const newExercise = {
      workout: "Pushups",
      description: "3x10",
      id: uuidv4()
    }

    handleChange({ exercises: [...day.exercises, newExercise]})
  }

  const handleExerciseDelete = (id) => {
    handleChange({
      exercises: day.exercises.filter(i => {
        return i.id !== id
      })
    })
  }

  const handleExerciseChange = (id, exercise) => {
    const newExercises = [...day.exercises]
    const index = newExercises.findIndex(i => i.id === id)
    newExercises[index] = exercise
    handleChange({exercises: newExercises})
  }

  return (
    <div>
      <Transition.Root show={openDayModal} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          open={openDayModal}
          onClose={handleModalClose}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <FontAwesomeIcon className="h-6 w-6 text-green-600" aria-hidden="true" icon={faDumbbell} />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Edit {day.name} Workout
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                          <label htmlFor="focus" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Focus
                          </label>
                          <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                              type="text"
                              name="focus"
                              id="focus"
                              value={day.focus}
                              onInput={e => handleChange({ focus: e.target.value })}
                              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        {day.exercises.map(exercise => (
                          <>
                            <DayExerciseEdit
                              key={exercise.id}
                              exercise={exercise}
                              handleExerciseDelete={handleExerciseDelete}
                              handleExerciseChange={handleExerciseChange}
                            />
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    onClick={handleExerciseAdd}
                  >
                    Add Workout
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={handleModalClose}
                    ref={cancelButtonRef}
                  >
                    Done
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
};
