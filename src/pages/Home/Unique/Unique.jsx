import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../components/Loading";

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
            <h2 className="text-2xl font-bold py-7">
                Stay at our top unique properties
            </h2>
            <div className="flex gap-7">
                <div className="">
                    <img src="https://i.ibb.co/rMGY1BV/flex.webp" alt="" />
                    <h2 className="text-lg font-bold">
                        Top places in Japan to see cherry blossoms
                    </h2>
                    <p>Jessore, Bangladesh.</p>
                    <p>
                        Starting from{" "}
                        <span className="font-bold">BDT 17000</span>
                    </p>
                    <p className="pt-2">
                        <span className="bg-blue-900 p-1 rounded-md font-bold text-white inline-block ">
                            8.4
                        </span>
                        <span> Very good </span>
                        <span>27 reviews</span>
                    </p>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/rMGY1BV/flex.webp" alt="" />
                    <h2 className="text-lg font-bold">
                        Top places in Japan to see cherry blossoms
                    </h2>
                    <p>Jessore, Bangladesh.</p>
                    <p>
                        Starting from{" "}
                        <span className="font-bold">BDT 17000</span>
                    </p>
                    <p className="pt-2">
                        <span className="bg-blue-900 p-1 rounded-md font-bold text-white inline-block ">
                            8.4
                        </span>
                        <span> Very good </span>
                        <span>27 reviews</span>
                    </p>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/rMGY1BV/flex.webp" alt="" />
                    <h2 className="text-lg font-bold">
                        Top places in Japan to see cherry blossoms
                    </h2>
                    <p>Jessore, Bangladesh.</p>
                    <p>
                        Starting from{" "}
                        <span className="font-bold">BDT 17000</span>
                    </p>
                    <p className="pt-2">
                        <span className="bg-blue-900 p-1 rounded-md font-bold text-white inline-block ">
                            8.4
                        </span>
                        <span> Very good </span>
                        <span>27 reviews</span>
                    </p>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/rMGY1BV/flex.webp" alt="" />
                    <h2 className="text-lg font-bold">
                        Top places in Japan to see cherry blossoms
                    </h2>
                    <p>Jessore, Bangladesh.</p>
                    <p>
                        Starting from{" "}
                        <span className="font-bold">BDT 17000</span>
                    </p>
                    <p className="pt-2">
                        <span className="bg-blue-900 p-1 rounded-md font-bold text-white inline-block ">
                            8.4
                        </span>
                        <span> Very good </span>
                        <span>27 reviews</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Unique;
