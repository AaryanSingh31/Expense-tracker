import React from 'react'

function AddCategoryBudget({onClose}) {
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

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-white mb-4"
        />

        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose}
            className="px-3 py-1 bg-white/10 rounded-lg text-white cursor-pointer hover:bg-white/20 duration-300"
          >
            Cancel
          </button>

          <button 
            onClick={onClose}
            className="px-3 py-1 bg-blue-600 rounded-lg text-white cursor-pointer hover:bg-blue-500 duration-300"
          >
            Save Budget
          </button>
        </div>

      </div>
    </div>
  )
}

export default AddCategoryBudget