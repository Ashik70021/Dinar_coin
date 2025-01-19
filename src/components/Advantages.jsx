import { FaMoneyBillWave, FaShieldAlt, FaHandsHelping } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";
import dinarcoin from '../../public/image/dinarcoin.jpg'; 

const Advantages = () => {
    const advantages = [
        {
            id: 1,
            title: "Ease of Financial Transactions",
            description:
                "Simplifies financial operations with seamless and fast transactions.",
            icon: <FaMoneyBillWave className="text-[#f3b841] text-6xl mb-4 mx-auto" />,
        },
        {
            id: 2,
            title: "Improving Financial Stability",
            description:
                "Promotes economic resilience with innovative financial solutions.",
            icon: <FaShieldAlt className="text-[#f3b841] text-6xl mb-4 mx-auto" />,
        },
        {
            id: 3,
            title: "Enhancing Arab Economic Integration",
            description:
                "Fosters economic unity and collaboration among Arab nations.",
            icon: <RiTeamLine className="text-[#f3b841] text-6xl mb-4 mx-auto" />,
        },
        {
            id: 4,
            title: "Data Protection and Privacy",
            description:
                "Ensures secure handling of data with advanced privacy protocols.",
            icon: <MdOutlinePrivacyTip className="text-[#f3b841] text-6xl mb-4 mx-auto" />,
        },
        {
            id: 5,
            title: "Support for Start-ups",
            description:
                "Encourages entrepreneurship by providing financial support to start-ups.",
            icon: <FaHandsHelping className="text-[#f3b841] text-6xl mb-4 mx-auto" />,
        },
    ];

    return (
        <div
            className="text-white py-12 px-6 border-t-2 border-t-[#f3b841]"
            style={{
                backgroundImage: `url(${dinarcoin})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-8">
                    Why Choose <span className="text-[#f3b841]">Dinar Coin</span>?
                </h2>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage) => (
                        <div
                            key={advantage.id}
                            className="bg-[#1a1a1a] bg-opacity-95 border border-[#f3b841] rounded-lg p-6 text-center shadow-lg hover:scale-105 transition-transform"
                        >
                            {/* Icon */}
                            {advantage.icon}

                            {/* Title */}
                            <h3 className="text-2xl font-semibold mb-4 text-[#f3b841]">
                                {advantage.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-gray-300">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;
