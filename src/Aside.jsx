import React from "react" 

// Include: 
//  STUDENT LIST COUNT: # of students in the displayed cohort

const Aside = () => {
    return (
        <aside>
        <h3> Choose A Class By Start Date </h3>
        <button className= "sort-button">Sort Ascending By Year</button>
        <ul>
            <li>All Students</li>
            <li>Winter 2026</li>
            <li>Spring 2026</li>
            <li>Summer 2026</li>
            <li>Fall 2026</li>
            <li>Winter 2025</li>
            <li>Spring 2025</li>
            <li>Summer 2025</li>
            <li>Winter 2025</li>
        </ul>
        </aside>
    )
 }

 export default Aside