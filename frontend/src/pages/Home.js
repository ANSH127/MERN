import React from 'react'
import { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

export default function Home() {
  const [workouts, setWorkouts] = React.useState([])

  const fetchWorkouts = async () => {
    const res = await fetch('/api/workouts/')
    const data = await res.json()
    if(res.ok) {
      console.log(data)
      setWorkouts(data.workouts)
    }

  }

  useEffect(() => {
    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts?.map((workout)=>{
          return (
            <WorkoutDetails key={workout._id} workout={workout} />
          )
        })}
      </div>
      <WorkoutForm />
    </div>
  )
}
