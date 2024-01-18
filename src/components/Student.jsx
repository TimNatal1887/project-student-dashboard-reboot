import React from "react";
import "./Student.css";
import { Link } from "react-router-dom";

export function formatBirthDate(inputDate) {
  const [month, day, year] = inputDate.split('/').map(Number);
  const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];
  const formattedDate= `${monthNames[month - 1]} ${day}, ${year}`;
  return formattedDate;
}

export function onTrackChecker({codewars:{current:{total}}, certifications:{resume,linkedin,github,mockInterview}}) {
  if(total >850 && resume && linkedin && mockInterview && github){
    return true
  }else{
    return false
  }
}
const Student = ({ student }) => {
    const fullName = `${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`
    const birthday = formatBirthDate(student.dob)

    return (
      <Link to={`/students/student/${student.id}`} className="student-detail-link">
        <li className="componentContainer">
            <img src ={student.profilePhoto} className="thumbnail" alt= "Student Thumbnail"></img>
            <div className ="student-info" >
                    <p>{fullName}</p>
                    <p>{student.username}</p>
                    <p>{birthday}</p>
            </div>
            { onTrackChecker(student) && <p className="onTrack">On track to Graduate </p> }
        </li>

      </Link>
    )
}

export default Student