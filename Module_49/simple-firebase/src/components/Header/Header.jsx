import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {

    return (
        <div className="header-wrapper">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;