import React from "react";
import { Link } from "react-router-dom";

const TopPicks = () => {
    return (
        <div className="pt-10">
            <h2 className="text-2xl font-bold pb-3">Top picks</h2>
            <p className="pb-3">
                Promotions, deals, and special offers for you
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div
                    className={`bg-[url('https://i.ibb.co/Rz788ff/relux.jpg')] bg-cover bg-gray-500 object-cover h-full w-full py-10`}
                >
                    <div className="px-7">
                        <h4 className="font-bold text-white">
                            Escape for a while
                        </h4>
                        <p className="text-white pt-5">
                            Enjoy the freedom of a monthly stay on <br />
                            Traveller.com
                        </p>
                        <Link
                            to=""
                            className=" bg-secondary hover:bg-primary transition duration-300 text-white px-3 py-2 inline-block mt-5 rounded-md font-medium"
                        >
                            Discover monthly stays
                        </Link>
                    </div>
                </div>
                <div
                    className={`bg-[url('https://i.ibb.co/3cS74Tn/travel.jpg')] bg-cover bg-gray-500 object-cover h-full w-full py-10`}
                >
                    <div className="px-7">
                        <h4 className="font-bold text-white">
                            Escape for a while
                        </h4>
                        <p className="text-white pt-5">
                            Save 15% or more when you book and stay <br />{" "}
                            before March 31, 2023
                        </p>
                        <Link
                            to=""
                            className=" bg-secondary hover:bg-primary transition duration-300 text-white px-3 py-2 inline-block mt-5 rounded-md font-medium"
                        >
                            Find Early 2023 Deals
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPicks;
