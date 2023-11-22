import { NavLink } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
    const navOptions = <>
        <li className="uppercase font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="uppercase font-bold"><NavLink to="/menu">Menu</NavLink></li>
        <li className="uppercase font-bold"><NavLink to="/order/salads">Order Food</NavLink></li>
        <li className="uppercase font-bold"><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="ml-4">
                        <p className="text-2xl font-['Cinzel'] font-extrabold">bistro boss</p>
                        <p className="text-sm tracking-[6px] font-['Cinzel']">Restaurant</p>
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                    <a className="btn text-white">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;