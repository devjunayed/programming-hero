import Header from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;