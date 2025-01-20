import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-[#161614] py-4 px-8 my-4 mx-12 rounded-full flex justify-between items-center">
      {/* Logo */}
      <div className="text-[#f3b841] font-bold text-xl lg:text-2xl">
        <span className="text-white">DINAR</span> COIN
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-white text-lg lg:text-xl font-medium">
        <li className="hover:text-[#DEC17D] cursor-pointer"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-[#DEC17D] cursor-pointer">Contract Address</li>
        <li className="hover:text-[#DEC17D] cursor-pointer">How to Buy</li>
        <li className="hover:text-[#DEC17D] cursor-pointer"><NavLink to="/whitepaper">Whitepaper</NavLink></li>
      </ul>

      {/* Buy Now Button (Visible on desktop) */}
      <button className="hidden md:block bg-[#f3b841] text-[#161614] px-6 py-2 rounded-md font-bold text-sm hover:scale-105 transition-transform">
        Coming Soon
      </button>

      {/* Mobile Sidebar Button */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-[#161614] bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6">
          <button
            onClick={toggleSidebar}
            className="absolute top-5 right-5 text-white text-lg lg:text-xl focus:outline-none"
          >
            ✕
          </button>
          <ul className="space-y-6 text-white text-lg font-medium">
            <li className="hover:text-[#DEC17D] cursor-pointer" onClick={toggleSidebar}><NavLink to="/">Home</NavLink></li>
            <li className="hover:text-[#DEC17D] cursor-pointer" onClick={toggleSidebar}>Contract Address</li>
            <li className="hover:text-[#DEC17D] cursor-pointer" onClick={toggleSidebar}>How to Buy</li>
            <li className="hover:text-[#DEC17D] cursor-pointer" onClick={toggleSidebar}><NavLink to="/whitepaper">Whitepaper</NavLink></li>
          </ul>
          <button
            onClick={toggleSidebar}
            className="bg-[#f3b841] text-[#161614] px-8 py-3 rounded-md font-bold text-lg hover:scale-105 transition-transform"
          >
            Coming Soon
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
