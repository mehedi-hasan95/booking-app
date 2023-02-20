import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { createContext } from "react";

// Create a client tanstack Query
const queryClient = new QueryClient();
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const authInfo = {};
    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </QueryClientProvider>
    );
};

export default AuthProvider;
