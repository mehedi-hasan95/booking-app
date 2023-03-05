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
            {
                path: "hotels/:id",
                element: <SingleHotel></SingleHotel>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/api/hotel/find/${params.id}`),
            },
        ],
    },
]);

export default router;
