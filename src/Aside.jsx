import React from "react";
import "./Aside.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Aside = () => {
    
  return (
    <aside>
      <h3> Choose A Class By Start Date </h3>
      <button className="sort-button">Sort Ascending By Year</button>
      <ul>
        <li>
          <NavLink to="/" className="cohort-NavLink" activeclassname="activeLink">
            All Students
          </NavLink>
        </li>
        <li>
          <NavLink to="/Winter2026" className="cohort-NavLink" activeclassname="activeLink">
            Winter 2026
          </NavLink>
        </li>
        <li>
          <NavLink to="/Spring2026" className="cohort-NavLink" activeclassname="activeLink">
            Spring 2026
          </NavLink>
        </li>
        <li>
          <NavLink to="/Summer2026" className="cohort-NavLink" activeclassname="activeLink">
            Summer 2026               
          </NavLink>
        </li>
        <li>
          <NavLink to="/Fall2026" className="cohort-NavLink" activeclassname="activeLink">
            Fall 2026
          </NavLink>
        </li>
        <li>
          <NavLink to="/Winter2025" className="cohort-NavLink" activeclassname="activeLink">
            Winter 2025
          </NavLink>
        </li>
        <li>
          <NavLink to="/Spring2025" className="cohort-NavLink" activeclassname="activeLink">
            Spring 2025
          </NavLink>
        </li>
        <li>
          <NavLink to="/Summer2025" className="cohort-NavLink" activeclassname="activeLink">
            Summer 2025
          </NavLink>
        </li>
        <li>
          <NavLink to="/Winter2025" className="cohort-NavLink" activeclassname="activeLink">
            Winter 2025
          </NavLink>
        </li>
      </ul>
      <div className="about-section">
        <NavLink to="/about" className="about-NavLink">
          <p>About the Developers</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
