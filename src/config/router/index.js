import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Open, Home, Register, Login, About, Admin, Contacts } from '../../pages'
const Index = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path='/' element={<Open />} />
                        <Route path='/Home' element={<Home />} />
                        <Route path='*' element={<Admin />} />
                        <Route path='/Register' element={<Register />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Contacts' element={<Contacts />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index
