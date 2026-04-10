import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <div className="flex">
                <NavBar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout