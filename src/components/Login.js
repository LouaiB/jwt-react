import React, { useState } from 'react';
import UserService from '../services/userService';
import TokenStorageHelper from '../helpers/TokenStorageHelper';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login =  () => {
        UserService.login(username, password)
            .then(res => {
                TokenStorageHelper.setAccessToken(res.data.accessToken);
                TokenStorageHelper.setRefreshToken(res.data.refreshToken);
                history.push('/test');
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            username: <input onChange={e => setUsername(e.target.value)} /><br />
            password: <input onChange={e => setPassword(e.target.value)} /><br />
            <button onClick={login}>Login</button>
        </div>
    )
}
