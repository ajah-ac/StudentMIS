import { NavLink} from 'react-router-dom'
import {Sun} from 'lucide-react'
export const Navbar = () => {
  return (
    <div className=' shadow-xl py-4 px-10 flex align-center justify-between'>
<h1>StudentMis</h1>
<nav className='flex justify-evenly gap-4 '>
    <NavLink to='/'>Register</NavLink>
    <NavLink to='/students'>Students</NavLink>
    <button><Sun/></button>
</nav>


    </div>
  )
}
