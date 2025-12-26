export interface Expense {
  _id?: string;
  title: string;
  amount: number;
  date: Date;
  category: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = {
  async getExpenses(): Promise<Expense[]> {
    const response = await fetch(`${API_URL}/expenses`);
    return response.json();
  },

  async createExpense(expense: Omit<Expense, '_id'>): Promise<Expense> {
    const response = await fetch(`${API_URL}/expenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    });
    return response.json();
  },

  async updateExpense(id: string, expense: Partial<Expense>): Promise<Expense> {
    const response = await fetch(`${API_URL}/expenses/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    });
    return response.json();
  },

  async deleteExpense(id: string): Promise<void> {
    await fetch(`${API_URL}/expenses/${id}`, {
      method: 'DELETE',
    });
  },
};