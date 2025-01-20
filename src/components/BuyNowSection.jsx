import debitCardLogo from '../../public/image/visa.png';
import cryptoLogo from '../../public/image/solana.png';

const BuyNowSection = () => {
    return (
        <div className="bg-[#161614] py-16">
            {/* Logos Section */}
            <div className="flex justify-center items-center gap-6 mx-6 lg:mx-56">
                {/* Debit Card Logo */}
                <div className="flex items-center justify-center border-2 border-white rounded-lg p-6 ">
                    <img
                        src={debitCardLogo}
                        alt="Debit Card"
                        className="h-16 w-16 object-contain"
                    />
                </div>
                {/* Crypto Logo */}
                <div className="flex items-center justify-center border-2 border-white rounded-lg p-6 ">
                    <img
                        src={cryptoLogo}
                        alt="Crypto"
                        className="h-16 w-16 object-contain"
                    />
                </div>
            </div>

            {/* Buy Now Button */}
            <div className="text-center mt-10">
                <button className="px-6 py-3 bg-[#f3b841] text-[#161614] font-bold uppercase rounded-md hover:scale-105 transition-transform">
                    Coming Soon
                </button>
            </div>
        </div>
    );
};

export default BuyNowSection;
