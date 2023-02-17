import React from "react";
import Explore from "./Explore/Explore";
import Featured from "./Featured/Featured";
import TopPicks from "./TopPicks/TopPicks";
import Unique from "./Unique/Unique";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto py-5 relative">
            <TopPicks />
            <Explore />
            <Featured />
            <Unique />
        </div>
    );
};

export default Home;
