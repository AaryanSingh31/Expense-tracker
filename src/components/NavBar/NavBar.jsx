import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="w-full min-h-screen bg-amber-800">
      <NavLink
        to="dashboard"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="transactions"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Transactions
      </NavLink>

      <NavLink
        to="budgets"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Budgets
      </NavLink>

      <NavLink
        to="Profile"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Profile
      </NavLink>
    </div>
  )
}

export default NavBar