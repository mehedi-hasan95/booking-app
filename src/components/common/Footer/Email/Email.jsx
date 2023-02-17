import React from "react";

const Email = () => {
    return (
        <div className="bg-[#00224F]">
            <div className="max-w-6xl mx-auto py-16 text-center">
                <h2 className="text-white text-2xl">Save time, save money!</h2>
                <p className="text-gray-300">
                    Sign up and we'll send the best deals to you
                </p>
                <div className="flex max-w-lg mx-auto gap-1 pt-4">
                    <input
                        type="email"
                        name=""
                        id=""
                        className="flex-auto flex-3/4 rounded-md px-3"
                        placeholder="Your email address"
                    />
                    <input
                        type="submit"
                        value="Subscribe"
                        className="bg-secondary hover:bg-primary flex-none text-white transition duration-300 rounded-lg px-4 py-2 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Email;
