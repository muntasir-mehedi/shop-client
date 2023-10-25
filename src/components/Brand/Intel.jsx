import { Link } from "react-router-dom";


const Intel = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5 text-2xl font-bold">Right now we do not have Intel Products. We will add products near future.</p>
                        <Link to={'/'}><button className="btn btn-success text-white">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intel;