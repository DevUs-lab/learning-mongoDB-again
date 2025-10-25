import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageNotFound from '../404'

const Frontend = () => {

    return (
        <>

            <Routes>
                <Route path="/" element={<><Header /><Home /> <Footer /></>} />
                <Route path="/about" element={<><Header /><About /> <Footer /></>} />
                <Route path="/contact" element={<><Header /><Contact /> <Footer /></>} />
                <Route path="/services" element={<><Header /><Services /> <Footer /></>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </>
    );
};

export default Frontend;
