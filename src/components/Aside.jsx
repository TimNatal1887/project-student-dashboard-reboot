import React from "react";
import "./Aside.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Aside = () => {
    const [toggleAscend, setToggleAscend] = useState(false)
    const [cohortList, setCohortList] = useState(["All Students","Winter 2026","Spring 2026", "Summer 2026", "Fall 2026", "Winter 2025", "Spring 2025", "Summer 2025", "Fall 2025"])
    
    function handleAscend(){
        setToggleAscend(!toggleAscend)
        if(!toggleAscend){
            const sortedCohortList = cohortList.sort((a, b) => {
                if (a === "All Students") return -1;
                if (b === "All Students") return 1;
                const yearA = parseInt(a.match(/\d+/));
                const yearB = parseInt(b.match(/\d+/));
              
                return yearA - yearB;
              });
              setCohortList(sortedCohortList)
        }else{
            const sortedCohortList = cohortList.sort((a, b) => {
                if (a === "All Students") return -1;
                if (b === "All Students") return 1;
                const yearA = parseInt(a.match(/\d+/));
                const yearB = parseInt(b.match(/\d+/));
              
                return yearB - yearA;
              });
              setCohortList(sortedCohortList)
        }
    }
  return (
    <aside>
      <h3> Choose A Class By Start Date </h3>
      <button onClick={handleAscend} className={`sort-button ${toggleAscend ? "descending":"ascending"}`}>Sort {toggleAscend ? "Descending":"Ascending"} By Year</button>
      <ul>
        {cohortList.map(cohort=>{
          const cohortPath = cohort.slice(0,-5) + cohort.slice(-4)
          if(cohort === "All Students"){
            return (
              <li key={cohort}>
                <NavLink to="/" className="cohort-NavLink" activeclassname="activeLink" key={cohort}>
                  All Students
                </NavLink>
              </li>
            )
          }else{
            return (
              <li key={cohort}>
                <NavLink to={`/cohort/${cohortPath}`} className="cohort-NavLink" activeclassname="activeLink" key={cohort}>
                  {cohort}
                </NavLink>
              </li> 
            )
          }
        })}
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
