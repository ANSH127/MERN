import { useState } from "react";
import useAuthContext from "./useAuthContext";




export default function useLogin()  {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {dispatch} = useAuthContext();

    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        const res= await fetch('api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        });
        const data = await res.json();

        if(!res.ok){
            setLoading(false);
            setError(data.message || 'Something went wrong');
            
        }
        else{
            // save the user to local storage
            localStorage.setItem('user',JSON.stringify(data));

            // update the auth context
            dispatch({type: 'LOGIN', payload: data});

            setLoading(false);

        }



    }
    return {error, loading, login};

}