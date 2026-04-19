import React from 'react'
import {
    Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import groupExpensesByDate from '../../utils/groupExpenseByDate';
import formatDate from '../../utils/formatDate';
import { useExpense } from '../../context/ExpenseContext';
import '../../styles/charts.css'

function ExpenseBarChart() {
    const {expenses} = useExpense();

    const chartData = groupExpensesByDate(expenses);

  return (
    <div style={{ backgroundColor: "#1F2937", padding: "20px", borderRadius: "10px", outline: "none", border: "none" }}>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart barCategoryGap="20%" data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="date"  />
                <YAxis/>   
                <Tooltip cursor={{ fill: "transparent" }} contentStyle={{backgroundColor: "#1F2038",border: "none",borderRadius: "10px",color: "#fff" }}/>
                <Legend wrapperStyle={{ color: "#E5E7EB" }} />
                <Bar dataKey="amount" fill="#06B6D4" 
            radius={[8, 8, 0, 0]}/>         
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default ExpenseBarChart