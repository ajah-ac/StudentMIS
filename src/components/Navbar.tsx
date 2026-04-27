import { NavLink } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useThemeContext } from '../contexts/ThemeContext'
import { useState } from 'react'
export const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext()
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  return (
    <div className={` relative shadow-xl py-4 px-10 flex sm:text-xl lg:px-5 lg:py-5 lg:text-2xl align-center justify-between `}>
      <h1>StudentMis</h1>
      <nav className='sm:flex justify-evenly gap-4 hidden '>
        <NavLink to='/'>Register</NavLink>
        <NavLink to='/students'>Students</NavLink>
        <button onClick={toggleTheme}>{theme === 'light' ? <Moon /> : <Sun />}</button>






      </nav>

      <nav className='flex sm:hidden'>
        <button onClick={() => setOpen(!open)}>{open? <X/>: <Menu />}</button>
        {
          open && (
            <div className="absolute bg-white dark:bg-gray-900 top-full left-0 w-full  shadow-lg flex flex-col gap-4 p-4 sm:hidden">

              <NavLink to='/' onClick={closeMenu}>Register</NavLink>
              <NavLink to='/students' onClick={closeMenu}>Students</NavLink>
              <button onClick={toggleTheme}>{theme === 'light' ? <Moon /> : <Sun />}</button>
            </div>
          )
        }
      </nav>

    </div>
  )
}
