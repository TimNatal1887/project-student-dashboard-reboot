import { useParams } from "react-router-dom"
import { formatBirthDate, onTrackChecker } from "./Student"

export default function StudentDetails({ students }){
    const {id} = useParams()

    if(students.length === 0) return null
    
    const studentInfo = students.find((student) => id === student.id)
    const birthday = formatBirthDate(studentInfo.dob)
    const fullName = `${studentInfo.names.preferredName} ${studentInfo.names.middleName} ${studentInfo.names.surname}`
    const {current, goal} = studentInfo.codewars 
    const {scores} = studentInfo.cohort
    const {certifications} = studentInfo
    return (
        <div>
            <div>
                <img src= {studentInfo.profilePhoto} alt="Student Thumbnail"></img>
                <p>{fullName}</p>
                <p>{studentInfo.username}</p>
                <p>{birthday}</p>
                { onTrackChecker(studentInfo) && <p className="onTrack">On track to Graduate </p> }
            </div>
            <table>
      <thead>
        <tr>
          <th>CodeWars</th>
          <th>Scores</th>
          <th>Certifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Current Total: {current.total}</td>
          <td>Cell 1,2</td>
          <td>Cell 1,3</td>
        </tr>
        <tr>
          <td>Cell 2,1</td>
          <td>Cell 2,2</td>
          <td>Cell 2,3</td>
        </tr>
        <tr>
          <td>Cell 3,1</td>
          <td>Cell 3,2</td>
          <td>Cell 3,3</td>
        </tr>
        <tr>
          <td>Cell 4,1</td>
          <td>Cell 4,2</td>
          <td>Cell 4,3</td>
        </tr>
      </tbody>
    </table>
            <form>
            </form>

        </div>
        

    )
}