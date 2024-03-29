import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { name, brand, type, description, price, rating, photo }
        console.log(newProduct);
        // send data to server
        fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
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
        <div className="bg-[#F4F3F0] my-8 py-8">
                <h1 className="text-3xl text-center font-extrabold">Add Products</h1>
            <div className=" flex justify-center items-center">
                <form onSubmit={handleAddProduct}>
                    {/* {from name row} */}
                    <div className="md:flex gap-3 w-3/3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered input-success w-full" />
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
                                <input type="text" name="type" placeholder="Type" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered input-success w-full" />
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
                                <input type="text" name="price" placeholder="Price" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered input-success w-full" />
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
                                <input type="text" name="photo" placeholder="Photo" className="input input-bordered input-success w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="w-3/3 pt-3">
                        <input type="submit" value="Add Product" className="btn btn-success text-white mr-3" />
                        <Link to={'/'}><button className="btn btn-success text-white">Go Home</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;