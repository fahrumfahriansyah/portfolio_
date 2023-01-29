import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Access } from '../index.js'
const Admin = () => {
    return (
        <Routes>
            <Route path="/home/:id" element={<Home />} />
            <Route path="/home/:id/Access" element={<Access />} />
        </Routes>
    )
}

export default Admin
