import React from 'react'
import useWorkoutsContext from '../hooks/useWorkoutsContext'
import useAuthContext from '../hooks/useAuthContext'

// date-fns
import { formatDistanceToNow } from 'date-fns'
export default function WorkoutDetails({ workout }) {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }
        const res = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`

            }
        })
        const data = await res.json()
        if (res.ok) {
            // console.log(data)
            dispatch({ type: 'DELETE_WORKOUT', payload: data.workout })
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (Kg):</strong>{workout.load}</p>
            <p><strong>Reps :</strong>{workout.reps}</p>
            <p>
                {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
            </p>
            <span className='material-symbols-outlined' onClick={handleClick} >
                delete
            </span>

        </div>
    )
}
