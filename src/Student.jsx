import React from "react";

const Student = ({ student }) => {
    const fullName = `${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`
    
    function formatBirthDate(inputDate) {
        const [month, day, year] = inputDate.split('/').map(Number);
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const formattedDate= `${monthNames[month - 1]} ${day}, ${year}`;
        return formattedDate;
    }

    function onTrackChecker({codewars:{current:{total}}, certifications:{resume,linkedin,github,mockInterview}}) {
        if(total >850 && resume && linkedin && mockInterview && github){
          return true
        }else{
          return false
        }
      }

    const birthday = formatBirthDate(student.dob)

    return (
        <div>
            <h2>

                <img src ={student.profilePhoto}></img>
                { onTrackChecker(student) && <p>On track to Graduate </p> }
                {fullName}
                {student.userName}
                {birthday}
            </h2>
        </div>
    )
}

export default Student