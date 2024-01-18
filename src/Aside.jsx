import React from "react";
import "./Aside.css";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <aside>
      <h3> Choose A Class By Start Date </h3>
      <button className="sort-button">Sort Ascending By Year</button>
      <ul>
        <li>
          <NavLink exact to="/" className="cohort-NavLink" activeClassName="activeLink">
            All Students
          </NavLink>
        </li>
        <li>
          <NavLink to="/Winter2026" className="cohort-NavLink" activeClassName="activeLink">
            Winter 2026
          </NavLink>
        </li>
        <li>
          <NavLink to="/Spring2026" className="cohort-NavLink" activeClassName="activeLink">
            Spring 2026
          </NavLink>
        </li>
        <li>
          <NavLink to="/Summer2026" className="cohort-NavLink" activeClassName="activeLink">
            Summer 2026               
          </NavLink>
        </li>
        <li>
          <NavLink to="/Fall2026" className="cohort-NavLink" activeClassName="activeLink">
            Fall 2026
          </NavLink>
        </li>
        <li>
          <NavLink to="/Winter2025" className="cohort-NavLink" activeClassName="activeLink">
            Winter 2025
          </NavLink>
        </li>
        <li>
          <NavLink to="/Spring2025" className="cohort-NavLink" activeClassName="activeLink">
            Spring 2025
          </NavLink>
        </li>
        <li>
          <NavLink to="/Summer2025" className="cohort-NavLink" activeClassName="activeLink">
            Summer 2025
          </NavLink>
        </li>
        <li>
          <NavLink to="/Winter2025" className="cohort-NavLink" activeClassName="activeLink">
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
