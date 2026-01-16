import React, { Children, use } from 'react';
import { AuthContext } from '../contextProvider/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user} = use(AuthContext);

    if (!user) {
        return <Navigate to='/signin'></Navigate>
    }
    return children;
};

export default PrivateRoutes;