import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import profileReducer from '../redux/profile/profileSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    },
});