import { Link, NavLink } from "react-router-dom";

import userDefaultPic from '../../../assets/user.png';

const Navbar = () => {
    const navlinks =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/career">Career</NavLink></li>
        </>;

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-10 rounded-full mr-4">
                    <img src={userDefaultPic} alt="" />
                </div>
                <Link className="btn bg-black text-white hover:bg-gray-700">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;