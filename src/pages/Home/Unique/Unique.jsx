import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../components/Loading";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const Unique = () => {
    const { data: featuredHotel, isLoading } = useQuery({
        queryKey: ["featuredHotel"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/api/hotel?featured=true`
            );
            const data = res.json();
            return data;
        },
    });

    if (isLoading) return <Loading />;
    return (
        <div>
            <h2 className="text-2xl font-bold pt-7">
                Stay at our top unique properties
            </h2>
            <div className="flex gap-7">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="py-7 swiperSlider"
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={4}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            spaceBetween: 40,
                            slidesPerView: 2,
                        },
                        1024: {
                            spaceBetween: 50,
                            slidesPerView: 4,
                        },
                    }}
                >
                    {featuredHotel.map((hotel) => {
                        return (
                            <SwiperSlide key={hotel._id}>
                                <div className="">
                                    <img
                                        src="https://i.ibb.co/rMGY1BV/flex.webp"
                                        alt=""
                                    />
                                    <Link
                                        to={`/hotels/${hotel._id}`}
                                        className="text-lg font-bold"
                                    >
                                        {hotel.title}
                                    </Link>
                                    <p>
                                        {hotel?.city}, {hotel?.country}.
                                    </p>
                                    <p>
                                        Starting from{" "}
                                        <span className="font-bold">
                                            BDT {hotel?.price}
                                        </span>
                                    </p>
                                    <p className="pt-2">
                                        <span className="bg-blue-900 py-1 px-3 rounded-md font-bold text-white inline-block ">
                                            {hotel.rating}
                                        </span>
                                        <span> Very good </span>
                                        <span>27 reviews</span>
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Unique;
