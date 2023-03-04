import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../components/Loading";

const Featured = () => {
    const { data: topHotel, isLoading } = useQuery({
        queryKey: ["topHotel"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/api/hotel/cityHotel?cities=Jessore,khulna,kolkata,singapore,bangkok`
            );
            const data = res.json();
            return data;
        },
    });
    if (isLoading) return <Loading />;
    return (
        <div className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                    className={`bg-[url('https://i.ibb.co/k97xRBv/dhaka.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full featured-top`}
                >
                    <div className="featured-bg">
                        <div className=" absolute top-5 left-5 ">
                            <h2 className="flex items-center gap-3 text-2xl text-white font-bold">
                                Jessore{" "}
                                <span>
                                    <img
                                        src="https://i.ibb.co/4J4VrGb/bangladesh.png"
                                        alt=""
                                    />
                                </span>
                            </h2>
                            <h3 className="text-xl">
                                Total Hotel: {topHotel[0]}
                            </h3>
                        </div>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 1,136.87</span>
                    </div>
                </div>
                <div
                    className={`bg-[url('https://i.ibb.co/z7rsrcN/rupsa.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full featured-top`}
                >
                    <div className="featured-bg">
                        <div className=" absolute top-5 left-5 ">
                            <h2 className="flex items-center gap-3 text-2xl text-white font-bold">
                                Khulna{" "}
                                <span>
                                    <img
                                        src="https://i.ibb.co/4J4VrGb/bangladesh.png"
                                        alt=""
                                    />
                                </span>
                            </h2>
                            <h3 className="text-xl">
                                Total Hotel: {topHotel[1]}
                            </h3>
                        </div>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 1,036.87</span>
                    </div>
                </div>
            </div>
            {/* 3 cols  */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
                <div
                    className={`bg-[url('https://i.ibb.co/9c0hW5X/kolkata.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full featured-top`}
                >
                    <div className="featured-bg">
                        <div className=" absolute top-5 left-5 ">
                            <h2 className="flex items-center gap-3 text-2xl text-white font-bold">
                                Kolkata{" "}
                                <span>
                                    <img
                                        src="https://i.ibb.co/X2Wsdfk/india.png"
                                        alt=""
                                    />
                                </span>
                            </h2>
                            <h3 className="text-xl">
                                Total Hotel: {topHotel[2]}
                            </h3>
                        </div>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 1,300.00</span>
                    </div>
                </div>
                <div
                    className={`bg-[url('https://i.ibb.co/d0Y6yp0/Singapore.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full featured-top`}
                >
                    <div className="featured-bg">
                        <div className=" absolute top-5 left-5 ">
                            <h2 className="flex items-center gap-3 text-2xl text-white font-bold">
                                Singapore{" "}
                                <span>
                                    <img
                                        src="https://i.ibb.co/tLzGWS6/singapore.png"
                                        alt=""
                                    />
                                </span>
                            </h2>
                            <h3 className="text-xl">
                                Total Hotel: {topHotel[3]}
                            </h3>
                        </div>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 2,231.17</span>
                    </div>
                </div>
                <div
                    className={`bg-[url('https://i.ibb.co/4gFy9d1/Kuala-Lumpur.jpg')] object-cover bg-cover bg-no-repeat relative h-64 w-full featured-top`}
                >
                    <div className="featured-bg">
                        <div className=" absolute top-5 left-5 ">
                            <h2 className="flex items-center gap-3 text-2xl text-white font-bold">
                                Bangkok{" "}
                                <span>
                                    <img
                                        src="https://i.ibb.co/3YsQwhC/honglong.png"
                                        alt=""
                                    />
                                </span>
                            </h2>
                            <h3 className="text-xl">
                                Total Hotel: {topHotel[4]}
                            </h3>
                        </div>
                    </div>
                    <div className=" absolute bottom-5 right-5 bg-orange-700 text-white font-semibold text-xl p-3">
                        <p>Deals start at</p>
                        <span>BDT 1,364.00</span>
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
                        <img
                            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            alt=""
                        />
                        <h2 className="text-xl font-bold">
                            Top places in Japan to see cherry blossoms
                        </h2>
                        <p>
                            For picture-perfect scenes and picnics, head to
                            Japan for sakura season.
                        </p>
                    </div>
                    <div className="flex-auto w-1/4">
                        <img
                            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                        />
                        <h2 className="text-xl font-bold">
                            Top places in Japan to see cherry blossoms
                        </h2>
                        <p>
                            For picture-perfect scenes and picnics, head to
                            Japan for sakura season.
                        </p>
                    </div>
                    <div className="flex-auto w-1/4">
                        <img
                            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                        />
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
