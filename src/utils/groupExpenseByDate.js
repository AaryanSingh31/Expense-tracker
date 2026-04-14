//THIS FILE IS FOR ADDING THE AMOUTS IN CHARTS IF THE SPENDING DAY IS SAME.
import formatDate from "./formatDate";
const groupExpensesByDate = (expenses) => {
    const groupedExpenses = {};

    expenses.forEach((item) => {
        if(groupedExpenses[item.date]){
            groupedExpenses[item.date] += Number(item.amount); // Agar date pe pehle se amount hai toh usme current amount add kar do
        }else {
            groupedExpenses[item.date] = Number(item.amount); // Nahi toh naya entry banao us date ke liye
            }
    });
    // Ab groupedExpenses ek object hai jisme keys date hain aur values total amount hain. Hume isko array of objects me convert karna hai jisme har object me date aur amount ho.
    return Object.entries(groupedExpenses).map(([date, amount]) => (
        {
            date: formatDate(date),
            amount: groupedExpenses[date]
        }
    )); // Object ko array of objects me convert kar rahe hain jisme date aur total amount hoga 
}

export default groupExpensesByDate;