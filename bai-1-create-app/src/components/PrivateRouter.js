import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRouter = ({ children, ...rest }) => {
    const { currentUser, err } = useSelector(state => state.user)
    console.log("$$currentUser", currentUser);
    return currentUser ? children : <Navigate to="/login" />;
     
}

export default PrivateRouter; 
