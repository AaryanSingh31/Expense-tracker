import { createContext, useContext, useState, useEffect } from "react";

const CatBudContext = createContext();

export const CatBudProvider = ({ children }) => {
  const [catBudgets, setCatBudgets] = useState(() => {
    const saved = localStorage.getItem("catBudgets");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "catBudgets",
      JSON.stringify(catBudgets)
    );
  }, [catBudgets]);

  const addCategoryBudget = (category, budget) => {
    const newBudget = {
      id: crypto.randomUUID(),
      category,
      budget: Number(budget),
    };

    setCatBudgets((prev) => [...prev, newBudget]);
  };

  return (
    <CatBudContext.Provider
      value={{
        catBudgets,
        addCategoryBudget,
      }}
    >
      {children}
    </CatBudContext.Provider>
  );
};

export const useCatBudget = () => {
  return useContext(CatBudContext);
};