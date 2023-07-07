import React from 'react'
import useLogin from '../hooks/useLogin'

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { login, error, loading } = useLogin();

    const handleSubmit = async(e) => {
        e.preventDefault()
        await login(email, password)

    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log In</h3>

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

            <button disabled={loading} >Log in</button>
            {loading && <p>Loading..</p>}
            {error && <p className="error">{error}</p>}
        </form>
    )
}
