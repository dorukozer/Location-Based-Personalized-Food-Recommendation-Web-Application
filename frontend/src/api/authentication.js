import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const fetchLogin = (userData) => {
    // eslint-disable-next-line no-console
    const authenticate = axios.post(`${url}/auth/login/`, userData);
    
    return authenticate;
};

export const fetchRegister = (userData) => {
    const authenticate = axios.post(`${url}/auth/register/`, userData);
    
    return authenticate;
};

