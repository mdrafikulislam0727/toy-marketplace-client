import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Blogs from './component/Blogs/Blogs';
import SignUp from './component/SignUp/SignUp';
import AuthProvider from './Providers/AuthProvider';
import AddAToy from './component/AddAToy/AddAToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'/addToy',
        element:<AddAToy></AddAToy>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
