import { useEffect, useState } from "react";
import { useParams } from "react-router"
type Alldescription= {
    math: string[];
    science: string[];
    english: string[];
    history: string[];
}
type student={
  fullName:string,
  email:string,
  phone:string,
  course:string,
  id:string
}
const CourseDetails = () => {
    const [studentList,setList]=useState<student[]>([])
    useEffect(()=>{
      const storedList=localStorage.getItem('studentList')
      if(storedList){
        setList(JSON.parse(storedList))
      }
    },[])
      const {id}=useParams()
const Alldescription:Alldescription={math:['Algebra', 'Geometry', 'Calculus']
    ,science:['Physics', 'Chemistry', 'Biology']
    ,english:['Literature', 'Writing', 'Grammar'],history:['World History', 'Civilizations', 'Events']
}
const courseStudents=studentList.filter(student=>student.course.toLowerCase()===id)
if (!id || !(id in Alldescription)) {
  return <p>No description</p>;
}
  return (
    <div className="sm:text-2xl w-full max-w-6xl  p-10 flex flex-col gap-4 ">
       <h1 >
  Course Description:
  </h1>
<ul className=" flex w-2/3 justify-between">
{Alldescription[id as keyof Alldescription].map((desc,i)=><li key={i}>{desc}</li>)}</ul>
<div><h1 className="border-b font-semibold pb-2">List of Enrolled Students</h1>
<ol className="list-decimal pl-4 pt-2">{courseStudents.map((student:student)=><li key={student.id}> {student.fullName}</li>)}</ol>
</div>

    </div>
  )
}

export default CourseDetails