import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="mx-1 md:mx-12">
            <Navbar></Navbar>
            </div>
            <div className=" md:mx-12">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;