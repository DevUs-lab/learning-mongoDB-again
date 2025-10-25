
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import PageNotFound from '../404';

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default Auth;
