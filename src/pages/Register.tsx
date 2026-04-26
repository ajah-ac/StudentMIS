import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: ''
  })
  useEffect(() => { localStorage.setItem('studentForm', JSON.stringify(form)) }, [form])
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    e.preventDefault()
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }))

  }
  useEffect(() => {
    if (location.state) {
      setForm(location.state);
    }
  }, [location.state])

  function handleSubmit() {

    navigate('/confirmation', { state: form, replace: true })
  }
  const isFormValid= form.fullName.trim()!==' '&&
  form.fullName.trim()!==''&&
  form.email.trim()!==''&&
  form.phone.trim()!==''&&
  form.course.trim()!=='';

  return (
    <div className="min-h-screen flex items-center max-w-6xl justify-center overflow-x-hidden">

      <form onSubmit={handleSubmit} className="border  rounded-2xl flex flex-col px-10 py-20 max-w-xl gap-4">
        <input
          className="  text-red-400
          outline-0 rounded border-b px-8 py-3 "
          name='fullName'
          type="text"
          value={form.fullName}
          onChange={handleChange}
          required
          placeholder="Enter Student Name" />

        <input
          className=" outline-0 rounded border-b px-8 py-3 "
          name='email'
          type="text"

          value={form.email}
          onChange={handleChange}
          required id="" placeholder="Enter Email Address" />
        <input
          className=" rounded border-b px-8 py-3 "
          value={form.phone}
          onChange={handleChange}
          required name="phone"
          placeholder="Enter Phone number" />

        <select name="course"
          value={form.course}
className="dark:bg-gray-900"
          onChange={handleChange}
          required
          id="">
          <option value="" disabled>Select Course</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="english">English</option>
          <option value="history">History</option>
        </select>
        <button type='submit'
        disabled={!isFormValid}
          className={` py-3 rounded-3xl text-black  ${isFormValid?' bg-blue-200 text-blue-900 dark:text-white text-black font-bold  dark:bg-gray-800':' dark:text-gray-700 text-gray-400 font-extralight dark:bg-gray-800 cursor-not-allowed'}`}

        >Review </button>
      </form>

    </div>)
}

export default Register
