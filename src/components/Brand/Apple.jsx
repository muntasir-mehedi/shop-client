import { useLoaderData } from "react-router-dom";
import AppleCard from "../BrandCard/AppleCard";


const Apple = () => {

    const data = useLoaderData();
    return (
        <div>
            <h1>Buy Apple Products</h1>
            <div className="grid md:grid-cols-2 grid-cols-1">
                {
                    data.map(card => <AppleCard
                        key={data._id} 
                        card={card}>
                        </AppleCard>)
                }
            </div>
        </div>
    );
};

export default Apple;