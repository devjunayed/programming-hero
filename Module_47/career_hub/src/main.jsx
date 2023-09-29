import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Jobs from './components/Jobs/Jobs'
import Blogs from './components/Blogs/Blogs'
import Statistics from './components/Statistics/Statistics'
import ErrorPage from './components/ErrorPage/ErrorPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
