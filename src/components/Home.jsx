import Advantages from "./Advantages";
import Banner from "./Banner";
import BuyNowSection from "./BuyNowSection";
import Distribution from "./Distribution";
import ImageBanner from "./ImageBanner";
import Marq from "./Marq";
import Objectives from "./Objectives";
import Viewwhitepaper from "./Viewwhitepaper";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Marq></Marq>
            <Objectives></Objectives>
            <ImageBanner></ImageBanner>
            <Distribution></Distribution>
            <Advantages></Advantages>
            <Viewwhitepaper></Viewwhitepaper>
            <BuyNowSection></BuyNowSection>
            
        </div>
    );
};

export default Home;