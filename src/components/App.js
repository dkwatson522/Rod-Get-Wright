import React, { useState, useEffect } from 'react'
import Schedule from './Schedule'
import DayEdit from './DayEdit';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

export const WorkoutContext = React.createContext();

const workoutDays = [
  {
    id: uuidv4(),
    name: 'Monday',
    focus: 'Rest',
    exercises: [
      {
        workout: 'Yoga',
        description: '30 minutes of Yoga',
        id: uuidv4()
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Tuesday',
    focus: 'Chest',
    exercises: [
      {
        workout: 'Bench Press',
        description: '2x10, 1x6, 1x4',
        id: uuidv4()
      },
      {
        workout: 'Incline Dumbbell Press',
        description: 'Triples 3x5',
        id: uuidv4()
      },
      {
        workout: 'Seated Flys',
        description: '3x10',
        id: uuidv4()
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Wednesday',
    focus: 'Arms',
    exercises: [
      {
        workout: 'Pyramid Workout',
        description: 'Up to 10 then down to 1',
        id: uuidv4()
      },
      {
        workout: 'Bicep Curls',
        description: '4x10',
        id: uuidv4()
      },
      {
        workout: 'Skullcrushers',
        description: '3x10 then press bar for 10',
        id: uuidv4()
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Thursday',
    focus: 'Legs',
    exercises: [
      {
        workout: 'Back Squat',
        description: '4x10',
        id: uuidv4()
      },
      {
        workout: 'Deadlift',
        description: '4x10',
        id: uuidv4()
      },
      {
        workout: 'Back Squat',
        description: '4x10',
        id: uuidv4()
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Friday',
    focus: 'Rest',
    exercises: [
      {
        workout: 'Yoga',
        description: '30 minutes of Yoga',
        id: uuidv4()
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Saturday',
    focus: 'Back',
    exercises: [
      {
        workout: 'Barbell Row',
        description: '3x10',
        id: uuidv4()
      },
      {
        workout: 'Pullups',
        description: '4x10',
        id: uuidv4()
      },
      {
        workout: 'Lat Pulldown',
        description: '5x8',
        id: uuidv4()
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Sunday',
    focus: 'Shoulders',
    exercises: [
      {
        workout: 'Shoulder Complex',
        description: '3 shoulder exercises light weights; 3x8',
        id: uuidv4()
      },
      {
        workout: 'Military Press',
        description: '3x10',
        id: uuidv4()
      },
      {
        workout: 'Kneeling Press',
        description: '4x12',
        id: uuidv4()
      }
    ]
  }
]

export const DayContext = React.createContext();

export default function App() {
  const [openDayModal, setOpenDayModal] = useState(true);
  const [days, setDays] = useState(workoutDays);
  const [selectedDayId, setSelectedDayId] = useState(undefined);

  const LOCAL_STRAGE_KEY = 'getFitness.workouts'

  useEffect(() => {
    const dayJSON = localStorage.getItem(LOCAL_STRAGE_KEY)
    if (dayJSON != null) setDays(JSON.parse(dayJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STRAGE_KEY, JSON.stringify(days))
  }, [days])

  const handleModalClose = () => {
    handleDaySelect(undefined)
    setOpenDayModal(false)
  }

  const handleModalOpen = () => {
    setOpenDayModal(true)
  }

  const handleDaySelect = (id) => {
    setSelectedDayId(id)
    handleModalOpen()
  }

  const selectedDay = days.find(day => day.id === selectedDayId)

  const handleDayChange = (id, day) => {
    const newDays = [...days]
    const index = newDays.findIndex(r => r.id === id)
    newDays[index] = day
    setDays(newDays)
  }

  const handleDayClear = (id) => {
    const newDays = [...days]
    const index = newDays.findIndex(r => r.id === id)
    newDays[index] = {
      id: uuidv4(),
      name: newDays[index].name,
      focus: 'Rest',
      exercises: [

      ]
    }
    setDays(newDays)
  }

  const handleScheduleClear = () => {
    setDays(resetSchedule)
  }

  const recipeContextValue = {
    handleDaySelect,
    handleDayChange,
    handleDayClear,
    handleScheduleClear,
    handleModalOpen,
    handleModalClose
  }


  return (
    <DayContext.Provider value={recipeContextValue}>
      <div className="font-mono min-h-screen bg-gray-700">
        <div className="bg-yellow-600 pb-32">
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Get Fit - Weekly Workout Schedule</h1>
            </div>
          </header>
        </div>
        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
              <Schedule
                handleDayChange={handleDayChange}
                days={days}
              />
              {selectedDay && <DayEdit
                openDayModal={openDayModal}
                day = {selectedDay}
              />}
            </div>
          </div>
        </main>
      </div>
    </DayContext.Provider>
  )
}


const resetSchedule = [
  {
    id: uuidv4(),
    name: 'Monday',
    focus: 'Rest',
    exercises: [

    ]
  },
  {
    id: uuidv4(),
    name: 'Tuesday',
    focus: 'Rest',
    exercises: [

    ]
  },
  {
    id: uuidv4(),
    name: 'Wednesday',
    focus: 'Rest',
    exercises: [

    ]
  },
  {
    id: uuidv4(),
    name: 'Thursday',
    focus: 'Rest',
    exercises: [

    ]
  },
  {
    id: uuidv4(),
    name: 'Friday',
    focus: 'Rest',
    exercises: [

    ]
  },
  {
    id: uuidv4(),
    name: 'Saturday',
    focus: 'Rest',
    exercises: [

    ]
  },
  {
    id: uuidv4(),
    name: 'Sunday',
    focus: 'Rest',
    exercises: [

    ]
  }
]
