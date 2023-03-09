import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../components/Loading";

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRouter;
