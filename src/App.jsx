import { useEffect, useState } from "react";
import Header from "./Header";

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
    </div>
  );
}

export default App;
