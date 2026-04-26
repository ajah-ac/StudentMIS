import { Link, Outlet} from "react-router-dom"

const Course = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">

  <Link to='/course/math'>Math</Link>
  <Link to='/course/science'>Science</Link>
  <Link to='/course/english'>English</Link>
  <Link to='/course/history'>History</Link>
  <Outlet/>
      </div>
    </>
  )
}

export default Course