import { useLoaderData } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SonyCard from "../BrandCard/SonyCard";

const Sony = () => {
    const data = useLoaderData();
    return (
        <div className="my-4">
            {/* carousel */}
            <div className="carousel w-full h-60 md:h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/HrXMRhf/Sony-Xperia-5-III-500x500.jpg" className="w-44 md:w-80 lg:ml-48" />
                    <h1 className="mt-24 lg:mt-44 md:text-4xl pr-2 font-semibold">Buy now to get the offer!!!! <br /> Up to <span className="text-red-400">10%</span></h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="md:btn md:btn-circle"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                        <a href="#slide2" className="md:btn md:btn-circle"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Phvpq0r/camera.jpg" className="w-44 md:w-80 lg:ml-48" />
                    <h1 className="mt-24 lg:mt-44 md:text-4xl pr-2 font-semibold">Buy now to get the offer!!!! <br /> Up to <span className="text-red-400">10%</span></h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="md:btn md:btn-circle"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                        <a href="#slide3" className="md:btn md:btn-circle"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/G2Lt2jn/sony-tv.jpg" className="w-44 md:w-80 lg:ml-48" />
                    <h1 className="mt-24 lg:mt-44 md:text-4xl pr-2 font-semibold">Buy now to get the offer!!!! <br /> Up to <span className="text-red-400">10%</span></h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="md:btn md:btn-circle"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                        <a href="#slide1" className="md:btn md:btn-circle"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                    </div>
                </div>
            </div>
            {/* card */}
            <h1 className="text-center text-2xl font-bold">Buy Sony Products</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10">
                {
                    data.map(card => <SonyCard
                        key={data._id}
                        card={card}>
                    </SonyCard>)
                }
            </div>
        </div>
    );
};

export default Sony;