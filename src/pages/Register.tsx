import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [errors,setError]=useState ({fullName: '',
    email: '',
    phone: '',
    course: ''})
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: ''
  })
useEffect(() => {
  const stored = localStorage.getItem('studentForm')
  if (stored) {
    setForm(JSON.parse(stored))
  }
}, [])
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    e.preventDefault()
    const { name, value } = e.target;
      if (name === 'phone' && !/^\d*$/.test(value)) return;
        setForm(prev => ({ ...prev, [name]: value }))

let error=''

if(name=='fullName' && value.trim()===''){
  error='Full name is required'
}
if(name==='course'){
  if(value.trim()==='')
    error='Please select a course '
}

if(name==='phone' && value.trim().length<10){
  error='Phone must be at least 10 digits'
}
if(name==='email' && !value.includes('@')){
  error='Enter a valid email'
}
setError(prev=>({...prev,[name]:error}))

  }
  useEffect(() => {
    if (location.state) {
      setForm(location.state);
    }
  }, [location.state])

  function handleSubmit(e:React.SubmitEvent) {
e.preventDefault()
    navigate('/confirmation', { state: form, replace: true })
  }
  const isFormValid= 
  Object.values(form).every(val=>val.trim()!=='') &&
Object.values(errors).every(err=>err==='')
   
  return (
    <div className="min-h-screen flex items-center max-w-6xl justify-center m-auto">

      <form onSubmit={handleSubmit} className=" shadow-2xl border  rounded-2xl flex flex-col px-10 py-20 max-w-xl gap-4">
        <input
          className="  
          outline-0 rounded border-b px-8 py-3 "
          name='fullName'
          type="text"
          value={form.fullName}
          onChange={handleChange}
          required
          placeholder="Enter Student Name" />
          {form.fullName && errors.fullName && (
  <p className="text-red-500 text-sm">{errors.fullName}</p>
)}

        <input
          className=" outline-0 rounded border-b px-8 py-3 "
          name='email'
          type="text"
          value={form.email}
          onChange={handleChange}
          required id="" placeholder="Enter Email Address" />
          { form.email && errors.email && (
  <p className="text-red-500 text-sm">{errors.email}</p>
)}
        <input
          className=" rounded border-b px-8 py-3 "
          value={form.phone}
          onChange={handleChange}
          required name="phone"
          inputMode="numeric" 
  pattern="[0-9]*"
          placeholder="Enter Phone number" />
          { form.phone && errors.phone && (
  <p className="text-red-500 text-sm">{errors.phone}</p>
)}

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
        { form.course==='' && errors.course && (
  <p className="text-red-500 text-sm">{errors.course}</p>
)}
        <button type='submit'
        disabled={!isFormValid}
          className={` py-3 rounded-3xl text-black  ${isFormValid?' bg-blue-200 text-blue-900 dark:text-white text-black font-bold  dark:bg-gray-800':' dark:text-gray-700 text-gray-400 font-extralight dark:bg-gray-800 cursor-not-allowed'}`}

        >Review </button>
      </form>

    </div>)
}

export default Register
