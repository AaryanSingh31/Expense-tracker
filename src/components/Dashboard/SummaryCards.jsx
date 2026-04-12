import React from 'react'

function SummaryCards({totalBudget, totalExpenses, transactions}) {
  return (
    <div className="container flex justify-center items-center gap-4 p-5">
      <div className="totalBudget w-1/3 h-12 py-7 bg-green-300 rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(134,239,172,0.8)]">
        <h3 className="text-green-800">Total Budget</h3>
        <p className="text-white font-bold text-2xl">₹{totalBudget}</p>
      </div>
      <div className="totalExpenses w-1/3 h-12 py-7 bg-red-300 rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(252,165,165,0.8)]">
        <h3 className="text-red-800">Total Expenses</h3>
        <p className="text-white font-bold text-2xl">₹{totalExpenses}</p>
      </div>
      <div className="transactions w-1/3 h-12 py-7 bg-cyan-300 rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(165,243,252,0.8)]">
        <h3 className="text-cyan-800">Transactions</h3>
        <p className="text-white font-bold text-2xl">{transactions}</p>
      </div>
    </div>
  )
}

export default SummaryCards