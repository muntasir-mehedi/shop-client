

const Banner = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/gZNKZwx/pexels-fauxels-3183183.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-16 text-3xl md:text-5xl font-bold text-white">Get The All Best Deals <span className="text-blue-200">!!!</span></h1>
                        <h2 className=" text-2xl font-semibold text-white"><span className=" font-semibold text-green-500">e</span>Shop</h2>
                        <p className="mb-5 text-lg">Buy Best Products</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;