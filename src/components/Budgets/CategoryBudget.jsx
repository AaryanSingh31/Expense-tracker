import React from 'react'
import { useExpense } from "../../context/ExpenseContext";
import { useCatBudget } from "../../context/CatBudContext";


function CategoryBudget({category}) {

  const {catBudget} = useCatBudget();

  return (
    <div className='bg-[#262624] border-[1.5px] border-[#65645f] rounded-lg'>
        <div className="bg-blue-600">
          {catBudget}
        </div>
    </div>
  )
}

export default CategoryBudget