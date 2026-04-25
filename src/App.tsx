import Layout from './components/Layout'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Register from './pages/Register'
import Students from './pages/Students'
import Confirmation from './pages/Confirmation'
import Course from './pages/Course'
import { useThemeContext } from './contexts/ThemeContext'

const router=createBrowserRouter([
  {path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Register/>
      },
      {
        path:'/students',
        element:<Students/>
      },
      {
        path:'/confirmation',
        element:<Confirmation/>
      },
      {
        path:'/course',
        element:<Course/>
      }
    ]
  }
])
function App() {
  const {theme}=useThemeContext()

  return (
    <div className={`${theme==='dark'?`bg-gray-700 text-white`:`bg-white text-black`} h-screen` }>
    <RouterProvider router={router}/>
   
    </div>
  )
}

export default App
