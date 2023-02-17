import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosAirplane, IoIosBed, IoIosSettings } from "react-icons/io";
import { FaCarSide, FaTaxi } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const NavMenu = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [distination, setDistination] = useState("");
    const [pickDate, setPickDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openDate, setOpenDate] = useState(false);
    const [openRoom, setOpenRoom] = useState(false);
    const [rentRoom, setRentRoom] = useState({
        adult: 1,
        child: 0,
        room: 1,
    });

    const handleSearch = () => {
        navigate("/hotels", { state: { distination, pickDate, rentRoom } });
    };
    const handleRoomRent = (name, option) => {
        setRentRoom((opt) => {
            return {
                ...opt,
                [name]:
                    option === "i" ? rentRoom[name] + 1 : rentRoom[name] - 1,
            };
        });
    };

    return (
        <div className="bg-primary">
            <div className="container lg:max-w-6xl mx-auto py-5 relative">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Link className="text-white text-2xl font-bold" to="/">
                        Traveller.com
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
                    <ul className="flex flex-wrap items-center gap-10">
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
                {pathname === "/" && (
                    <>
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
                                    onBlur={(e) =>
                                        setDistination(e.target.value)
                                    }
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Whare are you going?"
                                    className="outline-none w-full text-black placeholder-black font-medium"
                                />
                            </div>
                            <div className="flex items-center px-3 gap-3 w-full bg-white relative">
                                <AiOutlineCalendar className="text-2xl" />
                                <input
                                    onClick={() => setOpenDate(!openDate)}
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder={`${format(
                                        pickDate[0].startDate,
                                        "dd/MM/yyyy"
                                    )} to ${format(
                                        pickDate[0].endDate,
                                        "dd/MM/yyyy"
                                    )}`}
                                    className="outline-none w-full text-black placeholder-black font-medium cursor-pointer"
                                />
                                {openDate && (
                                    <div className=" absolute top-12 z-10">
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={(item) =>
                                                setPickDate([item.selection])
                                            }
                                            moveRangeOnFirstSelection={false}
                                            ranges={pickDate}
                                            minDate={new Date()}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center px-3 gap-3 w-full bg-white relative">
                                <BsPerson className="text-2xl" />
                                <input
                                    onClick={() => setOpenRoom(!openRoom)}
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder={`${rentRoom.adult} adult - ${rentRoom.child} child - ${rentRoom.room} room`}
                                    className="outline-none w-full text-black placeholder-black font-medium cursor-pointer"
                                />
                                {openRoom && (
                                    <div className="absolute top-12 w-full shadow-lg p-5 rounded-md z-10 bg-white">
                                        <div className="flex justify-between items-center mb-3">
                                            <p>Adult:</p>
                                            <div className="flex justify-between gap-6">
                                                <button
                                                    disabled={
                                                        rentRoom.adult <= 1
                                                    }
                                                    onClick={() =>
                                                        handleRoomRent(
                                                            "adult",
                                                            "d"
                                                        )
                                                    }
                                                    className="bg-gray-300 px-3 py-1 text-secondary disabled:cursor-not-allowed disabled:text-gray-500"
                                                >
                                                    -
                                                </button>
                                                <button className="bg-gray-300 px-3 py-1">
                                                    {rentRoom.adult}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleRoomRent(
                                                            "adult",
                                                            "i"
                                                        )
                                                    }
                                                    className="bg-gray-300 px-3 py-1"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mb-3">
                                            <p>Child:</p>
                                            <div className="flex justify-between gap-6">
                                                <button
                                                    disabled={
                                                        rentRoom.child <= 0
                                                    }
                                                    onClick={() =>
                                                        handleRoomRent(
                                                            "child",
                                                            "d"
                                                        )
                                                    }
                                                    className="bg-gray-300 px-3 py-1 disabled:cursor-not-allowed disabled:text-gray-500"
                                                >
                                                    -
                                                </button>
                                                <button className="bg-gray-300 px-3 py-1">
                                                    {rentRoom.child}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleRoomRent(
                                                            "child",
                                                            "i"
                                                        )
                                                    }
                                                    className="bg-gray-300 px-3 py-1"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p>Room:</p>
                                            <div className="flex justify-between gap-6">
                                                <button
                                                    disabled={
                                                        rentRoom.room <= 1
                                                    }
                                                    onClick={() =>
                                                        handleRoomRent(
                                                            "room",
                                                            "d"
                                                        )
                                                    }
                                                    className="bg-gray-300 px-3 py-1 disabled:cursor-not-allowed disabled:text-gray-500"
                                                >
                                                    -
                                                </button>
                                                <button className="bg-gray-300 px-3 py-1">
                                                    {rentRoom.room}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleRoomRent(
                                                            "room",
                                                            "i"
                                                        )
                                                    }
                                                    className="bg-gray-300 px-3 py-1"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button
                                className="bg-blue-600 px-5 py-3"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavMenu;
