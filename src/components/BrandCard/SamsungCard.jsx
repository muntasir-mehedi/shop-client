

const SamsungCard = ({card}) => {
    const { name, brand, type, price, rating, photo } = card;
    return (
        <>
            <div className="md:w-5/6 my-4 mx-6 pl-4">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={photo} alt="Movie" className="w-40 md:w-52" /></figure>
                    <div className="flex flex-col md:gap-2 p-1">
                        <h2 className="card-title border-b-4 border-b-emerald-200">{name}</h2>
                        <p className="text-sm font-medium md:font-semibold">Brand: {brand}</p>
                        <p className="text-sm font-medium md:font-semibold">Type: {type}</p>
                        <p className="text-sm font-medium md:font-semibold">Price: {price}$</p>
                        <p className="text-sm font-medium md:font-semibold">Ratings: {rating}/5</p>
                        <div className="card-actions">
                            <button className="rounded-lg text-sm font-medium px-2 py-1 btn-success">See Details</button>
                            <button className="rounded-lg text-sm font-medium px-2 py-1 btn-warning">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SamsungCard;