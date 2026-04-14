import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import dummyExpenses from "../dummy/dummyExp";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
  const saved = localStorage.getItem("expenses");
  return saved ? JSON.parse(saved) : dummyExpenses;
});

useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  return useContext(ExpenseContext);
};