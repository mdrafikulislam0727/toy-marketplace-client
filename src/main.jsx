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
import AllToys from './component/AllToys/AllToys';
import ToyDetails from './component/ToyDetails/ToyDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';
import MyToy from './component/MyToy/MyToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path:'/allToy',
        element:<AllToys></AllToys>,
        loader:() => fetch('http://localhost:5000/toyCars')
      },
      {
        path:'/toyDetails/:id',
        element:<ToyDetails></ToyDetails>,
        loader:({params}) => fetch(`http://localhost:5000/toyCars/${params.id}`)
      },
      {
        path:'/myToy',
        element:<MyToy></MyToy>
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
