import React, { useEffect, useState } from 'react';
import { api } from '../api/expenses';

interface ExpenseStats {
  totalAmount: number;
  categoryBreakdown: { [key: string]: number };
}

function Stats() {
  const [stats, setStats] = useState<ExpenseStats>({
    totalAmount: 0,
    categoryBreakdown: {}
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const expenses = await api.getExpenses();
      const categoryBreakdown = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
      }, {} as { [key: string]: number });

      const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

      setStats({
        totalAmount,
        categoryBreakdown
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  return (
    <div className="stats">
      <h1>Expense Statistics</h1>
      <div className="total-amount">
        <h2>Total Expenses</h2>
        <p>${stats.totalAmount.toFixed(2)}</p>
      </div>
      <div className="category-breakdown">
        <h2>Category Breakdown</h2>
        <ul>
          {Object.entries(stats.categoryBreakdown).map(([category, amount]) => (
            <li key={category}>
              <span>{category}:</span>
              <span>${amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stats;