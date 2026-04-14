import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import dummyBudget from "../dummy/dummyBud";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(() => {
  const saved = localStorage.getItem("budget");
  return saved ? JSON.parse(saved) : dummyBudget
});

useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(budget));
}, [budget]);

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  return useContext(BudgetContext);
};