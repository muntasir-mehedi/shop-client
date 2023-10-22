
import { Link } from "react-router-dom";

const Brand = ({data}) => {
    const {id, cover_img, title} = data
    return (
        <Link to={`/showdetails/${id}`}>
            <div className="my-2 px-4">
                <div className="card card-compact w-72 md:w-96 h-72 bg-base-100 shadow-xl">
                    <figure><img src={cover_img} alt="Shoes" className="h-64 w-full" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Brand;