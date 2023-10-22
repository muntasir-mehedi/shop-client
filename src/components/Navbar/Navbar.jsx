import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log('User logged out');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navlink = <>
        <li><NavLink to={'/'}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500 underline font-semibold" : ""}>Home</NavLink></li>
        <li><NavLink to={'/register'}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500 underline font-semibold" : ""}>Register</NavLink></li>
        <li><NavLink to={'/aboutus'}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500 underline font-semibold" : ""}>About Us</NavLink></li>
        {
            user
            &&
            <>
                <li><NavLink to={'/blog'}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-500 underline font-semibold" : ""}>Blog</NavLink></li>
                <li><NavLink to={'/story'}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-500 underline font-semibold" : ""}>Story</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="font-mono text-xl font-semibold"><span className="text-4xl font-semibold text-blue-600">E</span>venters</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-3 p-2">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>

                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a className="">{user.displayName}</a></li>
                                    <span>{user.email}</span>
                                </ul>
                            </div>
                            <a onClick={handleLogOut} className="btn btn-sm">Sign out</a>
                        </>
                        :
                        <li className=" btn btn-ghost"><Link to={'/login'} >Login</Link></li>
                }
            </div>
        </div>
    );
};

export default Navbar;