import { Link } from "react-router-dom";

const Brands = () => {
 

    return (
        <div className="my-6">
            <div className="flex justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">Our Service</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <Link to={'/apple'}>
                    <div className="my-2 px-4">
                        <div className="card card-compact w-72 md:w-96 h-72 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/0fv3qZ8/pexels-eyma-d-13748756.jpg" alt="Shoes" className="h-64 w-full" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Apple</h2>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/samsung'}>
                    <div className="my-2 px-4">
                        <div className="card card-compact w-72 md:w-96 h-72 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/JCt2JH0/Samsung-Logo.jpg" alt="Shoes" className="h-64 w-full" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Samsung</h2>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/google'}>
                    <div className="my-2 px-4">
                        <div className="card card-compact w-72 md:w-96 h-72 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/51s6fwC/2919654-5611940169-Googl.png" alt="Shoes" className="h-64 w-full" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Google</h2>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/sony'}>
                    <div className="my-2 px-4">
                        <div className="card card-compact w-72 md:w-96 h-72 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/3NkRGkW/sony.jpg" alt="Shoes" className="h-64 w-full" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Sony</h2>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/asus'}>
                    <div className="my-2 px-4">
                        <div className="card card-compact w-72 md:w-96 h-72 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/8rdbsMS/asus-logo.jpg" alt="Shoes" className="h-64 w-full" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Asus</h2>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/intel'}>
                    <div className="my-2 px-4">
                        <div className="card card-compact w-72 md:w-96 h-72 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/Mk2QXzR/Intel-Core-2023-logo.png" alt="Shoes" className="h-64 w-full" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Intel</h2>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Brands;