import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const data = useLoaderData();
    const {_id, name, brand, type,description, price, rating, photo } = data;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updatedProduct = { name, brand, type, description, price, rating, photo }
        console.log(updatedProduct);
        // send data to server
        fetch(`http://localhost:5000/data/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product Updated.....',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] my-8 py-8">
                <h1 className="text-3xl text-center font-extrabold">Update Product: {name}</h1>
            <div className=" flex justify-center items-center">
                <form onSubmit={handleUpdateProduct}>
                    {/* {from name row} */}
                    <div className="md:flex gap-3 w-3/3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                    </div>
                    {/* {from type & short description row} */}
                    <div className="md:flex gap-3 w-3/3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                    </div>
                    {/* {from price and rating} */}
                    <div className="md:flex gap-3 w-3/3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                    </div>
                    {/* {from photo url} */}
                    <div className="w-3/3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="w-3/3 pt-3">
                        <input type="submit" value="Update Product" className="btn btn-success text-white mr-3" />
                        <Link to={'/'}><button className="btn btn-success text-white">Go Home</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;