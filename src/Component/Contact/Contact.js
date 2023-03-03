import React from 'react';

const Contact = () => {
    return (
        <div className="mt-20 bg-black py-10" id="contact-container">
            <div>
                <h1
                    className="text-center text-white border-2 border-white text-xl bg-blue-500 rounded-lg w-fit mx-auto p-5 mb-10">
                    Contact Us</h1>
                <h2 className="text-center text-white text-xl">We are always ready to answer your queries</h2>
                <div className="w-3/6 mx-auto mt-20">
                    <div className="flex flex-wrap gap-x-10 text-white items-center my-10">
                        <h2>You can contact us via: </h2>
                        <i
                            className="bg-black text-white rounded-full p-2 border-2 border-white fa-solid text-5xl hover:bg-blue-500 cursor-pointer fa-envelope "></i>
                        <h1>OR</h1>
                        <i
                            className="bg-black text-white rounded-full p-2 border-2 border-white fa-solid text-5xl hover:bg-blue-500 cursor-pointer fa-phone"></i>
                        <h1>OR</h1>
                    </div>
                    <h3 className="text-white">Filling this contact form:</h3>
                    {/* <!-- contact form starts here --> */}
                    <div className="mt-5 ">
                        <form>
                            <div className="form-control w-full max-w-xs ">
                                <label className="label">
                                    <span className="label-text text-white">What is your First name?</span>
                                </label>
                                <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">What is your Last name?</span>
                                </label>
                                <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">What is Email Address?</span>
                                </label>
                                <input type="email" placeholder="Email Address"
                                    className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">What is your Phone Number?</span>
                                </label>
                                <input type="tel" placeholder="Phone Number" className="input input-bordered w-full max-w-xs"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Query</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Message" required></textarea>
                            </div>
                            <button
                                className="text-center border-2 hover:text-blue-500 hover:bg-black rounded-lg w-fit mx-auto p-3 mt-5 mb-10 text-xl text-white bg-blue-600 border-white">Submit</button>
                        </form>
                    </div>
                    {/* <!-- contact form ends here --> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;