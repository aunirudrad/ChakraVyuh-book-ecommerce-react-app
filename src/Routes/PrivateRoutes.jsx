import React, { Children, use } from 'react';
import { AuthContext } from '../contextProvider/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user, loading} = use(AuthContext);

    if (loading) {
        return <div className='w-10 mx-auto'><span className="loading loading-bars loading-xl"></span></div>
    }

    if (!user) {
        return <Navigate to='/signin'></Navigate>
    }
    return children;
};

export default PrivateRoutes;