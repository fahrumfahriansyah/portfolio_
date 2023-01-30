import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Access } from '../index.js'
const Admin = () => {
    return (
        <Routes>
            <Route path="Home/:id" element={<Home />} />
            <Route path="Home/:id/Access" element={<Access />} />
        </Routes>
    )
}

export default Admin
