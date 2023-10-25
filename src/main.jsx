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
import Update from './components/Update/Update';
import SeeDetails from './components/ShowDetails/SeeDetails';


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
        path: "/seeDetails/:name",
        element: <SeeDetails></SeeDetails>,
        loader: () => fetch('http://localhost:5000/data')
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/data/${params.id}`)
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
        element: <Samsung></Samsung>,
        loader: () => fetch('http://localhost:5000/data?brand=Samsung')
      },
      {
        path: "/google",
        element: <Google></Google>,
        loader: () => fetch('http://localhost:5000/data?brand=Google')
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch('http://localhost:5000/data?brand=Sony')
      },
      {
        path: "/asus",
        element: <Asus></Asus>,
        loader: () => fetch('http://localhost:5000/data?brand=Asus')
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
