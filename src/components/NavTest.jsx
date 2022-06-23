import React, { useState } from "react";
const Navbar =()=>{
    // grab everything we need
    // const btn = document.querySelector("button.mobile-menu-button");
    // const menu = document.querySelector(".mobile-menu");

    // add event listeners
    // btn.addEventListener("click", () => {
    // menu.classList.toggle("hidden");
    // });
        const [isHidden,setHidden] = useState('false');
        const handleToggle =()=>{
            setHidden(!isHidden);
        };
        return (
            <div>
                <nav className="bg-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between">
                            <div className="flex space-x-4">
                            <div>
                                <a href="" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                    <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span class="font-bold">Superman Shuvo</span>
                                </a>
                            </div>
                            {/* primary nav */}
                                <div className="hidden md:flex items-center space-x-3">
                                    <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                                    <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
                                </div>
                            </div>
                            {/* Secondary nav */}
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="" className="py-5 px-3">LogIn</a>
                                <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                            </div>
                            {/*  mobile button goes here */}
                            <div className="md:hidden flex items-center">
                                <button onClick={handleToggle} className="mobile-menu-button">
                                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile nav here */}
                    <div className={`${isHidden ? 'hidden':''} md:hidden`}>
                        <a href="" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                        <a href="" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
                    </div>
                </nav>
                <div className="py-32 text-center">
                    <h2 className="font-extrabold text-4xl">NavBars in Tailwind!</h2>
                </div>
            </div>
        );
}

export default Navbar;