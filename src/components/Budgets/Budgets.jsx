import React, { useState } from 'react'
import { useExpense } from "../../context/ExpenseContext";
import CategoryBudget from './CategoryBudget'
import AddCategoryBudget from './AddCategoryBudget';
import AddBudget from './AddBudget';
import { useBudget } from "../../context/BudgetContext";

function Budgets() {
  const { expenses } = useExpense();
  const {budget} = useBudget();
  const [showModal, setShowModal] = useState(false)
  const [showInput, setShowInput] = useState(false)

  return (
    <div className='w-full h-full rounded-r-2xl bg-[#30302e] py-4 px-10'>
      <div className="flex justify-around">
        <div className="flex flex-col">
          <div className="text-white font-semibold text-3xl">Budgets</div>
          <div className="text-[#cbcac4]">April 2026 — set spending limits per category</div>
        </div>

        <button
          className='flex gap-1 border-[1.5px] pt-1.5 px-2 h-10 rounded-lg text-white border-[#65645f] hover:bg-[#212020] duration-300 cursor-pointer'
          onClick={() => setShowInput(true)}
          >
          + <span className=' hidden sm:block'>New budget</span>
        </button>

        {showInput && (
            <AddBudget onClose={() => setShowInput(false)} />
          )}
      </div>

      <div className="flex gap-4 px-55 mt-4">
        <div className='flex flex-col bg-[#262624] rounded-lg py-4 px-4 w-1/3'>
          <div className='font-semibold text-[15px] text-[#cbcac4]'>Total budget</div>
          <div className="total text-white text-[25px] font-semibold">₹ {budget}</div>
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

      <div className="grid grid-cols-2 gap-4 mt-4 px-55">
        <CategoryBudget category="Sambhav" />
        <CategoryBudget category="Aaryan" />
        <CategoryBudget category="Expense tracker" />
        <CategoryBudget category="Sambhav" />
        <CategoryBudget category="Aaryan" />
        <div className="relative">
          <button
            className='flex flex-col justify-center bg-[#30302e] hover:bg-[#262624] duration-300 cursor-pointer border-2 border-dashed border-[#65645f] rounded-lg py-6 px-4'
            onClick={() => setShowModal(true)}
          >
            <div className="text-[#cbcac4]">+</div>
            <div className="text-[#cbcac4]">Add category budget</div>
          </button>

          {showModal && (
            <AddCategoryBudget onClose={() => setShowModal(false)} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Budgets