import { useEffect, useState } from "react";
import Header from "./Header";
import { Routes,Route } from "react-router-dom";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5001/api/students")
    .then((response)=> response.json())
    .then((data)=>{
      setStudents(data)
    })

  },[])
  return (
    <div className="wrapper">
      <Header />
      <div className="student-info-body">
      <Routes>
        <Route 
        path="/"
        element={<StudentList students={students}/>}
        />
      </Routes>
      </div>
    </div>
  );
}

export default App;
