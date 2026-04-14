import React from 'react'
import {useState} from 'react'
import SummaryCards from './SummaryCards'
import RecentTransactions from '../Transactions/RecentTransactions'
import ExpenseLineChart from '../Charts/ExpenseLineChart'
import ExpenseBarChart from '../Charts/ExpenseBarChart'

function Dashboard({totalSpent, budgetLeft, transactions}) {
  
  return (
    <div className='w-full bg-[#30302e] h-screen overflow-y-auto pb-6'>
      <div className="mb-6 pb-2 bg-gray-800 flex justify-around">
        <div className="wrapper">
          <h3 className="text-white text-lg font-light ">Good Morning, Aaryan & Sambhav</h3>
        <p className="text-gray-400 text-sm ">Here's your spending overview for today.</p>
        </div>
        <div className="text-white flex justify-center items-center text-2xl font-semibold">
          Spend
          <span className=" text-[#4f47a6] text-2xl font-semibold">Wise</span>
        </div>
      </div>
      <SummaryCards totalBudget="12500" totalExpenses="8400" transactions="10" />
      <ExpenseBarChart />
      <ExpenseLineChart />
      <RecentTransactions />
    </div>
  )
}

export default Dashboard