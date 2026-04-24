import {Link} from 'react-router-dom'
import {Sun} from 'lucide-react'
export const Navbar = () => {
  return (
    <div>
<h1>StudentMis</h1>
<nav>
    <Link to='/'>Register</Link>
    <Link to='/students'>Students</Link>
    <button><Sun/></button>
</nav>


    </div>
  )
}
