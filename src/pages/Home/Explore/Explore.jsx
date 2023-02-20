import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Explore = () => {
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
                <div className="flex gap-5">
                    <div className="flex-1">
                        <img
                            src="https://i.ibb.co/ZYWskdY/hotel.jpg"
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://i.ibb.co/ZYWskdY/hotel.jpg"
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://i.ibb.co/ZYWskdY/hotel.jpg"
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://i.ibb.co/ZYWskdY/hotel.jpg"
                            alt=""
                            className="w-full"
                        />
                        <h4 className="text-xl font-bold">Jessore</h4>
                        <p>49 properties</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
