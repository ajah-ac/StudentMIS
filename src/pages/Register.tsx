import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
const Register = () => {
      const navigate = useNavigate();
      const location=useLocation()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: ''
  })
  useEffect(()=>{localStorage.setItem('studentForm',JSON.stringify(form))},[form])
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    e.preventDefault()
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }))

  }
  useEffect(()=>{
      if (location.state) {
    setForm(location.state);
  }
  },[location.state])
  
  function handleSubmit() {
    
    navigate('/confirmation',{state:form,replace:true})
  }
  return (
    <div className="min-h-screen flex items-center justify-center">

      <form onSubmit={(e)=>e.preventDefault()} className="border rounded-2xl flex flex-col px-20 py-20 max-w-xl gap-4">
        <input
          name='fullName'
          type="text"
          value={form.fullName}
          onChange={handleChange}
          required
          placeholder="Enter Student Name" />

        <input
          name='email'
          type="text"
          value={form.email}
          onChange={handleChange}
          required id="" placeholder="Enter Email Address" />
        <input
          value={form.phone}
          onChange={handleChange}
          required name="phone"
          placeholder="Enter Phone number" />

        <select name="course"
          value={form.course}
          onChange={handleChange}
          id="">
          <option value="" disabled selected>Select Course</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="english">English</option>
          <option value="history">History</option>
        </select>
        <button type='submit' onClick={handleSubmit}>Review </button>
      </form>

    </div>)
}

export default Register
