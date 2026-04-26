import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

type student={
  fullName:string,
  email:string,
  phone:string,
  course:string,
  id:string
}
const Students = () => {
  const navigate=useNavigate()
const [studentList,setList]=useState<student[]>([])
useEffect(()=>{
  const storedList=localStorage.getItem('studentList')
  if(storedList){
    setList(JSON.parse(storedList))
  }
},[])
  return (
    <>
   <StudentsTable studentList={studentList}/>
   <h1>Total Students:{studentList.length}</h1>
  <button onClick={()=>{navigate('/course')}}>View Course</button>
 </>
  )
}

export default Students
const StudentsTable = ({ studentList }: { studentList: student[] }) => {
  return (
    <table border={1} cellPadding={10}>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Course</th>
        </tr>
      </thead>

      <tbody>
        {studentList.map((student) => (
          <tr key={student.id}>
            <td>{student.fullName}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>{student.course}</td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};