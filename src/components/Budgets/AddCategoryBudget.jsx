import React from 'react'
import { useState } from 'react'
import { useCatBudget } from "../../context/CatBudContext";

function AddCategoryBudget({ onClose }) {

  const [catType, setCatType] = useState("Exist")
  const [selected, setSelected] = useState("Entertainment")

  const { catBudget, setCatBudget } = useCatBudget();
  const [inputBud, setInputBud] = useState(catBudget);

  const categories = [
    {
      name: "Entertainment",
      amount: "₹1,980 spent this month",
      icon: "🎬",
    },
    {
      name: "Health",
      amount: "₹0 spent this month",
      icon: "🏥",
    },
    {
      name: "Education",
      amount: "₹450 spent this month",
      icon: "📚",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-[#1c1c1c] w-100 p-6 rounded-2xl border border-white/10 z-10">

        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h2 className="text-white text-lg font-semibold">
              Add category budget
            </h2>

            <h2 className="text-[#cbcac4]">
              Quick-add a limit for an untracked category
            </h2>
          </div>

          <button onClick={onClose} className="text-white/60 cursor-pointer hover:text-white">
            ✕
          </button>
        </div>

        <div className="Trans-type flex justify-center mt-2 px-2">
          <button
            onClick={() => setCatType("Exist")}
            className={`px-6 py-2 w-56 rounded-l-lg text-sm font-medium transition-all border-r-0 duration-300 cursor-pointer 
      ${catType === "Exist"
                ? "bg-[#30302E] text-[#3C3C7F] border-[1.5px] border-gray-600 border-r-0"
                : "text-[#cbcac4] border-[1.5px] border-gray-600 hover:text-white"}`}
          >
            Pick Existing
          </button>

          <button
            onClick={() => setCatType("Custom")}
            className={`px-6 py-2 w-56 rounded-r-lg text-sm font-medium transition-all border-l-0 duration-300 cursor-pointer
      ${catType === "Custom"
                ? "bg-[#30302E] text-[#3C3C7F] border-[1.5px] border-gray-600 border-l-0"
                : "text-[#cbcac4] border-[1.5px] border-gray-600 hover:text-white"}`}
          >
            Custom Category
          </button>
        </div>

        {catType === "Exist" ? (
          <div>
            {/* Existing category UI */}
            <h2 className='text-[#cbcac4] mt-3'>Unbudgeted categories</h2>

            <div className="category-list">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="category-card bg-[#262624] p-2 m-2 rounded-lg border-[1.5px] border-gray-600 cursor-pointer flex justify-between"
                  onClick={() => setSelected(cat.name)}
                >
                  <div className="left flex gap-1">
                    <span className="mt-2.5 text-xl">{cat.icon}</span>

                    <div>
                      <h4 className='text-white'>{cat.name}</h4>
                      <p className='text-[#cbcac4]'>{cat.amount}</p>
                    </div>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-3.5 ${selected === cat.name
                        ? "border-violet-500 bg-white"
                        : "border-gray-500 bg-[#30302E]"
                      }`}
                  >
                    {selected === cat.name && (
                      <div className="w-2.5 h-2.5 rounded-full bg-violet-500 mt-px"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-[#cbcac4] mx-2 mb-1 text-xs">Set limit for selected category (₹)</h3>

            <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-84 p-2 mx-2 rounded-lg bg-white/5 border border-white/10 text-white mb-4"
                    value={inputBud}
                    onChange={(e) => setInputBud(e.target.value)}
                />

          </div>
        ) : (
          <div>
            {/* Custom category UI */}
            <input
              type="text"
              placeholder="Enter category name"
            />
          </div>
        )}

        <div className="flex justify-between m-2 gap-2">
          <button
            onClick={onClose}
            className="px-7 py-1 bg-white/10 border-[1.5px] border-gray-600 rounded-lg text-white cursor-pointer hover:bg-white/20 duration-300"
          >
            Cancel
          </button>

          <button
            onClick={() => {
                            if (!inputBud) return;
                            setCatBudget(Number(inputBud));
                            onClose();
                        }}
            className="px-14 py-1 bg-white/10 border-[1.5px] border-gray-600 rounded-lg text-white cursor-pointer hover:bg-blue-500 duration-300"
          >
            Add Budget →
          </button>
        </div>

      </div>
    </div>
  )
}

export default AddCategoryBudget