import Advantages from "./Advantages";
import Banner from "./Banner";
import BuyNowSection from "./BuyNowSection";
import Distribution from "./Distribution";
import Marq from "./Marq";
import Objectives from "./Objectives";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Marq></Marq>
            <Objectives></Objectives>
            <Distribution></Distribution>
            <Advantages></Advantages>
            <BuyNowSection></BuyNowSection>
        </div>
    );
};

export default Home;