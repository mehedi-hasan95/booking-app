import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import HotelList from "../pages/HotelList/HotelList";
import SingleHotel from "../pages/SingleHotel/SingleHotel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "hotels", element: <HotelList /> },
            { path: "s", element: <SingleHotel /> },
        ],
    },
]);

export default router;
