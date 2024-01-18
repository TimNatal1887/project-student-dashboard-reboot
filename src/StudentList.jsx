import Student from "./Student.jsx"
import { useParams } from "react-router-dom"
export default function StudentList({students}){
    const {cohort} = useParams()
    let filteredStudents = students
    if(cohort){
        filteredStudents = students.filter(student=>student.cohort.cohortCode === cohort)
    }
    console.log(filteredStudents)
    return (
        <ul className="student-list">
            {filteredStudents.map(student=><Student student={student} key={student.id}/>)}
        </ul>
    )
}