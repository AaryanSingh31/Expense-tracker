import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const CatBudContext = createContext();

export const CatBudProvider = ({ children }) => {
  const [catBudget, setCatBudget] = useState(() => {
  const saved = localStorage.getItem("catBudget");
  return saved ? JSON.parse(saved) : 0
});

useEffect(() => {
  localStorage.setItem("catBudget", JSON.stringify(catBudget));
}, [catBudget]);

  return (
    <CatBudContext.Provider value={{ catBudget, setCatBudget }}>
      {children}
    </CatBudContext.Provider>
  );
};

export const useCatBudget = () => {
  return useContext(CatBudContext);
};