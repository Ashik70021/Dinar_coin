import logo from '../../public/image/logo2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-[#161614] sm:py-4 md:py-12 lg:py-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={logo}
                    className="max-w-72 lg:max-w-sm rounded-[50%] shadow-2xl mx-auto lg:mx-0" />
                <div className="mr-12 sm:mx-4 lg:mx-0">
                    <h1 className="mb-3 text-3xl lg:text-5xl font-bold text-white uppercase">
                        Revolutionizing Arab <br />Financial Integration <br />
                        with <span className="text-[#f3b841]">DINAR COIN</span>.
                    </h1>
                    <p className="mb-3 py-6 sm:py-4 text-2xl text-white font-semibold uppercase">
                        Create the first digital currency for the dinar. <br />Enhance financial stability.
                    </p>
                    <button className="px-6 py-3 bg-[#f3b841] text-[#161614] font-bold rounded-md hover:scale-105 transition-transform">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;


