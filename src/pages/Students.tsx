import { Trash } from "lucide-react"
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

  const removeStudent = (id: string) => {
    const filtered = studentList.filter(s => s.id !== id)
    alert('Student Removed successfully')
    setList(filtered)
    localStorage.setItem('studentList', JSON.stringify(filtered))
  }
  const filteredStudents = studentList
    .filter(x => x.fullName.toLowerCase().includes(search))

  const studentsPerCourse = studentList.reduce((acc: { [key: string]: number }, student) => {
    const course = student.course;
    acc[course] = (acc[course] || 0) + 1
    console.log(acc)
    return acc
  }, {})

  return (
    <>
    <div className=" max-w-6xl flex justify-center  px-4  mt-10">

         <input type="text"
         className="px-10 outline-0  shadow-md py-4 text-lg w-full bg-gray-200 dark:bg-gray-800 rounded-4xl "
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        placeholder="Search for a student" />
            </div>

      {filteredStudents.length === 0 ? (<p>No student found with Name:{search}</p>) : (

        <StudentsTable
          removeStudent={removeStudent}
          studentList={filteredStudents} />)}

      <div className="border p-4 rounded shadow ">
        <h1 className="font-bold">Total Students:<span className="font-normal">
          {studentList.length}
        </span></h1>

        <div >
          <h3 className="font-bold underline">Students per Course</h3>
          {Object.entries(studentsPerCourse).map(([course, count]) => (
            <p key={course}>
              {course}: {count}
            </p>
          ))}
        </div>
      </div>
      <div className="p-4">
      <button onClick={() => navigate('/course')}
        className=" bg-gray-300 rounded-3xl dark:bg-gray-700  py-3 px-4 "
        >View Course</button>

      </div> 
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
    <div className="overflow-x-auto p-4  w-full max-w-6xl mx-auto ">
      <table border={1} cellPadding={10} className=" w-full border border-gray-300" >
        <thead>
          <tr >
            <th className='  p-4 border text-left'>Full Name</th>
            <th className=' p-4 border text-left'>Email</th>
            <th className='  p-4 border text-left'>Phone</th>
            <th className=' p-4 border text-left'>Course</th>
            <th className=' p-4 border text-left'>Remove Student</th>
          </tr>
        </thead>

        <tbody>
          {studentList.map((student) => (
            <tr key={student.id}>
              <td className=' p-4 border text-left'>{student.fullName}</td>
              <td className=' p-4 border text-left'>{student.email}</td>
              <td className=' p-4 border text-left'>{student.phone}</td>
              <td className=' p-4 border text-left'>{student.course}</td>
              <td className=' p-4 border text-left'><button onClick={() => removeStudent(student.id)}><Trash /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};