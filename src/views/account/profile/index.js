import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux/profile/profileSlice';

const Index = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { profile, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );
    // useEffect(() => {
    //     // if (isError) {
    //     //     setMsg(message);
    //     // }

    //     // if (isSuccess || profile) {
    //     //     navigate('/user/dashboard');
    //     // }

    //     dispatch(getProfile());
    // }, [profile, isError, isSuccess, message, navigate, dispatch]);

    return (
        <div>This is your profile page.</div>
    );
};

export default Index;