import { PieChart } from "react-minimal-pie-chart";

const Distribution = () => {
    const data = [
        { title: "Initial Investment (20%)", value: 20, color: "#FF6384" },
        { title: "Founders & Developers (15%)", value: 15, color: "#36A2EB" },
        { title: "Public Investment (30%)", value: 30, color: "#FFCE56" },
        { title: "Strategic Partnerships (10%)", value: 10, color: "#4BC0C0" },
        { title: "Promotional Programs (25%)", value: 25, color: "#9966FF" },
    ];

    return (
        <div className="bg-[#000000] border-t-2 border-t-[#f3b841] text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-16 text-[#f3b841]">
                    Distribution of 1 Billion Coins
                </h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Pie Chart */}
                    <div className="w-full max-w-sm">
                        <PieChart
                            data={data}
                            lineWidth={25}
                            paddingAngle={5}
                            label={({ dataEntry }) => `${dataEntry.value}%`}
                            labelStyle={{
                                fontSize: "6px",
                                fontWeight: "bold",
                                fill: "#fff",
                            }}
                            labelPosition={70}
                            animate
                        />
                    </div>

                    {/* Chart Description */}
                    <div className="text-left">
                        <ul className="space-y-4">
                            {data.map((entry, index) => (
                                <li
                                    key={index}
                                    className="flex items-center space-x-4"
                                >
                                    <span
                                        className="block w-6 h-6 rounded-full"
                                        style={{ backgroundColor: entry.color }}
                                    ></span>
                                    <p className="text-xl font-semibold">
                                        {entry.title}:{" "}
                                        <span className="text-[#f3b841]">
                                            {entry.value * 10} million
                                        </span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Distribution;
