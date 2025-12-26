import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/expenses" className={location.pathname === '/expenses' ? 'active' : ''}>
        Expenses
      </Link>
      <Link to="/expenses/add" className={location.pathname === '/expenses/add' ? 'active' : ''}>
        Add Expense
      </Link>
      <Link to="/expenses/stats" className={location.pathname === '/expenses/stats' ? 'active' : ''}>
        Statistics
      </Link>
    </nav>
  );
}

export default NavBar;