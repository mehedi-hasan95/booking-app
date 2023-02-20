import React from "react";
import Explore from "./Explore/Explore";
import Featured from "./Featured/Featured";
import Offer from "./Offer";
import TopPicks from "./TopPicks/TopPicks";
import Unique from "./Unique/Unique";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto py-5 px-6 relative">
            <TopPicks />
            <Featured />
            <Explore />
            <Offer />
            <Unique />
        </div>
    );
};

export default Home;
