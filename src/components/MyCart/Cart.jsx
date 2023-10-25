import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = ({ brnd,deleteId, brands, setBrand }) => {
    const { _id, name, brand, price, rating, photo, type } = brnd;
    

    const handleDelete = _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "you won't able to revert it! ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=> {
            if(result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${deleteId}`, {
                   method: 'DELETE' 
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                        )
                        const remaining = brands.filter(pro => pro._id !== _id);
                        setBrand(remaining);
                    }
                    window.location.reload();
                })
            }
        })
    }
    return (
        <div>
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
                            <Link to={'/'}><button className="rounded-lg text-sm font-medium px-2 py-1 btn-success">Home</button></Link>
                            <button onClick={()=>handleDelete(_id)} className="rounded-lg text-sm font-medium px-2 py-1 btn-warning">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;