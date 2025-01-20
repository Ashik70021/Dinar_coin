import { Link } from "react-router-dom";

const Viewwhitepaper = () => {
    return (
        <section className="bg-black flex items-center justify-center border-t-4 border-b-4 border-[#f3b841] py-6">
            <Link to='/whitepaper'><button className="px-6 py-3 bg-[#f3b841] text-[#161614] font-bold rounded-md hover:scale-105 transition-transform">
                VIEW WHITEPAPER
            </button></Link>
        </section>

    );
};

export default Viewwhitepaper;