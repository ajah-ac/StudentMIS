import { Eye, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

type student = {
  fullName: string,
  email: string,
  phone: string,
  course: string,
  id: string
}
const courseCapital = (course: string) => {
  return course[0].toUpperCase() + course.slice(1)
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
  const courseNavigate = (course: string) => {
    navigate(`/course/${course}`)

  }

  return (
    <>
      <div className=" max-w-6xl flex justify-center  m-auto px-4  mt-10">

        <input type="text"
          className="px-10 outline-0 w-1/2  mx-auto shadow-md py-4 text-lg  mb-5 bg-gray-200 dark:bg-gray-800 rounded-4xl "
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          placeholder="Search for a student" />
      </div>

      {filteredStudents.length === 0 ? (<p>No student found with Name:{search}</p>) : (

        <StudentsTable
          removeStudent={removeStudent}
          studentList={filteredStudents}
          courseNavigate={courseNavigate} />)}

      <div className="border p-4 rounded shadow  w-1/2  m-auto ">
        <h1 className="font-bold">Total Students:<span className="font-normal">
          {studentList.length}
        </span></h1>

        <div  >
          <h3 className="font-bold underline">Students per Course</h3>
          {Object.entries(studentsPerCourse).map(([course, count]) => (
            <div>
              <p key={course}>
                {courseCapital(course)}: {count}
              </p>

            </div>
          ))}
        </div>
      </div>
      <div className="p-4">


      </div>
    </>
  )
}

type Props = {
  studentList: student[],
  removeStudent: (id: string) => void
  courseNavigate: (course: string) => void
}
export default Students
const StudentsTable = ({ studentList, removeStudent, courseNavigate }: Props) => {
  return (
    <div className="overflow-x-auto p-4  w-full max-w-6xl mx-auto ">
      <table border={1} cellPadding={10} className=" w-full border border-gray-300" >
        <thead>
          <tr >
            <th className='  p-4 border-gray-400 border text-left'>Full Name</th>
            <th className=' p-4 border  border-gray-400  text-left'>Email</th>
            <th className='  p-4 border  border-gray-400  text-left'>Phone</th>
            <th className=' p-4 border   border-gray-400  text-left'>Course</th>
            <th className=' p-4 border border-gray-400  text-left'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {studentList.map((student) => (
            <tr key={student.id}>
              <td className=' p-4 border-b  border-gray-400   text-left'>{student.fullName}</td>
              <td className=' p-4 border-b text-left  border-gray-400 '>{student.email}</td>
              <td className=' p-4 border-b text-left  border-gray-400 ' >{student.phone}</td>
              <td className=' p-4 border-b  border-gray-400  text-left '>
                <div className=" flex justify-between px-2">
                   <h1>{courseCapital(student.course)}</h1>

    <button
      onClick={() => courseNavigate(student.course)}
      className="bg-amber-100 rounded-3xl text-gray-900 border-gray-300 p-2"
    >
      <Eye />
    </button>
  </div>
              </td>
              <td className="p-4 border-b border-gray-400 text-left">
  <button
    className="bg-red-400 rounded-3xl p-2 border border-gray-300"
    onClick={() => removeStudent(student.id)}
  >
    <Trash className="text-gray-900" />
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};