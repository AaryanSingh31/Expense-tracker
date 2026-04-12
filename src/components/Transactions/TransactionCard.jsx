import react from 'react'
import dummyExpenses from '../../dummy/dummyExp'

function TransactionCard({expense}) {
    return (
        <div className='w-full h-16 bg-gray-700 rounded-lg flex items-center justify-between px-4'>
            <div className='flex items-center gap-4'>
                <div className="w-10 h-10 bg-gray-500 rounded-full ">{expense.title}</div>
                <div className='flex flex-col'>
                    <span className='text-white font-semibold'>{expense.title}</span>
                    <span className='text-gray-400 text-sm'>{expense.category}</span>
                </div>
            </div>
            <div className='text-white font-bold'>₹{expense.amount}</div>   
        </div>
    )
}

export default TransactionCard