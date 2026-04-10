import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#1c1c1b]">
                <div className="flex w-335 h-162 border-2 border-[#545450] rounded-2xl">
                    <NavBar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout