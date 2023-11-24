import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoutes from './PrivateRoutes';
import Secret from '../pages/Shared/Secret/Secret';
import Dashboard from '../Layout/Dashboard';
import Cart from '../pages/Dashboard/Cart/Cart';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: "secret",
                element: <PrivateRoutes>
                    <Secret></Secret>
                </PrivateRoutes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes>
            <Dashboard></Dashboard>
        </PrivateRoutes>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])