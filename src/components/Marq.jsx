import Marquee from "react-fast-marquee";

const Marq = () => {
    return (
        <div className="">
            <Marquee>
                <div className="w-full border-t-4 border-b-4 bg-[#000000] border-[#f3b841]">
                    <div className="overflow-hidden ">
                        <div className="flex items-center space-x-6 py-6">
                            <img src="../../public/image/logo1.jpg" alt="Marquee Image" className="h-32 w-32 object-cover rounded-[50%]" />
                            <p className="text-5xl font-extrabold text-[#d99e2a] font-semibold">DINAR COIN</p>
                            <img src="../../public/image/logo1.jpg" alt="Marquee Image" className="h-32 w-32 object-cover rounded-[50%]" />
                            <p className="text-5xl font-extrabold text-[#d99e2a] font-semibold">JOIN THE COMMUNITY</p>
                            <img src="../../public/image/logo1.jpg" alt="Marquee Image" className="h-32 w-32 object-cover rounded-[50%]" />
                            <p className="text-5xl font-extrabold text-[#d99e2a] font-semibold">ARAB</p>
                            <img src="../../public/image/logo1.jpg" alt="Marquee Image" className="h-32 w-32 object-cover rounded-[50%]" />
                            <p className="text-5xl font-extrabold text-[#d99e2a] font-semibold">JOIN THE COMMUNITY</p>          
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Marq;