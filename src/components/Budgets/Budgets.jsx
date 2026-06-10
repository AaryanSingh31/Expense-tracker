import React, { useState } from 'react'
import { useExpense } from "../../context/ExpenseContext";
import CategoryBudget from './CategoryBudget'
import AddCategoryBudget from './AddCategoryBudget';
import AddBudget from './AddBudget';
import { useBudget } from "../../context/BudgetContext";

function Budgets() {
  const { expenses } = useExpense();
  const { budget } = useBudget();
  const [showModal, setShowModal] = useState(false)
  const [showInput, setShowInput] = useState(false)

  const currentMonth = new Date().toLocaleString("en-US", {
    month: "long",
  });

  const currentYear = new Date().getFullYear();

  const totalSpent = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const remaining = budget - totalSpent;

  return (
    <div className='w-full h-full rounded-r-2xl bg-[#30302e] pt-4 pb-17 md:py-4 px-10 overflow-scroll no-scrollbar'>
      <div className="flex justify-around">
        <div className="flex flex-col">
          <div className="text-white font-semibold text-3xl">Budgets</div>
          <div className="text-[#cbcac4]">{currentMonth} {currentYear} — set spending limits per category</div>
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

      <div className="grid grid-cols-1 md:grid-cols-3 md:mx-45 gap-4 mt-6">
        <div className='flex flex-col bg-[#262624] border-[1.5px] border-[#494945] rounded-lg py-4 px-4'>
          <div className='font-semibold text-[15px] text-[#cbcac4]'>Total budget</div>
          <div className="total text-white text-[25px] font-semibold">₹ {budget}</div>
        </div>

        <div className='flex flex-col bg-[#262624] border-[1.5px] border-[#494945] rounded-lg py-4 px-4'>
          <div className='font-semibold text-[15px] text-[#cbcac4]'>Spent so far</div>
          <div className="total text-red-700 text-[25px] font-semibold">₹ {totalSpent}</div>
        </div>

        <div className='flex flex-col bg-[#262624] border-[1.5px] border-[#494945] rounded-lg py-4 px-4'>
          <div className='font-semibold text-[15px] text-[#cbcac4]'>Remaining</div>
          <div className="total text-green-600 text-[25px] font-semibold">₹ {remaining}</div>
        </div>
      </div>

      <div className="mt-8 px-2 sm:px-4 md:px-6">
        <CategoryBudget />
      </div>
    </div>
  )
}

export default Budgets