import { useParams} from "react-router-dom";
import { useState } from "react";
import { addComment } from "../helpers/helpers";

export default function NotesForm({students,student,isDarkMode}){
    const {id} = useParams();
    const [newComment, setNewComment] = useState({
        commenter:"author",
        comment:"comment"
      })
  
      function handleChange(e){
        setNewComment({
          ...newComment,
          [e.target.id]:e.target.value
        })
      }
  
      function handleSubmit(event) {
        event.preventDefault();
        addComment(students,id,newComment)
        .then(()=>{
          setNewComment({
                commenter:"author",
                comment:"comment"
          })
        })
        .catch((error)=>{
          console.error(error)
        })
      }
  
    return (
        <form onSubmit={handleSubmit} className={`comment-form ${isDarkMode ? 'dark-mode' : ''}`}>
            <h2>1:1 Notes</h2>
            <label htmlFor="commenter">
                <input onChange={handleChange} value={newComment.commenter} type="text" name="commenter" id="commenter" />
            </label>
            <label htmlFor="comment">
                <input onChange={handleChange} value={newComment.comment} type="text" name="comment" id="comment" />
            </label>
            <button className={`comment-form-button ${isDarkMode ? 'dark-mode' : ''}`}>Submit</button>
            <h2>Comments</h2>
            <ul className={`comment-list ${isDarkMode ? 'dark-mode' : ''}`}>
                {student.notes.map((note,index)=>{
                    return(
                        <li key={note.commenter + index} className={`comment-list-item ${isDarkMode ? 'dark-mode' : ''}`}>
                            <p className={`student-comment ${isDarkMode ? 'dark-mode' : ''}`} >{note.commenter} says: {note.comment}</p>
                        </li>
                    )
                })}
            </ul>
        </form>
    )
}