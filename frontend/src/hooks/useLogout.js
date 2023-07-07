import useAuthContext from "./useAuthContext";

export default function useLogout() {
    const {dispatch} = useAuthContext();
    const logout = async() => {
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'});

    }
    return {logout};
  
}
