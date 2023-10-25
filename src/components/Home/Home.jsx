import Customers from "../Customer/Customers";
import Deal from "../Deals/Deal";
import Banner from "./Banner";
import Brands from "./Brands";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Brands></Brands>
            <Deal></Deal>
            <Customers></Customers>
        </div>
    );
};

export default Home;