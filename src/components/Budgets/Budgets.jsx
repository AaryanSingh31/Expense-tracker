import React from 'react'
import CategoryBudget from './CategoryBudget'

function Budgets() {
  return (
    <div className='w-full h-full rounded-r-2xl bg-[#30302e] py-4 px-10'>
      <div className="flex justify-around">
        <div className="flex flex-col">
          <div className="text-white font-semibold text-3xl">Budgets</div>
          <div className="text-[#cbcac4]">April 2026 — set spending limits per category</div>
        </div>

        <button
          className='flex gap-1 border-[1.5px] pt-1.5 px-2 h-10 rounded-lg text-white border-[#65645f] hover:bg-[#212020] duration-300'>
          + <span className=' hidden sm:block'>New budget</span>
        </button>
      </div>

      <div className="flex gap-4 px-55 mt-4">
        <div className='flex flex-col bg-[#262624] rounded-lg py-4 px-4 w-1/3'>
          <div className='font-semibold text-[15px] text-[#cbcac4]'>Total budget</div>
          <div className="total text-white text-[25px] font-semibold">₹ 60000</div>
        </div>

        <div className='flex flex-col bg-[#262624] rounded-lg py-4 px-4 w-1/3'>
          <div className='font-semibold text-[15px] text-[#cbcac4]'>Spent so far</div>
          <div className="total text-red-800 text-[25px] font-semibold">₹ 42671</div>
        </div>

        <div className='flex flex-col bg-[#262624] rounded-lg py-4 px-4 w-1/3'>
          <div className='font-semibold text-[15px] text-[#cbcac4]'>Remaining</div>
          <div className="total text-green-800 text-[25px] font-semibold">₹ 17329</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <CategoryBudget category="Sambhav"/>
        <CategoryBudget category="Aaryan"/>
        <CategoryBudget category="Expense tracker"/>
        <CategoryBudget category="Sambhav"/>
        <CategoryBudget category="Aaryan"/>
        <CategoryBudget category="Expense tracker"/>
      </div>
    </div>
  )
}

export default Budgets