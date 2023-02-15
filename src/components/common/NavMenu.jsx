import React from "react";
import { Link } from "react-router-dom";
import { IoIosAirplane, IoIosBed, IoIosSettings } from "react-icons/io";
import { FaCarSide, FaTaxi } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const NavMenu = () => {
    return (
        <div className="bg-primary">
            <div className="max-w-6xl mx-auto py-5 relative">
                <div className="flex justify-between items-center">
                    <Link className="text-white text-2xl font-bold" to="/">
                        Booking.com
                    </Link>
                    <div className="flex gap-6">
                        <Link
                            className="bg-white px-4 py-1 text-secondary font-medium"
                            to=""
                        >
                            Register
                        </Link>
                        <Link
                            className="bg-white px-4 py-1 text-secondary font-medium"
                            to=""
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
                <div className="pt-7">
                    <ul className="flex items-center gap-10">
                        <li>
                            <Link
                                to=""
                                className="text-white flex items-center gap-2"
                            >
                                <IoIosBed className="text-2xl" /> Stays
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=""
                                className="text-white flex items-center gap-2"
                            >
                                <IoIosAirplane className="text-2xl" /> Flights
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=""
                                className="text-white flex items-center gap-2"
                            >
                                <FaCarSide className="text-2xl" /> Car rentals
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=""
                                className="text-white flex items-center gap-2"
                            >
                                <IoIosSettings className="text-2xl" />{" "}
                                Attractions
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=""
                                className="text-white flex items-center gap-2"
                            >
                                <FaTaxi className="text-2xl" /> Airport taxis
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="py-16">
                    <h2 className="text-5xl font-bold text-white">
                        Find your next stay
                    </h2>
                    <h4 className="text-2xl text-white pt-2">
                        Search deals on hotels, homes, and much more...
                    </h4>
                </div>
                <div className="flex gap-1 justify-between border-4 bg-yellow-400 border-yellow-400 absolute -bottom-6 w-full">
                    <div className="flex items-center px-3 gap-3 w-full bg-white">
                        <IoIosBed className="text-2xl" />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Whare are you going?"
                            className="outline-none w-full text-black placeholder-black font-medium"
                        />
                    </div>
                    <div className="flex items-center px-3 gap-3 w-full bg-white">
                        <AiOutlineCalendar className="text-2xl" />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Check-in Date - Check-out Date"
                            className="outline-none w-full text-black placeholder-black font-medium"
                        />
                    </div>
                    <div className="flex items-center px-3 gap-3 w-full bg-white">
                        <BsPerson className="text-2xl" />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="1 adult - 0 child - 1 room"
                            className="outline-none w-full text-black placeholder-black font-medium"
                        />
                    </div>
                    <button className="bg-blue-600 px-5 py-3">Search</button>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
