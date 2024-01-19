const URL = import.meta.env.VITE_BASE_API_URL

export function formatBirthDate(inputDate) {
    const [month, day, year] = inputDate.split('/').map(Number);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const formattedDate= `${monthNames[month - 1]} ${day}, ${year}`;
    return formattedDate;
  }
  
  export function onTrackChecker({codewars:{current:{total}}, certifications:{resume,linkedin,github,mockInterview}}) {
    if(total >850 && resume && linkedin && mockInterview && github){
      return true
    }else{
      return false
    }
  }

  export function addComment(students,id,commentObject){
    const updatedStudents = [...students]
    const studentIndex = updatedStudents.findIndex(student=> student.id === id)
    updatedStudents[studentIndex].notes.push(commentObject)
    const options = {
      method: "PUT",
      body: JSON.stringify(updatedStudents[studentIndex]),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`${URL}/${id}`, options)
    .then((response) => {
      return response.json();
    })
    .catch((error)=>{
        console.log(error)
    })
  }
