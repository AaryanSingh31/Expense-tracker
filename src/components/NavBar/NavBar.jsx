import React from 'react'
import { NavLink } from 'react-router-dom'
import dashboard from '../../assets/dashboard.png'
import Transactions from '../../assets/Transactions.png'
import budgets from '../../assets/budgets.png'
import profile from '../../assets/profile.png'
import add from '../../assets/add.png'


function NavBar() {
  return (
    <div className="w-100 h-full border-r-2 border-[#545450] rounded-l-2xl bg-[#262624]">

      <div className="w-full mt-4.5 text-white flex justify-center text-2xl font-semibold">Spend<span className=' text-[#4f47a6] text-2xl font-semibold'>Wise</span></div>

      <div className="flex flex-col items-center mt-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex gap-2.5 py-2 pr-4 pl-3 duration-200 rounded-lg p-1 m-0.5 w-62 ${isActive ? "text-[#4f47a6] border-[1.5px] border-[#545450] bg-[#30302e]" : "text-[#98968e]"} font-semibold hover:bg-[#30302e]`
            }
          >
            <img className='w-5 h-5 mt-1' src={dashboard} alt="" /> Dashboard
          </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex gap-2.5 py-2 pr-4 pl-3 duration-200 rounded-lg p-1 m-0.5 w-62 ${isActive ? "text-[#4f47a6] border-[1.5px] border-[#545450] bg-[#30302e]" : "text-[#98968e]"} font-semibold hover:bg-[#30302e]`
          }
        >
          <img className='w-5 h-5 mt-1' src={Transactions} alt="" /> Transactions
        </NavLink>

        <NavLink
          to="/budgets"
          className={({ isActive }) =>
            `flex gap-2.5 py-2 pr-4 pl-3 duration-200 rounded-lg p-1 m-0.5 w-62 ${isActive ? "text-[#4f47a6] border-[1.5px] border-[#545450] bg-[#30302e]" : "text-[#98968e]"} font-semibold hover:bg-[#30302e]`
          }
        >
          <img className='w-4 h-4 mt-1' src={budgets} alt="" /> Budgets
        </NavLink>

        <NavLink
          to="/Profile"
          className={({ isActive }) =>
            `flex gap-2.5 py-2 pr-4 pl-3 duration-200 rounded-lg p-1 m-0.5 w-62 ${isActive ? "text-[#4f47a6] border-[1.5px] border-[#545450] bg-[#30302e]" : "text-[#98968e]"} font-semibold hover:bg-[#30302e]`
          }
        >
          <img className='w-4.5 h-4.5 mt-1' src={profile} alt="" /> Profile
        </NavLink>

        <NavLink
          to="/add-expense"
          className={({ isActive }) =>
            `flex gap-2.5 py-2 pr-4 pl-3 duration-200 rounded-lg p-1 m-0.5 w-62 ${isActive ? "text-[#4f47a6] border-[1.5px] border-[#545450] bg-[#30302e]" : "text-[#98968e]"} font-semibold hover:bg-[#30302e]`
          }
        >
          <img className='w-4 h-4 mt-1' src={add} alt="" /> Add Expense
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar