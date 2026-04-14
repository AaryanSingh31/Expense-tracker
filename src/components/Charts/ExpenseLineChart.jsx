import React from 'react'
import {
    Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useExpense } from "../../context/ExpenseContext";

function ExpenseLineChart() {
  const { expenses } = useExpense();  // Context se expenses array nikaal rahe hain

  const chartData = expenses.map((item) => ({
    date : item.date, // Date ko x-axis ke liye use karenge
    amount: item.amount // Amount ko y-axis ke liye use karenge

  }));
  console.log(chartData)

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}> {/* Makes chart responsive to screen size */}
         <LineChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>  {/* Main chart container with data + spacing */}
           <XAxis dataKey="date" stroke="#9CA3AF" tick={{ fill: "#D1D5DB" }} /> {/* Shows dates on horizontal axis */}
           <YAxis stroke="#9CA3AF" tick={{ fill: "#D1D5DB" }} /> {/* Shows amount scale on vertical axis */}
           <Tooltip contentStyle={{backgroundColor: "#1F2937",border: "none",borderRadius: "10px",color: "#fff"}}/> {/* Shows popup info on hover */}
           <Legend wrapperStyle={{ color: "#E5E7EB" }} />
           <Line type="monotone" dataKey="amount" stroke="#06B6D4" strokeWidth={4} dot={{ r: 4 }} activeDot={{ r: 7 }}/>  {/* Draws smooth line using amount data */}
         </LineChart>
       </ResponsiveContainer>
    </div>

  );
}

export default ExpenseLineChart;