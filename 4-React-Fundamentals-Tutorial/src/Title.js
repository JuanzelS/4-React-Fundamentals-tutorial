import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle">San Francisco's Privately Owned Public Spaces</div>
      <nav className="Title-Nav">
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
          to="/">List</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
          to="/about">About</NavLink>
      </nav>
    </div>
  );
}

export default Title;
