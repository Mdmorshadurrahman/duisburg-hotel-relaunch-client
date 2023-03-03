import React from 'react';
import '../Header/Header.css';

const Header = () => {
    return (
        <div id='header'>
            <div class="flex flex-col justify-center items-center gap-5 h-full">
                <h1 class="text-white max-sm:text-3xl sm:text-5xl font-semibold"><i
                    class="fa-solid fa-hotel text-blue-500 border-2 border-white bg-black rounded-lg p-2"></i> HOTEL
                    DUISBURG</h1>
                <p class="max-sm:text-base sm:text-xl font-light text-gray-200">Where You can find your comfort and
                    relaxation</p>
                <a href="#contact-container"><button
                    class="text-center border-2 hover:text-blue-500 hover:bg-black rounded-lg w-fit mx-auto p-3 mb-10 text-xl text-white bg-blue-500 border-white">Contact
                    Us</button></a>
            </div>
        </div>
    );
};

export default Header;