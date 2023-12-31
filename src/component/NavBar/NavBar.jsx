import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import icon from '../../assets/loco.png'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handelLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li className="font-bold text-[#7dd3fc]"><Link to="/">Home</Link></li>
        <li className="font-bold text-[#7dd3fc]"><Link to="/allToy">All Toy</Link></li>
        <li className="font-bold text-[#7dd3fc]"><Link to="/blog">Blogs</Link></li>
        {user && <li className="font-bold text-[#7dd3fc]"><Link to="/addToy">Add Toy</Link></li>}
        {user && <li className="font-bold text-[#7dd3fc]"><Link to="/myToy">My Toy</Link></li>}
        
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/"><img className="w-24 h-24 rounded-lg" src={icon} alt="" /></Link>
                <p className="text-2xl font-bold ms-3 text-[#38bdf8]">ToyCarEmporium</p>
            </div>
            <div className="navbar-center hidden lg:flex ms-5">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <img className="w-16 rounded-3xl mr-4" src={user.photoURL} alt="" /> : ''

                }
                {user ? <button onClick={handelLogOut} className="btn btn-outline btn-secondary">Log Out</button> :

                    <Link to="/login"><button className="btn btn-outline btn-secondary">Login</button>
                    </Link>

                }
            </div>
        </div>
    );
};

export default NavBar;