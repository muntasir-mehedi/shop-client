import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error.jsx';
import AuthProvider from './authprovider/AuthProvider.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AboutUs from './components/Aboutus/AboutUs';
import Brand from './components/Brands/Brand';
import AddProduct from './components/AddProduct/AddProduct';
import MyCart from './components/MyCart/MyCart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/brand/:title",
        element: <Brand></Brand>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
