import React from 'react';
import '../Services/Services.css';

const Services = () => {
    return (
        <div className="w-5/6 mx-auto my-48">
            <h1
                className="text-center text-white border-2 border-white text-xl bg-blue-500 rounded-lg w-fit mx-auto p-5 mb-10">
                Services</h1>
            <div className="carousel rounded-lg border-2 border-black carousel-container relative">
                {/* <!-- Room Service 24/7 --> */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qpcY5ZN/hotel-room-with-white-sheets.jpg" className="w-full" alt='image1' />
                    <div
                        className="absolute max-lg:flex-col lg:flex-row flex justify-center items-center gap-5 bottom-2/4 mx-auto w-full bg-transparent">
                        <i
                            className="bg-black text-white rounded-full p-2 border-2 border-white fa-solid fa-bell-concierge  max-sm:text-base max-lg:text-3xl lg:text-5xl hover:bg-blue-500  cursor-pointer"></i>
                        <input
                            className="font-light max-sm:text-base max-lg:text-3xl lg:text-5xl bg-black rounded-lg border-2 border-white "
                            type="text" placeholder="Room Service 24/7" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-black hover:bg-blue-500 ">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-black hover:bg-blue-500 ">❯</a>
                    </div>
                </div>
                {/* <!-- Massage & Spa --> */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/61sXT5Q/close-up-woman-getting-massage.jpg" className="w-full" alt='image2' />
                    <div
                        className="absolute flex justify-center items-center gap-5 bottom-2/4 mx-auto w-full bg-transparent">
                        <i
                            className="bg-black text-white rounded-full p-2 border-2 border-white fa-solid fa-spa max-sm:text-base max-lg:text-3xl lg:text-5xl hover:bg-blue-500  cursor-pointer"></i>
                        <input
                            className="font-light max-sm:text-base max-lg:text-3xl lg:text-5xl bg-black rounded-lg border-2 border-white"
                            type="text" placeholder="Massage & Spa" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-black hover:bg-blue-500 ">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-black hover:bg-blue-500 ">❯</a>
                    </div>
                </div>
                {/* <!-- Laundry Service --> */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/vHmgMKF/white-towels-drying-clotheshorse.jpg" className="w-full" alt='image3' />
                    <div
                        className="absolute flex justify-center items-center gap-5 bottom-2/4 mx-auto w-full bg-transparent">
                        <i
                            className="bg-black text-white rounded-full p-2 border-2 border-white fa-solid fa-shirt max-sm:text-base max-lg:text-3xl lg:text-5xl hover:bg-blue-500  cursor-pointer"></i>
                        <input
                            className="font-light max-sm:text-base max-lg:text-3xl lg:text-5xl bg-black rounded-lg border-2 border-white"
                            type="text" placeholder="Laundry Service" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-black hover:bg-blue-500 ">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-black hover:bg-blue-500 ">❯</a>
                    </div>
                </div>
                {/* <!-- Currency Exchange --> */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3SvTQBB/map-world-with-money-magnifying-glass.jpg" className="w-full" alt='image4' />
                    <div
                        className="absolute flex justify-center items-center gap-5 bottom-2/4 mx-auto w-full bg-transparent">
                        <i
                            className="bg-black text-white rounded-full p-2 border-2 border-white fa-solid fa-coins max-sm:text-base max-lg:text-3xl lg:text-5xl hover:bg-blue-500  cursor-pointer"></i>
                        <input
                            className="font-light max-sm:text-base max-lg:text-3xl lg:text-5xl bg-black rounded-lg border-2 border-white"
                            type="text" placeholder="Currency Exchange" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-black hover:bg-blue-500 ">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-black hover:bg-blue-500 ">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;