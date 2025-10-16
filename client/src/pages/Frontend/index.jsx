import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import { Footer } from 'antd/es/layout/layout'

const Frontend = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/services' element={<Services />} />
                    {/* <Route path='/about' element={<About />} />
                <Route path='/about' element={<About />} /> */}
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Frontend