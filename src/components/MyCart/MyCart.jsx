import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import Cart from "./Cart";


const MyCart = () => {
    const [cartData, setCardData] = useState([]);

    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setCardData(data))
    }, [user?.email])
console.log(cartData);
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">My Cart</h1>
            {cartData.length > 0 &&
            cartData.map((brand) =>(
                <Cart
                key={brand._id}
                brnd={brand.data}
                deleteId={brand._id}
                brands={cartData}
                setBrand={setCardData}></Cart>
            ))}
       
        </div>
    );
};

export default MyCart;
