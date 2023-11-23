import { FaAd, FaCalendar, FaHome, FaList,  FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";
import { IoMdMail, IoMdMenu } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex bg-gray-100">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054] ">
                <div className="ml-8 my-10">
                    <a className="">
                        <p className="text-2xl font-['Cinzel'] font-extrabold">bistro boss</p>
                        <p className="text-sm font-bold tracking-[6px] font-['Cinzel']">Restaurant</p>
                    </a>
                </div>
                <ul className="menu text-black  text-md font-['Cinzel'] font-bold">
                    <li className="hover:text-white">
                        <NavLink className="hover:text-blue-400" to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li className="hover:text-white">
                        <NavLink className="hover:text-blue-400" to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li className="hover:text-white">
                        <NavLink className="hover:text-blue-400" to="/dashboard/reservation">
                            <FaWallet></FaWallet>
                            Payment History
                        </NavLink>
                    </li>
                    <li className="hover:text-white">
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li className="hover:text-white">
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Add Review
                        </NavLink>
                    </li>
                    <li className="hover:text-white">
                        <NavLink to="/dashboard/bookings">
                            <FaList></FaList>
                            My Booking
                        </NavLink>
                    </li>


                    <div className="divider"></div>

                    <li className="hover:text-white">
                        <NavLink className="hover:text-blue-400" to="/">
                            <FaHome></FaHome>
                             Home
                        </NavLink>
                    </li>
                    <li className="hover:text-white">
                        <NavLink className="hover:text-blue-400" to="/order/salads">
                            <IoMdMenu></IoMdMenu>
                             Menu
                        </NavLink>
                    </li>
                    <li className="hover:text-white">
                        <NavLink className="hover:text-blue-400" to="/dashboard/userHome">
                            <FaShoppingBag></FaShoppingBag>
                             Shop
                        </NavLink>
                    </li>
                    <li className="hover:text-white">
                        <NavLink className="hover:text-blue-400" to="/dashboard/userHome">
                            <IoMdMail></IoMdMail>
                             Contact
                        </NavLink>
                    </li>

                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;