import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkoutPlan from './WorkoutPlan';

const workoutDays = [
  {
    id: uuidv4(),
    name: 'Monday',
    focus: 'Rest'
  },
  {
    id: uuidv4(),
    name: 'Tuesday',
    focus: 'Rest'
  },
  {
    id: uuidv4(),
    name: 'Wednesday',
    focus: 'Rest'
  },
  {
    id: uuidv4(),
    name: 'Thursday',
    focus: 'Rest'
  },
  {
    id: uuidv4(),
    name: 'Friday',
    focus: 'Rest'
  },
  {
    id: uuidv4(),
    name: 'Saturday',
    focus: 'Rest'
  },
  {
    id: uuidv4(),
    name: 'Sunday',
    focus: 'Rest'
  }
]



export default function Day({handleModalToggle}) {
  const [days, setDays] = useState(workoutDays)

  return (
    <div>
      {days.map((day) =>
        <div className="border-4 rounded-sm m-2 p-4" key={day.id} >
          <h3
          className="text-xl font-bold"
          >
            {day.name} -
            <span className="p-1 mx-1 bg-red-300 rounded-md" >
              {day.focus}
            </span>
          </h3>
          <WorkoutPlan handleModalToggle={handleModalToggle}/>
        </div>
      )}
    </div>
  )
}
