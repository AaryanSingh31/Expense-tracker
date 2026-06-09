import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useExpense } from "../../context/ExpenseContext";
import TransactionCard from './TransactionCard';

function Transactions() {

  const [search, setSearch] = useState("")
  const [type, setType] = useState("All")
  const [cat, setCat] = useState("All categories")
  const [month, setMonth] = useState("This Month")
  const [showAll, setShowAll] = useState(false)

  const { expenses } = useExpense();

  const totalEntries = expenses.length;

  const entry = totalEntries === 1 ? "entry" : "entries";

  // const count = showAll
  //   ? totalEntries
  //   : Math.min(totalEntries, 6);

  const filteredExpenses = expenses.filter((expense) => {
    const categoryMatch =
      cat === "All categories" ||
      expense.category === cat;

    const typeMatch =
      type === "All" ||
      expense.transType.toLowerCase() === type.toLowerCase();

    const titleMatch =
      expense.title.toLowerCase().includes(search.toLowerCase()) ||
      expense.notes.toLowerCase().includes(search.toLowerCase()) ||
      expense.category.toLowerCase().includes(search.toLowerCase()) ||
      expense.payment.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && typeMatch && titleMatch;
  });

  const filteredCount = filteredExpenses.length;

  const count = showAll
    ? filteredCount
    : Math.min(filteredCount, 6);

  const currentMonth = new Date().toLocaleString("en-US", {
    month: "long",
  });

  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full h-full rounded-r-2xl bg-[#30302e] overflow-x-scroll no-scrollbar px-4 sm:px-8 md:px-12 lg:px-16 pt-4'>
      <div className="text-xl text-white font-semibold">Transactions</div>
      <div className="text-[#b0b0ac] mb-4">{currentMonth} {currentYear} - {totalEntries} {entry}</div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-4">

          <input
            type="text"
            placeholder="Search transactions"
            className="w-full lg:w-80 border-[1.5px] h-10 border-[#494945] rounded-lg pl-2 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6] text-white placeholder:text-[#686867]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setType("All")}
              className={`px-5 h-10 rounded-full text-sm font-medium transition-all cursor-pointer
        ${type === "All"
                  ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                  : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"
                }`}
            >
              All
            </button>

            <button
              onClick={() => setType("Expense")}
              className={`px-5 h-10 rounded-full text-sm font-medium transition-all cursor-pointer
        ${type === "Expense"
                  ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                  : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"
                }`}
            >
              Expense
            </button>

            <button
              onClick={() => setType("Income")}
              className={`px-5 h-10 rounded-full text-sm font-medium transition-all cursor-pointer
        ${type === "Income"
                  ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                  : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"
                }`}
            >
              Income
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 mt-4">
        <div className="flex flex-col md:flex-row gap-4">

          <select
            className="w-full md:flex-1 bg-[#262624] border-[1.5px] h-10 px-3 cursor-pointer border-[#494945] rounded-lg focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6] font-semibold text-[#b7b5a7]"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            <option>All categories</option>
            <option>Food</option>
            <option>Transportation</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Health</option>
            <option>Education</option>
          </select>

          <select
            className="w-full md:flex-1 bg-[#262624] border-[1.5px] h-10 px-3 cursor-pointer border-[#494945] rounded-lg focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6] font-semibold text-[#b7b5a7]"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option>This Month</option>
            <option>Last Month</option>
          </select>

        </div>
      </div>

      <div className="rounded-lg bg-[#262624] mt-5 mb-5 border-[1.5px] border-[#494945] ">
        <div className="hidden md:grid grid-cols-[2.1fr_1fr_1fr_1fr_1fr] rounded-t-lg justify-around py-2 pl-17 border-b-[1.5px] border-[#494945]">
          <div className='text-[#9d9d99]'>Description</div>
          <div className='text-[#9d9d99]'>Category</div>
          <div className='text-[#9d9d99]'>Payment</div>
          <div className='text-[#9d9d99]'>Amount</div>
          <div className='text-[#9d9d99]'>Date</div>
        </div>
        <TransactionCard showAll={showAll} expenses={filteredExpenses} />
        <div className="flex rounded-b-lg justify-between px-10 py-2 ">
          <div className='text-[#9d9d99] mt-1.5'>Showing {count} of {totalEntries}</div>
          <button
            className='px-5 h-10 bg-[#1d1d1c] rounded-lg text-sm text-white font-semibold border-[1.5px] border-[#494945] transition-all duration-300 hover:bg-[#2b2b29] cursor-pointer'
            onClick={() => setShowAll(!showAll)}
          >{showAll ? "Show less" : "Show all"}</button>
        </div>
      </div>
    </div>
  )
}

export default Transactions