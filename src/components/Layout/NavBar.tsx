import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { UserIcon } from "lucide-react";
import getToken from "../../utils/gitToken";

const NavBar = () => {
    let navigate = useNavigate()
    const logOutHandler = () => {
        localStorage.removeItem("tokenSentiment")
        setTimeout(() => {
            navigate("/login")
        }, 1000);
    }

    return (
        <nav className="bg-purple-400 text-white w-full">
            <div className="container py-4 flex justify-between items-center">
                <Link to={"/"} >
                    <h2 className="text-xl font-semibold hover:bg-[#ffffff1f] p-2 rounded-lg">P/N Comments</h2>
                </Link>
                <div className="flex items-center space-x-2">
                    {getToken() ? <>
                        <Link to={"/profile"} >
                            <h2 className="flex items-center hover:bg-[#ffffff1f] p-2 rounded-lg gap-2 font-bold text-lg">Somaia <UserIcon width={40} height={40} className="bg-purple-500 rounded-full p-2" /> </h2>
                        </Link>
                        <h2 className="hover:bg-[#ffffff1f] p-2 rounded-lg" onClick={logOutHandler} >
                            LogOut
                        </h2>
                    </> : <>
                        <Link to={"/login"} >
                            <h2 className="hover:bg-[#ffffff1f] p-2 rounded-lg font-bold text-lg">LogIn</h2>
                        </Link>
                        <Link to={"/signin"} >
                        <h2 className="hover:bg-[#ffffff1f] p-2 rounded-lg font-bold text-lg">SignIn</h2>
                    </Link>
                    </>}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
