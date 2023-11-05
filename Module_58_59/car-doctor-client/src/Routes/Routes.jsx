import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/Checkout/CheckOut";
import BookService from "../pages/BookService/BookService";

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
          element:<BookService></BookService>,
          loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
          path: 'checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`)
        }
      ]
    },
  ]);

export default router;