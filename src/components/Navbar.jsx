import React from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
            <div className="flex items-center gap-2 ml-0 md:ml-15">
                <img className="w-15 md:w-15 " src={logo} alt=""  />
                <h2 className="text-3xl font-bold">Taxi <span className="text-[#FFB800]">kitchen</span></h2>
            </div>
            <div className="flex gap-5 md:gap-10 text-lg md:text-2xl overflow-x-auto md:overflow-visible pb-2 md:pb-0 mr-0 md:mr-15">
                <h2 className="font-medium border-b-4 border-[#FFB800] pb-1">Orders</h2>
                <h2 className="font-medium border-b-4 border-[#FFB800] pb-1">Foods</h2>
                <h2 className="font-medium border-b-4 border-[#FFB800] pb-1">Tables</h2>
                <h2 className="font-medium border-b-4 border-[#FFB800] pb-1">Logout</h2>
            </div>
        </div>
        
    );
};

export default Navbar;