import Student from "./Student.jsx"
import { useParams } from "react-router-dom"
export default function StudentList({students, isDarkMode}){
    const {cohort} = useParams()

    let filteredStudents = students
    const readableCohortName = cohort ? `${cohort.slice(0,-4)} ${cohort.slice(-4)}`:"All Students"
    if(cohort){
        filteredStudents = students.filter(student=>student.cohort.cohortCode === cohort)
    }
    return (
        <ul className={`student-list ${isDarkMode ? 'dark-mode' : ''}`}>
            <h1>{readableCohortName}</h1>
            <h2>Total Students: {filteredStudents.length}</h2>
            {filteredStudents.map(student=><Student student={student} key={student.id}/>)}
        </ul>
    )
}