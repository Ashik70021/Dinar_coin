import dinar2 from '../../public/image/dinar2.jpg'

const Objectives = () => {
    return (
        <div className="bg-[#161614] border-t-[#f3b841] py-24">
            {/* Outer Container with Black Background */}
            <div className="border-2 rounded-2xl border-[#ffff] mx-6 lg:mx-56">
                <div className="bg-[#000000] rounded-2xl text-white p-6 lg:p-12">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col items-start">
                            {/* Text Content */}
                            <div className="mb-6">
                                <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                                    Empowering Arab <br /> Finance with <br /><span className="text-[#f3b841]">Dinar Coin</span>.
                                </h1>
                                <p className="text-2xl lg:text-2xl mb-3">
                                    A Collective Honoring <br /> Bravery & Resilience
                                </p>
                            </div>

                            {/* Image Content */}
                            <div className="w-full max-w-[300px] lg:max-w-[400px] mb-6">
                                <img
                                    src={dinar2}
                                    alt="Banner"
                                    className="rounded-lg w-full object-cover h-[400px] lg:h-[500px]"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-[#f3b841] text-black p-6 rounded-lg shadow-lg">
                                <h3 className="text-m lg:text-xl font-semibold">
                                    1. Create the first digital currency for the dinar.
                                </h3>
                            </div>
                            <div className="bg-[#f3b841] text-black p-6 rounded-lg shadow-lg">
                                <h3 className="text-m lg:text-xl font-semibold">
                                    2. Facilitate digital financial transactions.
                                </h3>
                            </div>
                            <div className="bg-[#f3b841] text-black p-6 rounded-lg shadow-lg">
                                <h3 className="text-m lg:text-xl font-semibold">
                                    3. Enhance financial stability.
                                </h3>
                            </div>
                            <div className="bg-[#f3b841] text-black p-6 rounded-lg shadow-lg">
                                <h3 className="text-m lg:text-xl font-semibold">
                                    4. Support financial integration of Arab countries.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Objectives;
