import Marquee from "react-fast-marquee";
import logo4 from '../../public/image/logo4.jpg'
const Marq = () => {
    return (
        <div className="">

            <div className="w-full border-t-4 border-b-4 bg-[#000000] border-[#f3b841]">
                <div className="overflow-hidden ">
                    <div className="flex items-center space-x-6 py-6">
                        <Marquee>
                            <img src={logo4} alt="Marquee Image" className="h-32 w-32 object-cover rounded-[50%]" />
                            <p className="text-5xl font-extrabold text-[#d99e2a] font-semibold pr-8">DINAR COIN</p>
                            <img src={logo4} alt="Marquee Image" className="h-32 w-32 object-cover rounded-[50%]" />
                            <p className="text-5xl font-extrabold text-[#d99e2a] font-semibold pr-8">JOIN THE COMMUNITY</p>
                            <img src={logo4} alt="Marquee Image" className="h-32 w-32 object-cover rounded-[50%]" />
                            <p className="text-5xl font-extrabold text-[#d99e2a] font-semibold pr-8">ARAB COIN</p>
                            <img src={logo4} alt="Marquee Image" className="h-32 w-32 object-cover rounded-[50%]" />
                            <p className="text-5xl font-extrabold text-[#d99e2a] font-semibold pr-8">JOIN THE COMMUNITY</p>
                        </Marquee>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Marq;