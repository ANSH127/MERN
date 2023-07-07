import React from 'react'
import useWorkoutsContext from '../hooks/useWorkoutsContext'

export default function WorkoutForm() {
    const {dispatch} = useWorkoutsContext()
    const [title, setTitle] = React.useState('')
    const [load, setLoad] = React.useState('')
    const [reps, setReps] = React.useState('')
    const [error, setError] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = {title, load, reps}

        const res = await fetch('/api/workouts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        })

        const data = await res.json()


        if(!res.ok) {
            setError(data.message)
        }
        if(res.ok) {
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('workout added', data);
            dispatch({type: 'CREATE_WORKOUT', payload: data.workout})
        }




    }

  return (
    <div className="workout-form">
        <h4>Add a new workout</h4>
        <form onSubmit={handleSubmit} >
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="load">Load (Kg)</label>
            <input type="text" id="load" value={load} onChange={(e) => setLoad(e.target.value)} />
            <label htmlFor="reps">Reps</label>
            <input type="text" id="reps" value={reps} onChange={(e) => setReps(e.target.value)} />
            <button type="submit">Add Workout</button>
            {error &&<div className="error">{error}</div> }
        </form>
    </div>

  )
}
