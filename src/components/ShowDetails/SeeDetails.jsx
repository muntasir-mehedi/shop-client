import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../authprovider/AuthProvider";

const SeeDetails = () => {
    const datas = useLoaderData();
    const {user} = useContext(AuthContext)
    const email = user.email

    const { name } = useParams();
    const data = datas.find(data => data.name === name)

    
    const handleCart = () =>{
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({data, email})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product Added.....',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

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

                    <Link to={'/myCart'}><button onClick={handleCart} className="btn btn-success mt-3 ml-4">add to cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SeeDetails;