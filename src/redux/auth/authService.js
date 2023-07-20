import axios from 'axios';
import { FlatHub } from '../../api';

// Register user
const register = async (userData) => {
    // console.log(userData);
    const response = await FlatHub.post('/auth/register', userData);

    if (response.data) {
        localStorage.setItem('userInfo', JSON.stringify(response.data));
    }

    return response.data;
};

// Login user
const login = async (userData) => {
    // console.log(userData);
    const response = await FlatHub.post('/auth/login', userData);

    if (response.data) {
        localStorage.setItem('userInfo', JSON.stringify(response.data));
    }

    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem('userInfo');
};

const authService = {
    register,
    logout,
    login,
};

export default authService;
