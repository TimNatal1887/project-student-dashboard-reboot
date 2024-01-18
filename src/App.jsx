import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import StudentList from "./StudentList";
import Aside from "./Aside";
import StudentDetails from "./StudentDetails";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="student-info-body">
        <Aside />
        <Routes>
          <Route path="/" element={<Navigate to="/students" replace/>} />
          <Route path="/students">
            <Route index element={<StudentList students={students}/>}/>
            <Route path="cohort/:cohort" element={<StudentList students={students} />} />
            <Route path="student/:id" element={<StudentDetails students={students} />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
