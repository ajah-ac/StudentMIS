import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

type student = {
  fullName: string,
  email: string,
  phone: string,
  course: string,
  id: string
}
const Students = () => {
  const navigate = useNavigate()
  const [studentList, setList] = useState<student[]>([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    const storedList = localStorage.getItem('studentList')
    if (storedList) {
      setList(JSON.parse(storedList))
    }
  }, [])

  const removeStudent=(id: string)=>{
    const filtered = studentList.filter(s => s.id !== id)
    alert('Student Removed successfully')
    setList(filtered)
    localStorage.setItem('studentList', JSON.stringify(filtered))
  }
  const filteredStudents = studentList
    .filter(x => x.fullName.toLowerCase().includes(search))
   
const studentsPerCourse=studentList.reduce((acc:{[key:string]:number},student)=>{
  const course=student.course;
  acc[course]=(acc[course] || 0)+1
  console.log(acc)
  return acc
},{} )

  return (
    <>
      <div>    <input type="text"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        placeholder="Search for a student" />
      </div>
      {filteredStudents.length === 0 ? (<p>No student found with Name:{search}</p>) : (

        <StudentsTable
          removeStudent={removeStudent}
          studentList={filteredStudents} />)}

      <div> <h1>Total Students:{studentList.length}</h1>

  <div className="border p-4 rounded shadow">
    <h3 className="font-bold">Students per Course</h3>
    {Object.entries(studentsPerCourse).map(([course, count]) => (
      <p key={course}>
        {course}: {count}
      </p>
    ))}
  </div>
      </div>
      <button onClick={() => navigate('/course')}>View Course</button>
    </>
  )
}

type Props = {
  studentList: student[],
  removeStudent: (id: string) => void
}
export default Students
const StudentsTable = ({ studentList, removeStudent }: Props) => {
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
            <td><button onClick={() => removeStudent(student.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};