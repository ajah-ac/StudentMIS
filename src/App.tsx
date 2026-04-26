import Layout from './components/Layout'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Register from './pages/Register'
import Students from './pages/Students'
import Confirmation from './pages/Confirmation'
import Course from './pages/Course'
import CourseDetails from './components/CourseDetails'

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
        element:<Course/>,
      },
          {
path:'/course/:id',
element:<CourseDetails/>
        }]}
      
])
function App() {

  return (
  
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default App
