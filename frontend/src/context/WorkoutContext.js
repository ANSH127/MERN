import { createContext,useReducer } from "react";

export const WorkoutContext = createContext();

const workoutsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WORKOUTS':
            return {workouts: action.payload}
        
        case 'CREATE_WORKOUT':
            return {workouts: [...state.workouts, action.payload]}
        
        case 'DELETE_WORKOUT':
            return {workouts: state.workouts.filter((workout) => workout._id !== action.payload._id)}
        default:
            return state
    }
}


export const WorkoutProvider = ({ children }) => {
    const [state, dispatch] =useReducer(workoutsReducer, {
        workouts: null
    });

    return (
        <WorkoutContext.Provider value={{...state,dispatch}} >{children}</WorkoutContext.Provider>
    );
}