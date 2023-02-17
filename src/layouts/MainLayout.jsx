import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";
import NavMenu from "../components/common/NavMenu";

const MainLayout = () => {
    return (
        <div>
            <NavMenu />
            <Outlet className="max-w-6xl mx-auto" />
            <Footer />
        </div>
    );
};

export default MainLayout;
