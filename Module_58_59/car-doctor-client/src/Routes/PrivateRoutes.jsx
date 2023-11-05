import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user,loading } = useContext(AuthContext);

    if(loading){
        return <div className='flex my-4 justify-center w-full'><span className="loading w-10 mx-auto"></span></div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>


};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;