import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const HotelList = () => {
    const location = useLocation();
    const [distination, setDistination] = useState(location.state.distination);
    const [pickDate, setPickDate] = useState(location.state.pickDate);
    const [rentRoom, setRentRoom] = useState(location.state.rentRoom);

    const [openDate, setOpenDate] = useState(false);
    const [openRoom, setOpenRoom] = useState(false);
    console.log(distination);

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
        <div className="container lg:max-w-6xl mx-auto py-5">
            <div className="flex gap-5">
                <div className="flex-auto w-1/3 bg-yellowish px-4 py-6 rounded-lg">
                    <h2 className="text-xl">Search</h2>
                    <div className="mb-2">
                        <label htmlFor="destination">
                            Destination/property name:
                        </label>
                        <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                            <BsSearch />
                            <input
                                onBlur={(e) => setDistination(e.target.value)}
                                type="text"
                                name="destination"
                                id="destination"
                                className="outline-none"
                                defaultValue={distination}
                            />
                        </div>
                    </div>
                    <div className="mb-2 relative">
                        <label htmlFor="date">Check in - out Date</label>
                        <div className="flex items-center bg-white px-3 py-2 rounded-md">
                            <div className="flex items-center gap-3 flex-auto w-full relative">
                                <AiOutlineCalendar className="text-xl" />
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="outline-none w-full text-black placeholder-black font-medium cursor-pointer select-none"
                                >
                                    {format(
                                        pickDate[0].startDate,
                                        "dd/MM/yyyy"
                                    )}{" "}
                                    to
                                    {format(pickDate[0].endDate, " dd/MM/yyyy")}
                                </span>
                                {openDate && (
                                    <div className=" absolute top-8 z-10">
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
                            <FaAngleDown />
                        </div>
                    </div>
                    <div className="mb-2 relative">
                        <label htmlFor="room">Room</label>
                        <div className="flex items-center justify-between bg-white px-3 py-2 rounded-md relative">
                            <span
                                onClick={() => setOpenRoom(!openRoom)}
                                className="cursor-pointer outline-none placeholder-black select-none"
                            >
                                {`${rentRoom.adult} adult - ${rentRoom.child} child - ${rentRoom.room} room`}
                            </span>
                            <FaAngleDown />
                            {openRoom && (
                                <div className="absolute top-12 w-full shadow-lg p-5 rounded-md z-10 bg-white">
                                    <div className="flex justify-between items-center mb-3">
                                        <p>Adult:</p>
                                        <div className="flex justify-between gap-6">
                                            <button
                                                disabled={rentRoom.adult <= 1}
                                                onClick={() =>
                                                    handleRoomRent("adult", "d")
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
                                                    handleRoomRent("adult", "i")
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
                                                disabled={rentRoom.child <= 0}
                                                onClick={() =>
                                                    handleRoomRent("child", "d")
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
                                                    handleRoomRent("child", "i")
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
                                                disabled={rentRoom.room <= 1}
                                                onClick={() =>
                                                    handleRoomRent("room", "d")
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
                                                    handleRoomRent("room", "i")
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
                    </div>
                    <input
                        type="submit"
                        value="Search"
                        className=" bg-secondary hover:bg-primary transition duration-300 rounded-md block px-4 py-2 w-full cursor-pointer text-white font-medium text-xl "
                    />
                </div>
                <div className="flex-auto w-3/4">
                    <h1 className="bg-purple-400">Bg</h1>
                </div>
            </div>
        </div>
    );
};

export default HotelList;
