import { Outlet } from "react-router-dom"
import NavBar from "../components/Layout/NavBar"
import { Toaster } from "../components/ui/toaster"

const Layout = () => {
  return <div className="">
    <NavBar />
    <div className="container my-5">
      <Toaster/>
      <Outlet />
    </div>
  </div>
}

export default Layout