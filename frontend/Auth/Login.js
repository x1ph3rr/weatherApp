import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        try{
            const response = await axios.post('/api/login', {email, password});
            //handle login success
        } catch (error){
            //handle login error
        }
    };

    return (
        <div>
            <input type= 'email' placeholder='Email' onChange={e => setEmail(e.target.value)} />
            <input type= 'password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;