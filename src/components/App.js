import React, { useState } from 'react';
import '../App.css';
import Schedule from './Schedule';
import ScheduleEdit from './ScheduleEdit';
import { v4 as uuidv4 } from 'uuid';

export const WorkoutContext = React.createContext();

function App() {
  let title = 'Fit Fellas'

  const sampleDays = [
    {
      id: uuidv4(),
      day: 'Monday',
      focus: 'Legs'
    },
    {
      id: uuidv4(),
      day: 'Tuesday',
      focus: 'Back & Shoulders'
    },
    {
      id: uuidv4(),
      day: 'Wednesday',
      focus: 'Chest'
    }
  ]

  const [days, setDays] = useState(sampleDays);
  const [selectedDayId, setSelectedDayId] = useState();

  const selectedDay = days.find((day) => day.id === selectedDayId)

  const handleDayAdd = () => {
    const newDay = {
      id: uuidv4(),
      day:'',
      focus: ''
    }

    setSelectedDayId(newDay.id)
    setDays([...days, newDay])
  }

  const handleDayDelete = (id) => {
    if (selectedDayId != null && selectedDayId === id) {
      setSelectedDayId(undefined)
    }
    setDays(days.filter(day => day.id !== id))
  }

  const handleDaySelect = (id) => {
    console.log(id)
    setSelectedDayId(id)
  }

  const workoutContextValue = {
    handleDayAdd,
    handleDayDelete,
    handleDaySelect
  }

  return (
    <WorkoutContext.Provider value={workoutContextValue}>
      <Schedule days={days}/>
      {/*{selectedDay && <ScheduleEdit day={selectedDay}/>}*/}

    </WorkoutContext.Provider>

  );
}





export default App;
