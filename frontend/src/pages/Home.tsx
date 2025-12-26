import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Expense, api } from '../api/expenses';

function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      const data = await api.getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error('Error loading expenses:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteExpense(id);
      setExpenses(expenses.filter(exp => exp._id !== id));
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <div className="expenses-list">
      <div className="header">
        <h1>Expenses</h1>
        <Link to="/expenses/add" className="add-button">Add New</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id}>
              <td>{expense.title}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(expense._id!)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;