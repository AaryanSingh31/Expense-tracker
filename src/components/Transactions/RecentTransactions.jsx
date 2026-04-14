import React from 'react'
import TransactionCard from './TransactionCard'
import dummyExpenses from '../../dummy/dummyExp'
import { useExpense } from "../../context/ExpenseContext";

function RecentTransactions() {

  const { expenses } = useExpense();

  return (
    <div className='mt-8 px-3'>
        <h2 className='text-white font-semibold text-lg'>Recent Transactions</h2>
        {
            expenses.slice(0, 5).map((expense) => (
                 <TransactionCard key={expense.id} expense={expense} />
            ))}
    </div>
  )
}

export default RecentTransactions;