import React, { useState } from 'react';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);

  const addExpense = () => {
    if (description && amount && category) {
      const newExpense = {
        id: Date.now(),
        description: description,
        amount: parseFloat(amount),
        category: category
      };
      setExpenses([...expenses, newExpense]);
      setTotalExpense(totalExpense + parseFloat(amount));
      setDescription('');
      setAmount('');
      setCategory('');
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <button onClick={addExpense}>Add Expense</button>
      <div>
        <h2>Expenses</h2>
        <ul>
          {expenses.map(expense => (
            <li key={expense.id}>
              <span>{expense.description}</span>
              <span>${expense.amount}</span>
              <span>{expense.category}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Total Expenses: ${totalExpense.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default ExpenseTracker;
