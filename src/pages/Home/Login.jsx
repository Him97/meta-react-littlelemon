import { useEffect, useState } from "react";
import { GET, POST } from '../../utils/api'

/*
    1) create a new route for login
    2) call axios with email & password from the client 
    3) validate user -> 
        if valid => res status 200
        else => res status 401
*/

export default function Login() {
    const [userId, setUserId] = useState(localStorage.getItem('USER') || 'None');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        localStorage.setItem("USER", userId);
    }, [userId])

    const handleLogin = () => {
        POST('/auth/login', { email, password })
            .then((resp) => {
                console.log(resp);
                setUserId(resp.id);
            })
    }

    return (
        <div>
            <h1>{userId}</h1>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>login</button>
        </div>
    )
}