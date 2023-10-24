

const AppleCard = ({card}) => {
    const {name, brand, type, price, rating, photo} = card;
    return (
        <div className="w-96">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p>Price: {price}$</p>
                    <p>Ratings: {rating}/5</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppleCard;