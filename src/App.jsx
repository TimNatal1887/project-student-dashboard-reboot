import { useEffect, useState } from "react";
import Header from "./Header";
import { Routes,Route,Navigate } from "react-router-dom";
import StudentList from "./StudentList";
import Aside from "./Aside";

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
      <Aside />
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/students" />}/>
          <Route path="/students" element={<StudentList students={students}/>}>
            <Route path=":cohort" element={<StudentList students={students}/>}/>
            {/* <Route path=":id" element={<StudentDetails />}/> */}
          </Route>
        </Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
