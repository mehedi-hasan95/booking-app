import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
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
                modules={[Navigation, Autoplay]}
                className="pb-10 swiperSlider"
                loop={true}
                autoplay={{ delay: 2000 }}
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
                            src="https://images.unsplash.com/photo-1642832520839-a30ac9bcadd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                            className="w-full hover:scale-110 transition duration-300"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>28 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                            className="w-full hover:scale-110 transition duration-300"
                        />
                        <h4 className="text-xl font-bold">Khulna</h4>
                        <p>46 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1500904156668-758cff89dcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                            className="w-full hover:scale-110 transition duration-300"
                        />
                        <h4 className="text-xl font-bold">Dhaka</h4>
                        <p>49 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1677758363734-aa22dfc62550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                            className="w-full hover:scale-110 transition duration-300"
                        />
                        <h4 className="text-xl font-bold">Rajshahi</h4>
                        <p>12 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1677758363734-aa22dfc62550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                            className="w-full hover:scale-110 transition duration-300"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1677680062704-a49d4c44ab3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                            alt=""
                            className="w-full hover:scale-110 transition duration-300"
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
                                <img
                                    src={img}
                                    alt=""
                                    className="w-full h-60 hover:scale-110 transition duration-300"
                                />
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
