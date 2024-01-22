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
  const [isDarkMode, setDarkMode ] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  return (
    <div className={`wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header isDarkMode={ isDarkMode }/>
      <div className={`button-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className="dark-mode-button" onClick={ toggleDarkMode }> {isDarkMode ? "Light Mode" : "Dark Mode"} </button>
      </div>
      <div className={`student-info-body ${isDarkMode ? 'dark-mode' : ''}`}>
        <Aside isDarkMode={ isDarkMode }/>
        <Routes>
          <Route path="/">
            <Route index element={<StudentList students={students} isDarkMode={ isDarkMode }/>}/>
            <Route path="cohort/:cohort" element={<StudentList students={students} isDarkMode={ isDarkMode }/>} />
            <Route path="student/:id" element={<StudentDetails students={students} isDarkMode={ isDarkMode }/>} />
          </Route>
          <Route path="/about" element={<About isDarkMode={ isDarkMode }/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
