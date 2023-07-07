import useAuthContext from "./useAuthContext";
import useWorkoutsContext from "./useWorkoutsContext";

export default function useLogout() {
    const {dispatch} = useAuthContext();
    const {dispatch: dispatchWorkouts} = useWorkoutsContext();
    const logout = async() => {
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'});
        dispatchWorkouts({type: 'SET_WORKOUTS', payload: null});


    }
    return {logout};
  
}
