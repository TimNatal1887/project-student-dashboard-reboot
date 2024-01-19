import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Aside from "./components/Aside";
import StudentDetails from "./components/StudentDetails";

const URL = import.meta.env.VITE_BASE_API_URL

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(URL)
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
