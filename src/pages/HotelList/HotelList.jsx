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
                        <div className="flex items-center justify-between bg-white px-3 py-2 rounded-md">
                            <input
                                type="text"
                                name="room"
                                id="room"
                                className="cursor-pointer outline-none placeholder-black"
                                placeholder={`${rentRoom.adult} adult - ${rentRoom.child} child - ${rentRoom.room} room`}
                            />
                            <FaAngleDown />
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
