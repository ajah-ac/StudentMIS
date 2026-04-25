import { NavLink} from 'react-router-dom'
import {Moon, Sun} from 'lucide-react'
import { useThemeContext } from '../contexts/ThemeContext'
export const Navbar = () => {
  const {theme,toggleTheme}=useThemeContext()
  return (
    <div className={` shadow-xl py-4 px-10 flex align-center justify-between `}>
<h1>StudentMis</h1>
<nav className='flex justify-evenly gap-4 '>
    <NavLink to='/'>Register</NavLink>
    <NavLink to='/students'>Students</NavLink>
    <button type="button" onClick={toggleTheme}>{theme==='light'?<Sun/>:<Moon/>}</button>
    
</nav>


    </div>
  )
}
