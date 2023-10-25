import { Link, useLoaderData, useParams } from "react-router-dom";

const SeeDetails = () => {
    const datas = useLoaderData();
    console.log(datas);
    const { name } = useParams();
    const data = datas.find(data => data.name === name)
    console.log(data);
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={data.photo} className="w-72 md:w-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{data.name}</h1>
                    <p className="py-2 font-semibold">Brand: {data.brand}</p>
                    <p className="font-semibold">Type: {data.type}</p>
                    <p className="py-2 font-semibold">Price: {data.price}$</p>
                    <p className="font-semibold">Ratings: {data.rating}/5</p>
                    <p className="py-4 font-semibold">Description:- {data.description}</p>

                    <Link to={'/myCart'}><button className="btn btn-success mt-3 ml-4">add to cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SeeDetails;