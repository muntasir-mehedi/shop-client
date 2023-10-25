

const Customers = () => {
    return (
        <div className="my-4">
            <h1 className="text-center text-3xl font-bold">Customer Review</h1>
            <div className="flex flex-col w-full border-opacity-50">

                <div className="grid h-52 card bg-white rounded-box place-items-center">

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/Y0RV5Wm/istockphoto.jpg" alt="Movie" className="h-36" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Alan Jonson</h2>
                            <p>Very good place to by Electronics.</p>
                        </div>
                    </div>
                </div>

                <div className="grid h-52 card bg-white rounded-box place-items-center">

                    <div className="card lg:flex lg:flex-row-reverse card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/4FSrcbh/young-man-standing.webp" alt="Movie" className="h-36 w-36" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Alan Jonson</h2>
                            <p>Very good place to by Electronics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;