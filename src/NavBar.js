import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-link-container">
        <NavLink exact to="/" className="nav-link" activeClassName="active-nav-link">
          Home
        </NavLink>
        <NavLink exact to="/admin-login" className="nav-link" activeClassName="active-nav-link">
          Admin Login
        </NavLink>
        <NavLink exact to="/student-login" className="nav-link" activeClassName="active-nav-link">
          Student Login
        </NavLink>
        <NavLink exact to="/admin-dashboard" className="nav-link" activeClassName="active-nav-link">
          Admin Dashboard
        </NavLink>
        <NavLink exact to="/conduct-quiz" className="nav-link" activeClassName="active-nav-link">
          Conduct Quiz
        </NavLink>
        <NavLink exact to="/view-results" className="nav-link" activeClassName="active-nav-link">
          View Results
        </NavLink>
        <NavLink exact to="/play-quiz" className="nav-link" activeClassName="active-nav-link">
          Play Quiz
        </NavLink>
        <NavLink exact to="/performance" className="nav-link" activeClassName="active-nav-link">
          Performance
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
