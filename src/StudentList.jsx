import Student from "./Student.jsx"
export default function StudentList({students}){

    return (
        <ul>
            {students.map(student=><Student student={student} key={student.id}/>)}
        </ul>
    )
}