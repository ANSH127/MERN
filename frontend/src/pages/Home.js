import React from 'react'
import { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import useWorkoutsContext from '../hooks/useWorkoutsContext'

export default function Home() {
  const {workouts, dispatch} = useWorkoutsContext()

  const fetchWorkouts = async () => {
    const res = await fetch('/api/workouts/')
    
    const data = await res.json()
    if(res.ok) {
      // console.log(data)
      dispatch({type: 'SET_WORKOUTS', payload: data.workouts})
    }

  }

  useEffect(() => {
    fetchWorkouts()

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
