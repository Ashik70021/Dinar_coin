const Contectpaper = () => {
    return (
        <div className="bg-[#161614] text-white py-16 px-6 lg:px-20">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl lg:text-4xl font-bold uppercase">
                    What Technology Do We Use in Our Token
                </h1>
                <div className="w-60 h-1 bg-[#f3b841] mx-auto mt-4"></div>
            </div>

            {/* Title Box */}
            <div className="flex justify-center">
                <div className="bg-black text-center py-4 px-4 rounded-lg shadow-lg max-w-96">
                    <h2 className="text-lg lg:text-3xl font-semibold uppercase">
                        Selected Blockchain
                    </h2>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-s lg:text-lg font-normal align-middle">
                    For the Dinar Coin project, the Binance Smart Chain (BSC) has been chosen as the blockchain platform. BSC offers a highly efficient, scalable, and low-cost environment for developing decentralized applications (dApps) and digital currencies. Its compatibility with the Ethereum Virtual Machine (EVM) allows seamless integration with existing tools and ecosystems, enabling faster development and deployment of the Dinar Coin ecosystem. The Binance Smart Chain also ensures high transaction throughput and provides robust security, making it an ideal choice for establishing a secure and efficient digital currency for the Arab region.
                </p>
                <h1 className="my-6 text-m lg:text-xl font-semibold">What is the Proof of Staked Authority (PoSA)?</h1>
                <p className="text-s lg:text-lg font-normal align-middle">
                    Proof of Staked Authority (PoSA) is a consensus mechanism that combines elements of Proof of Stake (PoS) and Proof of Authority (PoA) to achieve efficient and secure blockchain operations. In PoSA, validators are chosen based on their staked assets and reputation within the network. This mechanism promotes decentralization and security while maintaining energy efficiency. Validators in the PoSA system stake their cryptocurrency as collateral, and in return, they gain the authority to validate transactions and create new blocks. If validators act dishonestly, they risk losing their stake, which ensures alignment with the network’s integrity. PoSA is particularly suited for scalable projects like Dinar Coin, as it supports high transaction speeds and reduced environmental impact.
                </p>
            </div>
            {/*---------------------------------------------------------*/}

            <div className="flex justify-center mt-16">
                <div className="bg-black text-center py-4 px-4 rounded-lg shadow-lg max-w-96">
                    <h2 className="text-lg lg:text-3xl font-semibold uppercase">
                        Dinar Coin Metaverse
                    </h2>
                </div>
            </div>
            <div className="mt-6">
                <p className="mb-12 text-s lg:text-lg font-normal align-middle">
                    The Dinar Coin Metaverse is a dynamic space where members can connect, learn, and actively engage with the project’s vision and goals. This virtual environment introduces participants to the innovative ecosystem designed to revolutionize financial transactions in Arab countries. Here, members can explore the seven key stages of the Dinar Coin initiative:
                </p>
                <h1 className="text-lg font-semibold uppercase">Planning</h1>
                <div className="w-40 h-1 bg-[#f3b841]"></div>
                <p className="mb-12 mt-4 text-s lg:text-lg font-normal align-middle">Discover the comprehensive feasibility study, goal-setting processes, and strategic planning that underpin the project’s foundation.</p>

                <h1 className="text-lg font-semibold uppercase">Development</h1>
                <div className="w-40 h-1 bg-[#f3b841]"></div>
                <p className="mb-12 mt-4 text-s lg:text-lg font-normal align-middle">Gain insights into the creation of the digital currency, trading platform, digital bank, and payment system that form the core infrastructu</p>

                <h1 className="text-lg font-semibold uppercase">Testing</h1>
                <div className="w-40 h-1 bg-[#f3b841]"></div>
                <p className="mb-12 mt-4 text-s lg:text-lg font-normal align-middle">Understand the rigorous testing phases that ensure reliability and security across all aspects of the ecosystem.</p>

                <h1 className="text-lg font-semibold uppercase">Launch</h1>
                <div className="w-40 h-1 bg-[#f3b841]"></div>
                <p className="mb-12 mt-4 text-s lg:text-lg font-normal align-middle">Celebrate the milestones of introducing the digital currency, trading platform, and digital bank to the public, accompanied by effective promotional efforts.</p>

                <h1 className="text-lg font-semibold uppercase">Expansion</h1>
                <div className="w-40 h-1 bg-[#f3b841]"></div>
                <p className="mb-12 mt-4 text-s lg:text-lg font-normal align-middle">Explore the strategies for growing the work team, enhancing services, and building strategic partnerships to broaden the project’s reach.</p>

                <h1 className="text-lg font-semibold uppercase">Sustainability</h1>
                <div className="w-40 h-1 bg-[#f3b841]"></div>
                <p className="mb-12 mt-4 text-s lg:text-lg font-normal align-middle">Delve into the ongoing efforts to improve services, enhance security, adopt advanced technologies, and expand into new markets.</p>

                <h1 className="text-lg font-semibold uppercase">Main Objectives</h1>
                <div className="w-40 h-1 bg-[#f3b841]"></div>
                <p className="mb-12 mt-4 text-s lg:text-lg font-normal align-middle">Reflect on the overarching goals of establishing the first digital dinar, facilitating seamless digital financial transactions, enhancing financial stability, and promoting financial integration among Arab countries.</p>

                <p className="mb-12 mt-4 text-s lg:text-lg font-normal align-middle">Through the Dinar Coin Metaverse, members can stay informed and actively participate in the journey of building a groundbreaking digital financial ecosystem.</p>
            </div>

            {/*-------------------------------------------------------*/}
            <div className="flex justify-center mt-16">
                <div className="bg-black text-center py-4 px-4 rounded-lg shadow-lg max-w-96">
                    <h2 className="text-lg lg:text-3xl font-semibold uppercase">
                        Work Team
                    </h2>
                </div>
            </div>
            <div className="flex items-center justify-center mt-6">
                <div className="text-left">
                    <h1 className="text-s lg:text-lg font-normal">Founder and CEO</h1>
                    <h1 className="text-s lg:text-lg font-normal">CTO</h1>
                    <h1 className="text-s lg:text-lg font-normal">Marketing Manager</h1>
                    <h1 className="text-s lg:text-lg font-normal">Finance Manager</h1>
                    <h1 className="text-s lg:text-lg font-normal">Development Team</h1>
                </div>
            </div>

        </div>
    );
};

export default Contectpaper;