import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import Stats from './pages/Stats';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/expenses" replace />} />
            <Route path="/expenses" element={<Home />} />
            <Route path="/expenses/add" element={<AddExpense />} />
            <Route path="/expenses/stats" element={<Stats />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;