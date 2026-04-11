import React, { useState } from 'react'
import '../../styles/AddExp.css'

function AddExpense() {

  const [transType, setTransType] = useState("expense")

  return (
    <div className='flex justify-center items-center w-full h-full rounded-r-2xl bg-[#30302e]'>
      <div className="w-[45%] h-165 bg-[#1e1e1d] rounded-xl flex justify-center items-center">
        <div className="w-[90%] h-152 bg-[#30302e] rounded-xl border-[1.5px] border-[#494945]">
          <div className="text-white mt-5 ml-4 font-semibold text-[18px]">Add new expense</div>

          <div className="Trans-type flex justify-center mt-3">
            <button
              onClick={() => setTransType("expense")}
              className={`px-6 py-2 w-56 rounded-l-lg text-sm font-medium transition-all duration-300 
      ${transType === "expense"
                  ? "bg-white text-red-500"
                  : "text-gray-400 border-[1.5px] border-gray-600 hover:text-white"}`}
            >
              Expense
            </button>

            <button
              onClick={() => setTransType("income")}
              className={`px-6 py-2 w-56 rounded-r-lg text-sm font-medium transition-all duration-300 
      ${transType === "income"
                  ? "bg-white text-green-500"
                  : "text-gray-400 border-[1.5px] border-gray-600 hover:text-white"}`}
            >
              Income
            </button>
          </div>

          <div className="Amount flex justify-center gap-6 px-3 py-3">
            <div className="flex flex-col">
              <label htmlFor="amount">Amount (₹)*</label>
              <input className='border-[1.5px] mt-1 w-52 border-[#494945] rounded-lg px-2 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6]' type="number" placeholder='0.00' />
            </div>

            <div className="flex flex-col">
              <label htmlFor="amount">Date*</label>
              <input className='border-[1.5px] mt-1 w-52 border-[#494945] rounded-lg pl-2' type="date" placeholder='0.00' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddExpense