import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
type user={
  fullName:string,
  email:string,
  phone:string,
  course:string,
  id:string

}
const Confirmation = () => {
  const location=useLocation()
  const data=location.state;
  const navigate=useNavigate()
  const [student,setStudent]=useState<user| null>(null)
  const [studentList,setStudentList]=useState<user[]>([])

 useEffect(()=>{
  if(location.state){
    setStudent(location.state)
  }
  else{
const stored=localStorage.getItem('studentForm')
 if(stored){
    setStudent(JSON.parse(stored))
  }
  }
const storedList=localStorage.getItem('studentList')
 
  if(storedList && storedList!=='undefined'){
      setStudentList(JSON.parse(storedList))}

 },[location.state])
 useEffect(()=>{
  
  localStorage.setItem('studentList',JSON.stringify(studentList))
 },[studentList])
 if(!student) return <p>Loading...</p>
 function onRegister(){
  if(!student) return 
  const studentWithID={...student,id:nanoid()}
  const updatedList=[...studentList,studentWithID]
setStudentList(updatedList)
alert(`Student ${student.fullName} registered successfully`)
localStorage.removeItem('studentForm')
navigate('/students',{replace:true}) 
}
  return (
    <div>
      
<div className="flex  flex-col justify-center sm:p-4 p-10 gap-4  text-md sm:text-2xl items-center ">
  <h1>Confirm Full Details</h1>
  <div className="flex flex-col gap-3 py-4">
  <h2>Full Name: {student.fullName}</h2>
<h2>Email Address: {student.email}</h2>
<h2>Phone: {student.phone}</h2>
<h2>Course: {student.course}</h2>

</div>
<div className="flex  justify-between gap-4 w-1/3 ">
<button 
onClick={()=>{navigate('/',{state:data})}}
className="border w-50 py-1 rounded-2xl"
>Edit</button>
<button className="border w-50 py-1 rounded-2xl"
onClick={onRegister}
> Register</button></div>
</div>
</div>
  )
}

export default Confirmation