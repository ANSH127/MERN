import React from 'react'
import useWorkoutsContext from '../hooks/useWorkoutsContext'
export default function WorkoutDetails({ workout}) {
    const {dispatch} = useWorkoutsContext()

    const handleClick = async () => {
        const res = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE'
        })
        const data = await res.json()
        if(res.ok) {
            console.log(data)
            dispatch({type: 'DELETE_WORKOUT', payload: data.workout})
        }
    }
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (Kg):</strong>{workout.load}</p>
        <p><strong>Reps :</strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick} >delete</span>

    </div>
  )
}
