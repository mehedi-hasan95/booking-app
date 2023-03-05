import React, { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { SearchContext } from "../../AuthProvider/SearchContext";

const SingleHotel = () => {
    const {
        address,
        city,
        country,
        desc,
        distance,
        photos,
        price,
        rating,
        title,
        type,
    } = useLoaderData();

    // Context API for Dates
    const { pickDate } = useContext(SearchContext);

    const miliSeconds = 1000 * 60 * 60 * 24;
    function dayStay(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / miliSeconds);
        return diffDays;
    }

    const stayDays = dayStay(pickDate[0].endDate, pickDate[0].startDate);

    const images = [
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
        { src: "https://i.ibb.co/R3QTnF8/hotel2.jpg" },
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
        { src: "https://i.ibb.co/4YZQC9Z/hotel1.jpg" },
    ];
    const lastIndex = images.length - 1;
    const [imgIndex, setImgIndex] = useState(0);
    const [openImg, setOpenImg] = useState(false);
    const handleImg = (i) => {
        setImgIndex(i);
        setOpenImg(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = imgIndex === 0 ? lastIndex : imgIndex - 1;
        } else {
            newSlideNumber = imgIndex === lastIndex ? 0 : imgIndex + 1;
        }

        setImgIndex(newSlideNumber);
    };
    return (
        <div className="p-6">
            {openImg && (
                <div className="sticky top-0 flex mx-auto bg-gray-400/[0.9] justify-center h-screen py-10">
                    <div className="h-full w-full flex justify-center items-center relative overflow-hidden">
                        <span
                            onClick={() => setOpenImg(false)}
                            className=" absolute right-[10%] top-[5%] text-3xl border-2 rounded-full p-2 bg-slate-100 cursor-pointer"
                        >
                            <AiOutlineClose />
                        </span>
                        <span
                            className="-mr-10 text-white z-50 md:mr-10 text-3xl cursor-pointer"
                            onClick={() => handleMove("l")}
                        >
                            <FaArrowLeft />
                        </span>
                        <img
                            src={images[imgIndex].src}
                            alt=""
                            className="w-full md:max-w-5xl"
                        />
                        <span
                            className="-ml-10 md:ml-10 text-3xl text-white z-50 cursor-pointer"
                            onClick={() => handleMove("r")}
                        >
                            <FaArrowRight />
                        </span>
                    </div>
                </div>
            )}
            <div className="container mx-auto lg:max-w-6xl py-6">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="flex gap-1 items-baseline py-2">
                            <span className="text-lg">
                                <FaMapMarkerAlt />
                            </span>{" "}
                            <span className="text-lg capitalize">
                                {address}, {city}
                            </span>
                        </p>
                        <p className="text-xl font-bold text-secondary">
                            Free Taxi
                        </p>
                    </div>
                    <div>
                        <button className="bg-secondary hover:bg-primary transition duration-300 text-white px-4 py-2 rounded-md font-semibold">
                            Reserve
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                    {images.map((img, i) => (
                        <img
                            onClick={() => handleImg(i)}
                            key={i}
                            className="object-cover w-full dark:bg-gray-500 aspect-square"
                            src={img.src}
                        />
                    ))}
                </div>
                <div className="flex flex-col md:flex-row gap-5 pt-10">
                    <div className="flex-auto w-full md:flex-3/4">
                        <p>{desc}</p>
                    </div>
                    <div className="flex-auto w-full md:w-1/3 bg-green-100 px-5 py-6">
                        <h4 className="font-bold pb-2">Property Highlights</h4>
                        <h5 className="font-semibold pb-2">Breakfast Info</h5>
                        <p className="pb-2">
                            {city}, {country}
                        </p>
                        <div className="flex gap-2 items-center pb-2">
                            <span>
                                <GiEarthAsiaOceania />
                            </span>
                            <span>See Ocean</span>
                        </div>
                        <p>Free parking available at the hotel</p>
                        <h3 className="text-lg font-bold py-2">
                            Perfect for {stayDays} night stand
                        </h3>
                        <span className="text-lg font-bold">
                            $<span> {price * stayDays} </span>{" "}
                            <span>({stayDays} days)</span>
                        </span>
                        <button className="bg-secondary hover:bg-primary transition duration-300 block w-full py-2 rounded-md text-lg font-bold text-white mt-3">
                            Reserve
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;
