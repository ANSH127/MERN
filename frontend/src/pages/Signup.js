import React from 'react'
import useSignup from '../hooks/useSignup'
export default function Signup() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {signup,error,loading}=useSignup();

    const handleSubmit = async(e) => {
        e.preventDefault()
        await signup(email,password)


    }
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>Email address:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={loading} >Sign up</button>
            {loading && <p>Loading..</p>}
            {error && <p className="error">{error}</p>}

        </form>
    )
}
