import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
<div className="min-h-screen dark:bg-gray-900 dark:text-white bg-white text-black ">
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    
    </div>
  )
}

export default Layout