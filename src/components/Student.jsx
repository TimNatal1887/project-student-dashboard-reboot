import React from "react";
import "./Student.css";
import { Link } from "react-router-dom";
import { formatBirthDate, onTrackChecker } from "../helpers/helpers";
const Student = ({ student, isDarkMode }) => {
    const fullName = `${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`
    const birthday = formatBirthDate(student.dob)
  
    return (
      <Link to={`/student/${student.id}`} className={`student-detail-link ${isDarkMode ? 'dark-mode' : ''}`}>
        <li className={`componentContainer ${isDarkMode ? 'dark-mode' : ''}`}>
            <img src ={student.profilePhoto} className="thumbnail" alt= "Student Thumbnail"></img>
            <div className ={`student-info ${isDarkMode ? 'dark-mode' : ''}`} >
                    <p>{fullName}</p>
                    <p>{student.username}</p>
                    <p>{birthday}</p>
            </div>
            { onTrackChecker(student) && <p className={`onTrack ${isDarkMode ? 'dark-mode' : ''}`}>On track to Graduate </p> }
        </li>

      </Link>
    )
}

export default Student