import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <SignUp></SignUp>
        },
        {
          path: 'book/:id',
          element: <PrivateRoutes>
            <BookService></BookService>
          </PrivateRoutes>
          ,
          loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`)
        },       
        {
          path: 'bookings',
          element:  <PrivateRoutes>
            <Bookings></Bookings>
          </PrivateRoutes>
        }
      ]
    },
  ]);

export default router;