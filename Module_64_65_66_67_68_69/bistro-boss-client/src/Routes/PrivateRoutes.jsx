import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading"></span>
    }

    if(user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace />
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;