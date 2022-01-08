import { Progress } from '@chakra-ui/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { userId, isLoading } = useAuth();

    if (isLoading) {
        return <Progress size='xs' isIndeterminate />
    }
    if (userId?.email) {
        return children;
    }
    return <Link to="/" />;


};

export default PrivateRoute;