import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../components/common/NavMenu";

const Main = () => {
    return (
        <div>
            <NavMenu />
            <Outlet className="max-w-6xl mx-auto" />
        </div>
    );
};

export default Main;
