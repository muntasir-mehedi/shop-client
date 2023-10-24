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
import AddProduct from './components/AddProduct/AddProduct';
import MyCart from './components/MyCart/MyCart';
import Apple from './components/Brand/apple';
import Samsung from './components/Brand/samsung';
import Google from './components/Brand/google';
import Sony from './components/Brand/Sony';
import Asus from './components/Brand/Asus';
import Intel from './components/Brand/Intel';


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
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () => fetch('http://localhost:5000/data?brand=Apple')
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>
      },
      {
        path: "/google",
        element: <Google></Google>
      },
      {
        path: "/sony",
        element: <Sony></Sony>
      },
      {
        path: "/asus",
        element: <Asus></Asus>
      },
      {
        path: "/intel",
        element: <Intel></Intel>
      },
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
