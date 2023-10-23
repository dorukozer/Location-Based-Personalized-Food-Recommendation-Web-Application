/*eslint-disable*/
import { createTheme } from '@material-ui/core';
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';


const CreatePrivateRoute = ({ children }) => {
    const {isLoggedIn} = useAuth();

    if (!isLoggedIn) {
        return (<Navigate to="/auth/login" replace />);
    } 
    return children;
};


export default CreatePrivateRoute;