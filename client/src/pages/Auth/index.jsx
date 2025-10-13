
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Auth = () => {
    return (
        <Routes>
            {/* relative paths because parent route is /auth/* */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
    );
}

export default Auth;
