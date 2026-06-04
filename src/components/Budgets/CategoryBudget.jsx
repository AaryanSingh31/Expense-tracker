import React from 'react'
import { useState } from 'react';
import { useExpense } from "../../context/ExpenseContext";
import AddCategoryBudget from './AddCategoryBudget';
import { useCatBudget } from "../../context/CatBudContext";


function CategoryBudget({ category }) {

  const { catBudgets } = useCatBudget();
  const [showModal, setShowModal] = useState(false)
  const { expenses } = useExpense();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:px-8">

    {catBudgets.map((item) => {

    const spent = expenses
    .filter(exp => exp.category === item.category)
    .reduce((sum, exp) => sum + Number(exp.amount), 0);

     return (
      <div
        key={item.id}
        className="py-3 px-4 w-full rounded-xl border border-gray-700 bg-[#262624]"
      >
        <h3 className="text-white font-semibold">
          {item.category}
        </h3>

        <p className="text-gray-400">
          ₹{spent} of ₹{item.budget}
        </p>

        <p className="text-green-400">
          ₹{item.budget - spent} left
        </p>
      </div>
     );
       })}

      <div className="relative">
        <button
          className='flex flex-col justify-center items-center w-full min-h-24.5 bg-[#30302e] hover:bg-[#262624] duration-300 cursor-pointer border-2 border-dashed border-[#65645f] rounded-lg py-4 px-8'
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
  )
}

export default CategoryBudget