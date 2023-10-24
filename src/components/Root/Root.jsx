import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-4 md:mx-12">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;