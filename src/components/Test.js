import React, { useState } from 'react';
import axios from 'axios';
import * as config from '../config.json';
import { useHistory } from 'react-router-dom';

export default function Test() {

    const history = useHistory();

    const [messages, setMessages] = useState([]);

    const testAny = () => {
        axios.get(`${config.apiUrl}/test/any`)
            .then(res => setMessages([...messages, res.data.message]))
            .catch(err => console.error(err));
    }

    const testAuthenticated = () => {
        axios.get(`${config.apiUrl}/test/auth`)
            .then(res => setMessages([...messages, res.data.message]))
            .catch(err => { 
                console.log(err)
                if(err.failedRefresh) history.push('/login');
            });
    }

    return (
        <div>
            <button onClick={testAny}>Any</button>
            <button onClick={testAuthenticated}>Authenticated</button>
            <ul>
                {messages.map(m => <li>{m}</li>)}
            </ul>
        </div>
    )
}
