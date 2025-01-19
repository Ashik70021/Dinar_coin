import planning from '../../public/image/planning.jpg'
import development from '../../public/image/development.jpeg'
import testing from '../../public/image/testing.jpg'
import launch from '../../public/image/logo2.jpg'
import expansion from '../../public/image/expansion.jpg'
import sustainability from '../../public/image/sustainablity.jpg'
import mainobject from '../../public/image/dinarcoin.jpg'

const DinarCoinSection = () => {
    return (
        <section className="bg-[#161614] text-white py-16">
            <h1 className="text-4xl font-bold text-center mb-8">
            <span className="text-[#f3b841]">DINAR COIN</span> Project Whitepaper
            </h1>
            <div className="mb-6 flex flex-col md:flex-row items-center justify-center bg-black rounded-lg p-8 mx-4 md:mx-auto max-w-4xl">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img
                        src={planning}
                        alt="Dinar Coin"
                        className="rounded-lg max-w-[70%] max-w-[60%]"
                    />
                </div>
                {/* Right Side: Text */}
                <div className="pl-16 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4 text-[#f3b841]">Planning</h2>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Feasibility study of the project</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Determining goals and objectives</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Establishing the work team</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Developing the business plan</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* ------------------------------------------------------------ */}

            <div className="mb-6 flex flex-col md:flex-row items-center justify-center bg-black rounded-lg p-8 mx-4 md:mx-auto max-w-4xl">
                {/* Right Side: Text */}
                <div className="lg:pl-20 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4 text-[#f3b841]">Development</h2>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Developing the digital currency</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Creating the trading platform</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Developing the digital bank</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Creating the payment system</span>
                        </li>
                    </ul>
                </div>
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img
                        src={development}
                        alt="Dinar Coin"
                        className="rounded-lg max-w-[70%] max-h-[60%]"
                    />
                </div>
            </div>
            {/* ------------------------------------------------------------ */}

            <div className="mb-6 flex flex-col md:flex-row items-center justify-center bg-black rounded-lg p-8 mx-4 md:mx-auto max-w-4xl">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img
                        src={testing}
                        alt="Dinar Coin"
                        className="rounded-lg max-w-[70%] max-w-[60%]"
                    />
                </div>
                {/* Right Side: Text */}
                <div className="pl-16 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4 text-[#f3b841]">Testing</h2>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Testing the digital currency</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Testing the trading platform</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Testing the digital bank</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Debugging</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* ------------------------------------------------------------ */}

            <div className="mb-6 flex flex-col md:flex-row items-center justify-center bg-black rounded-lg p-8 mx-4 md:mx-auto max-w-4xl">
                {/* Right Side: Text */}
                <div className="lg:pl-20 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4 text-[#f3b841]">Launch</h2>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Launching the digital currency</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Launching the trading platform</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Launching the digital bank</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Promoting the project</span>
                        </li>
                    </ul>
                </div>
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img
                        src={launch}
                        alt="Dinar Coin"
                        className="rounded-lg max-w-[60%]"
                    />
                </div>
            </div>
            {/* ------------------------------------------------------------ */}

            <div className="mb-6 flex flex-col md:flex-row items-center justify-center bg-black rounded-lg p-8 mx-4 md:mx-auto max-w-4xl">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img
                        src={expansion}
                        alt="Dinar Coin"
                        className="rounded-lg max-w-[70%] max-w-[60%]"
                    />
                </div>
                {/* Right Side: Text */}
                <div className="pl-16 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4 text-[#f3b841]">Expansion</h2>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Expanding the work team</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Developing services</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Enhancing promotion</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Completing strategic partnerships</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* ------------------------------------------------------------ */}

            <div className="mb-6 flex flex-col md:flex-row items-center justify-center bg-black rounded-lg p-8 mx-4 md:mx-auto max-w-4xl">
                {/* Right Side: Text */}
                <div className="lg:pl-20 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4 text-[#f3b841]">Sustainability</h2>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Improving services</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Enhancing security</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Developing technology</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Expanding into new markets</span>
                        </li>
                    </ul>
                </div>
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img
                        src={sustainability}
                        alt="Dinar Coin"
                        className="rounded-lg max-w-[60%]"
                    />
                </div>
            </div>
            {/* ------------------------------------------------------------ */}

            <div className="mb-6 flex flex-col md:flex-row items-center justify-center bg-black rounded-lg p-8 mx-4 md:mx-auto max-w-4xl">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img
                        src={mainobject}
                        alt="Dinar Coin"
                        className="rounded-lg max-w-[70%] max-w-[60%]"
                    />
                </div>
                {/* Right Side: Text */}
                <div className="pl-16 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4 text-[#f3b841]">Main objectives</h2>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Establishing the first digital currency for the dinar</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Facilitating digital financial transactions</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Enhancing financial stability</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#f38441] mr-2">-</span>
                            <span>Supporting the financial integration of Arab countries</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* ------------------------------------------------------------ */}
        </section>
    );
};

export default DinarCoinSection;
