import { useQuery } from "@tanstack/react-query";
import React from "react";

const Featured = () => {
    const {
        data: topHotel,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["repoData"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/api/hotel/cityHotel?cities=Jessore,khulna,kolkata,singapore,bangkok`
            );
            const data = res.json();
            return data;
        },
    });
    console.log(topHotel);
    return (
        <div className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                    className={`bg-[url('https://i.ibb.co/k97xRBv/dhaka.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full`}
                >
                    <div className=" absolute top-5 left-5 ">
                        <h2 className="flex items-center gap-3 text-2xl">
                            Jessore{" "}
                            <span>
                                <img
                                    src="https://i.ibb.co/4J4VrGb/bangladesh.png"
                                    alt=""
                                />
                            </span>
                        </h2>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 1,136.87</span>
                    </div>
                </div>
                <div
                    className={`bg-[url('https://i.ibb.co/k97xRBv/dhaka.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full`}
                >
                    <div className=" absolute top-5 left-5 ">
                        <h2 className="flex items-center gap-3 text-2xl">
                            Dhaka{" "}
                            <span>
                                <img
                                    src="https://i.ibb.co/4J4VrGb/bangladesh.png"
                                    alt=""
                                />
                            </span>
                        </h2>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 1,136.87</span>
                    </div>
                </div>
            </div>
            {/* 3 cols  */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
                <div
                    className={`bg-[url('https://i.ibb.co/k97xRBv/dhaka.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full`}
                >
                    <div className=" absolute top-5 left-5 ">
                        <h2 className="flex items-center gap-3 text-2xl">
                            Dhaka{" "}
                            <span>
                                <img
                                    src="https://i.ibb.co/4J4VrGb/bangladesh.png"
                                    alt=""
                                />
                            </span>
                        </h2>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 1,136.87</span>
                    </div>
                </div>
                <div
                    className={`bg-[url('https://i.ibb.co/k97xRBv/dhaka.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full`}
                >
                    <div className=" absolute top-5 left-5 ">
                        <h2 className="flex items-center gap-3 text-2xl">
                            Dhaka{" "}
                            <span>
                                <img
                                    src="https://i.ibb.co/4J4VrGb/bangladesh.png"
                                    alt=""
                                />
                            </span>
                        </h2>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 1,136.87</span>
                    </div>
                </div>
                <div
                    className={`bg-[url('https://i.ibb.co/k97xRBv/dhaka.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full`}
                >
                    <div className=" absolute top-5 left-5 ">
                        <h2 className="flex items-center gap-3 text-2xl">
                            Dhaka{" "}
                            <span>
                                <img
                                    src="https://i.ibb.co/4J4VrGb/bangladesh.png"
                                    alt=""
                                />
                            </span>
                        </h2>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 1,136.87</span>
                    </div>
                </div>
            </div>

            {/* inspration  */}
            <div>
                <h2 className="text-2xl font-bold py-7">
                    Get inspiration for your next trip
                </h2>
                <div className="flex gap-7">
                    <div className="flex-auto w-2/4">
                        <img src="https://i.ibb.co/rMGY1BV/flex.webp" alt="" />
                        <h2 className="text-xl font-bold">
                            Top places in Japan to see cherry blossoms
                        </h2>
                        <p>
                            For picture-perfect scenes and picnics, head to
                            Japan for sakura season.
                        </p>
                    </div>
                    <div className="flex-auto w-1/4">
                        <img src="https://i.ibb.co/rMGY1BV/flex.webp" alt="" />
                        <h2 className="text-xl font-bold">
                            Top places in Japan to see cherry blossoms
                        </h2>
                        <p>
                            For picture-perfect scenes and picnics, head to
                            Japan for sakura season.
                        </p>
                    </div>
                    <div className="flex-auto w-1/4">
                        <img src="https://i.ibb.co/rMGY1BV/flex.webp" alt="" />
                        <h2 className="text-xl font-bold">
                            Top places in Japan to see cherry blossoms
                        </h2>
                        <p>
                            For picture-perfect scenes and picnics, head to
                            Japan for sakura season.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
