import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";

const SingleHotel = () => {
    const images = [
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
        { src: "https://i.ibb.co/HpYCh4D/hotel.jpg" },
    ];
    return (
        <div className="container mx-auto lg:max-w-6xl py-6">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl font-bold">
                        Sea Pearl Beach Resort & Spa Cox's Bazar
                    </h2>
                    <p className="flex gap-1 items-baseline py-2">
                        <span className="text-lg">
                            <FaMapMarkerAlt />
                        </span>{" "}
                        <span className="text-lg">Jessore, Bangladesh</span>
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
                        key={i}
                        className="object-cover w-full dark:bg-gray-500 aspect-square"
                        src={img.src}
                    />
                ))}
            </div>
            <div className="flex flex-col md:flex-row gap-5 pt-10">
                <div className="flex-auto w-full md:flex-3/4">
                    <p>
                        Facing the beachfront, Sea Pearl Beach Resort & Spa
                        Cox's Bazar offers 5-star accommodations in Cox's Bazar
                        and features an outdoor swimming pool, fitness center
                        and garden. This 5-star hotel offers a 24-hour front
                        desk and an ATM. The property provides free shuttle
                        service, room service and currency exchange for guests.
                        The hotel offers a buffet or continental breakfast. At
                        Sea Pearl Beach Resort & Spa Cox's Bazar you'll find a
                        restaurant serving American, Indian and Japanese
                        cuisine. A halal option can also be requested. The
                        accommodation has a sun terrace. You can play tennis at
                        this 5-star hotel, and car rental is available. The
                        nearest airport is Cox's Bazar Airport, 27.4 km from Sea
                        Pearl Beach Resort & Spa Cox's Bazar. Sea Pearl Beach
                        Resort & Spa Cox's Bazar has been welcoming Booking.com
                        guests since Aug 8, 2022 Distance in property
                        description is calculated using © OpenStreetMap
                    </p>
                </div>
                <div className="flex-auto w-full md:w-1/3 bg-green-100 px-5 py-6">
                    <h4 className="font-bold pb-2">Property Highlights</h4>
                    <h5 className="font-semibold pb-2">Breakfast Info</h5>
                    <p className="pb-2">Continental, Buffet</p>
                    <div className="flex gap-2 items-center pb-2">
                        <span>
                            <GiEarthAsiaOceania />
                        </span>
                        <span>See Ocean</span>
                    </div>
                    <p>Free parking available at the hotel</p>
                    <h3 className="text-lg font-bold py-2">
                        Perfect for 3 night stand
                    </h3>
                    <span className="text-lg font-bold">
                        $<span> 940 </span> <span>(9 days)</span>
                    </span>
                    <button className="bg-secondary hover:bg-primary transition duration-300 block w-full py-2 rounded-md text-lg font-bold text-white mt-3">
                        Reserve
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;
