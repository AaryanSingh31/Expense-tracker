import React from "react";
import {
  Pie,
  PieChart,
  Cell,
  Sector,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useExpense } from "../../context/ExpenseContext";
import groupExpensesByCategory from "../../utils/groupExpensesByCategory";

function ExpensePieChart() {
  const { expenses } = useExpense();
  const groupedExpenses = groupExpensesByCategory(expenses);
  const COLORS = [
    "#06B6D4",
    "#8B5CF6",
    "#F59E0B",
    "#10B981",
    "#EF4444",
    "#3B82F6",
    "#F97316",
    "#EC4899",
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <Pie
            data={groupedExpenses}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}  // donut shape — hover effect acha lagta hai
            paddingAngle={3}  // slices ke beech gap
            activeShape={{outerRadius : 110}}
            fill="#06B6D4"
            label={({ name, amount }) => `${name}: ₹${amount}`}
            labelLine={true}
          >
            {groupedExpenses.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => {
                const total = groupedExpenses.reduce((sum, item) => sum + item.amount, 0);
                const percent = ((value/total) *100).toFixed(1);
                return [`${percent}%`, name];
            }}
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
            }}
          />
          <Legend wrapperStyle={{ color: "#E5E7EB" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensePieChart;
