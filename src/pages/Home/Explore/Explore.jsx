import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useQuery } from "@tanstack/react-query";

const Explore = () => {
    const { data: hotelType, isLoading } = useQuery({
        queryKey: ["hotelType"],
        queryFn: async () => {
            const res = await fetch(
                "http://localhost:5000/api/hotel/hotelType"
            );
            const data = await res.json();
            return data;
        },
    });
    const imgs = [
        "https://i.ibb.co/G5wZXXg/hotel.jpg",
        "https://i.ibb.co/85HS7rx/motel.jpg",
        "https://i.ibb.co/Y2405wx/resort.jpg",
        "https://i.ibb.co/285XLy6/apartment.jpg",
    ];
    return (
        <div className="pt-10">
            <h2 className="text-2xl font-bold">Explore Bangladesh</h2>
            <p className="pb-7 pt-2">
                These popular destinations have a lot to offer
            </p>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="py-10 swiperSlider"
                loop={true}
                spaceBetween={50}
                slidesPerView={3}
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
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://r-xx.bstatic.com/xdata/images/city/250x250/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o="
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://r-xx.bstatic.com/xdata/images/city/250x250/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o="
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://r-xx.bstatic.com/xdata/images/city/250x250/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o="
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://r-xx.bstatic.com/xdata/images/city/250x250/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o="
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://r-xx.bstatic.com/xdata/images/city/250x250/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o="
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://r-xx.bstatic.com/xdata/images/city/250x250/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o="
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Hotel Type  */}
            <div className="pt-10">
                <h2 className="text-2xl font-bold pb-5">
                    Browse by property type
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {hotelType &&
                        imgs.map((img, index) => (
                            <div className="" key={index}>
                                <img src={img} alt="" className="w-full h-60" />
                                <h4 className="text-xl font-bold capitalize">
                                    {hotelType[index].type}
                                </h4>
                                <p>
                                    {hotelType[index].count}{" "}
                                    {hotelType[index].type}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;
