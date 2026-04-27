import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
<div className="min-h-screen dark:bg-black dark:text-white duration-700 bg-white text-black ">
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    
    </div>
  )
}

export default Layout