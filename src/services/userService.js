import axios from 'axios';
import * as config from '../config.json';

const UserService = {
    login: (username, password) => {
        if(!username || !password) return;

        const headers = {
            'Content-Type': 'application/json'
        }
        return axios.post(`${config.apiUrl}/login`, { username, password }, { headers });
    }
}

export default UserService;