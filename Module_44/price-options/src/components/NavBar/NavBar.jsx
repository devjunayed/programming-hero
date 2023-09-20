import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" },
    ];


    return (
        <nav className="bg-yellow-200 text-black md:p-1 p-6">
            <div onClick={() => setOpen(!open)} className="md:hidden text-xl">
                {

                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ul className={`md:flex mr-4 duration-1000 md:static ${open ? 'top-16': '-top-60'} absolute bg-yellow-200 sm:p-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;