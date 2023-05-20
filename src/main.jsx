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
import PrivateRoute from './routes/PrivateRoute';

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
        element:<Blogs></Blogs>
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
        loader:() => fetch('https://toy-marketplace-server-ivory.vercel.app/toyCars')
      },
      {
        path:'/toyDetails/:id',
        element:<ToyDetails></ToyDetails>,
        loader:({params}) => fetch(`https://toy-marketplace-server-ivory.vercel.app/toyCars/${params.id}`)
      },
      {
        path:'/myToy',
        element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
        
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
