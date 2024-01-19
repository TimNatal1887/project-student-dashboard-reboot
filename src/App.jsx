import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Aside from "./components/Aside";
import StudentDetails from "./components/StudentDetails";
import About from "./components/About";

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
          <Route path="/">
            <Route index element={<StudentList students={students}/>}/>
            <Route path="cohort/:cohort" element={<StudentList students={students} />} />
            <Route path="student/:id" element={<StudentDetails students={students} />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
