import Student from "./Student.jsx"
export default function StudentList({students}){

    return (
        <ul className="student-list">
            {students.map(student=><Student student={student} key={student.id}/>)}
        </ul>
    )
}