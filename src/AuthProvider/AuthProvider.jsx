import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a client tanstack Query
const queryClient = new QueryClient();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create a new user with email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Update a user info
    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    };

    // Sing Up a user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sing In with Gmail
    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Password reset
    const passwordReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    // Sign Out a user
    const logOut = () => {
        setLoading(true);
        signOut(auth);
    };

    // Auth Change to a user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (cruuentUser) => {
            setUser(cruuentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        updateUser,
        googleLogin,
        logOut,
        user,
        loading,
        passwordReset,
    };
    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={authInfo}>
                {children}
                <ToastContainer position="top-right" autoClose={1000} />
            </AuthContext.Provider>
        </QueryClientProvider>
    );
};

export default AuthProvider;
