import { useParams } from "react-router-dom"
export default function StudentDetails(){
    const {id} = useParams()
    console.log(id)
    console.log("Hi")
    return (
        <h1>hi im paul</h1>
    )
}