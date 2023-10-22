import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
    return (
        <div className="my-6">
            <div className="flex justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">Our Service</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    data?.map(card => <Brand key={data.id} data={card}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;