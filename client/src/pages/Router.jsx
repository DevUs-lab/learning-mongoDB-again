import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import PageNotFound from './404'

const Index = () => {
    return (
        <Routes>
            <Route path="/*" element={<Frontend />} />
            <Route path='/auth/*' element={<Auth />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default Index