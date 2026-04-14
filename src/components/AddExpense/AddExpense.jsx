import React, { useState } from 'react'
import '../../styles/AddExp.css'
import { useExpense } from "../../context/ExpenseContext";

function AddExpense() {

  const [transType, setTransType] = useState("expense")
  const [category, setCategory] = useState("food")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [title, setTitle] = useState("")
  const [payment, setPayment] = useState("UPI")
  const [account, setAccount] = useState("Main account")
  const [notes, setNotes] = useState("")

  const { setExpenses } = useExpense();

  const handleSubmit = () => {
  const newExpense = {
    id: Date.now(),
    transType: transType,
    amount: amount,
    date: date,
    title: title,
    category: category,
    payment: payment,
    account: account,
    notes: notes
  };

  setExpenses((prev) => [...prev, newExpense]);

  setCategory("food");
  setTransType("expense");
  setAmount("");
  setDate("");
  setTitle("");
  setPayment("UPI");
  setAccount("Main account");
  setNotes("")
};

  return (
    <div className='flex justify-center items-center w-full h-full rounded-r-2xl bg-[#30302e]'>
      <div className="md:w-[56%] w-full h-165 bg-[#30302e] p-2 md:p-0 md:bg-[#1e1e1d] rounded-xl flex justify-center items-center">
        <div className="md:w-[95%] w-full h-155 bg-[#30302e] rounded-xl border-[1.5px] border-[#494945]">
          <div className="text-white mt-2 ml-4 font-semibold text-[18px]">Add new expense</div>

          <div className="Trans-type flex justify-center mt-2 px-6">
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

          <div className="Amount flex justify-center gap-6 px-6 pt-3">
            <div className="flex flex-col w-full min-w-0">
              <label className='text-[#aaaaa7] font-semibold'>Amount (₹)*</label>
              <input
                className='border-[1.5px] mt-1 h-9 w-full min-w-0 border-[#494945] rounded-lg px-2 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6] font-semibold text-white placeholder-[#686867]'
                type="number"
                placeholder='0.00'
                value={amount}
                onChange={(e) => setAmount(e.target.value)} />
            </div>

            <div className="flex flex-col w-full min-w-0">
              <label className='text-[#aaaaa7] font-semibold'>Date*</label>
              <input
                className='cursor-pointer border-[1.5px] mt-1 h-9 w-full max-w-full border-[#494945] rounded-lg focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6] text-[#686867] focus:text-white'
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>

          <div className="flex flex-col px-6 mt-1">
            <label className='text-[#aaaaa7] font-semibold' htmlFor="amount">Title / description *</label>
            <input
              className='border-[1.5px] mt-1 h-9 w-full border-[#494945] rounded-lg pl-2 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6] text-white placeholder:text-[#686867]'
              type="text"
              placeholder='e.g. Zomato lunch order'
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </div>

          <section className="category px-6 mt-1">
            <div className="w-full text-[#aaaaa7] font-semibold">Category*</div>

            {/* Category section */}

            <div className="flex gap-4 mt-2 h-37 justify-around flex-wrap overflow-y-scroll no-scrollbar">
              <button
                onClick={() => setCategory("food")}
                className={`text-center px-1 overflow-hidden no-scrollbar h-16 w-1/5 rounded-lg text-sm font-medium transition-all duration-300 
      ${category === "food"
                    ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                    : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"}`}
              >Food</button>

              <button
                onClick={() => setCategory("transport")}
                className={`text-center px-1 overflow-scroll no-scrollbar h-16 w-1/5 rounded-lg text-sm font-medium transition-all duration-300 
      ${category === "transport"
                    ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                    : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"}`}
              >Transport</button>

              <button
                onClick={() => setCategory("bills")}
                className={`text-center px-1 overflow-scroll no-scrollbar h-16 w-1/5 rounded-lg text-sm font-medium transition-all duration-300 
      ${category === "bills"
                    ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                    : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"}`}
              >Bills</button>

              <button
                onClick={() => setCategory("shopping")}
                className={`text-center px-1 overflow-scroll no-scrollbar h-16 w-1/5 rounded-lg text-sm font-medium transition-all duration-300 
      ${category === "shopping"
                    ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                    : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"}`}
              >Shopping</button>

              <button
                onClick={() => setCategory("entertain")}
                className={`text-center px-1 overflow-scroll no-scrollbar h-16 w-1/5 rounded-lg text-sm font-medium transition-all duration-300 
      ${category === "entertain"
                    ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                    : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"}`}
              >Entertain</button>

              <button
                onClick={() => setCategory("health")}
                className={`text-center px-1 overflow-scroll no-scrollbar h-16 w-1/5 rounded-lg text-sm font-medium transition-all duration-300 
      ${category === "health"
                    ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                    : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"}`}
              >Health</button>

              <button
                onClick={() => setCategory("education")}
                className={`text-center px-1 overflow-scroll no-scrollbar h-16 w-1/5 rounded-lg text-sm font-medium transition-all duration-300 
      ${category === "education"
                    ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                    : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"}`}
              >Education</button>

              <button
                onClick={() => setCategory("other")}
                className={` text-center px-1 overflow-scroll no-scrollbar h-16 w-1/5 rounded-lg text-sm font-medium transition-all duration-300 
      ${category === "other"
                    ? "bg-white text-[#4035a0] border-2 border-[#422fee]"
                    : "text-[#a5a39c] border-[1.5px] border-gray-600 hover:text-white"}`}
              >Other</button>
            </div>
          </section>

          {/* Payment section */}

          <section className="payment px-6 mt-1.5">
            <div className="flex gap-6 w-full">
              <div className="flex w-full flex-col">
                <label className='text-[#aaaaa7] font-semibold whitespace-nowrap'>Payment Method</label>
                <select
                  className='bg-[#30302e] border-[1.5px] mt-1 h-9 w-full min-w-0 border-[#494945] rounded-lg px-2 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6] font-semibold text-white placeholder-[#686867]'
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}>
                  <option value="UPI">UPI</option>
                  <option value="Cash">Cash</option>
                  <option value="Credit card">Credit card</option>
                  <option value="Debit card">Debit card</option>
                  <option value="Net Banking">Net Banking</option>
                </select>
              </div>

              <div className="flex w-full flex-col">
                <label className='text-[#aaaaa7] font-semibold'>Wallet/account</label>
                <select 
                  className='bg-[#30302e] border-[1.5px] mt-1 h-9 w-full min-w-0 border-[#494945] rounded-lg px-2 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6] font-semibold text-white placeholder-[#686867]'
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}>
                  <option value="Main account">Main account</option>
                  <option value="Savings account">Savings account</option>
                  <option value="Salary account">Salary account</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </section>

          <div className="flex flex-col px-6 mt-2">
            <label className='text-[#aaaaa7] font-semibold' htmlFor="amount">Notes (optional)</label>
            <input
              className='border-[1.5px] mt-1 h-9 w-full border-[#494945] rounded-lg pl-2 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_6px_#3b82f6] text-white placeholder:text-[#686867]'
              type="text"
              placeholder='Any extra detail'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}/>
          </div>

          <div className="flex gap-6 justify-center px-6 mt-4">
            <button
              className='w-1/5 border-[1.5px] rounded-lg font-semibold text-white h-10 border-[#80807a] hover:bg-[#272726] duration-300 cursor-pointer'
              onClick={() => { setCategory("food"), setTransType("expense"), setAmount(""), setDate(""), setTitle(""), setPayment("UPI"), setAccount("Main account"), setNotes("") }}>
              Cancel
            </button>

            <button 
              className='w-1/2 border-[1.5px] rounded-lg font-semibold text-white h-10 border-[#80807a] hover:bg-[#272726] duration-300 cursor-pointer'
              onClick={() => {setAmount(amount), setDate(date), setTitle(title), setPayment(payment), setAccount(account), setNotes(notes), console.log(amount), handleSubmit(), console.log(date),console.log(title) , console.log(payment), console.log(account), console.log(notes), console.log(category), console.log(transType)}}>
              Save expense →
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddExpense