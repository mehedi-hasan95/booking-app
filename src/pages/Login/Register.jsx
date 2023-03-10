import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const [file, setFile] = useState(null);
    // context api
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);

    // create user with Gmail
    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        googleLogin(provider)
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
                // ...
            });
    };

    // Create New User using email
    const createNewUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photo = form.files.files[0];

        if (password !== confirm) {
            return;
        }

        // Upload Image to imbBB for the profile
        const uploadImage = import.meta.env.VITE_APP_imgBB;
        const formData = new FormData();
        formData.append("image", photo);
        const url = `https://api.imgbb.com/1/upload?key=${uploadImage}`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    const imgURL = result.data.url;
                    // Create user using firebase
                    createUser(email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            updateCreatedUser(fname, imgURL);
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                        });

                    // Update user name while registration
                    const updateCreatedUser = (name, photo) => {
                        const profile = {
                            displayName: name,
                            photoURL: photo,
                        };
                        updateUser(profile)
                            .then(() => {})
                            .catch((error) => {});
                    };

                    // Which data will be sent to DB
                    const data = {
                        fname,
                        lname,
                        email,
                    };

                    // Send data to DB
                    fetch("http://localhost:5000/api/users", {
                        method: "POST", // or 'PUT'
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            toast.success("Sucessfully create user");
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                        });
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <div className="lg:max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="hidden md:block">
                    <img src="https://i.ibb.co/nq2KK9h/register.jpg" alt="" />
                </div>
                <div>
                    <div className="w-full p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                        <h1 className="text-2xl font-bold text-center">
                            Register
                        </h1>
                        <form
                            onSubmit={createNewUser}
                            className="space-y-6 ng-untouched ng-pristine ng-valid"
                        >
                            <div className="space-y-1 text-sm">
                                <label
                                    htmlFor="fname"
                                    className="block dark:text-gray-400"
                                >
                                    First Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    placeholder="First Name"
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 focus:border-black text-xl border-2 border-primary"
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label
                                    htmlFor="lname"
                                    className="block dark:text-gray-400"
                                >
                                    Last Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 focus:border-black text-xl border-2 border-primary"
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label
                                    htmlFor="email"
                                    className="block dark:text-gray-400"
                                >
                                    Your Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 focus:border-black text-xl border-2 border-primary"
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label
                                    htmlFor="password"
                                    className="block dark:text-gray-400"
                                >
                                    Password
                                </label>
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 focus:border-black text-xl border-2 border-primary"
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label
                                    htmlFor="confirm"
                                    className="block dark:text-gray-400"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirm"
                                    id="confirm"
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 focus:border-black text-xl border-2 border-primary"
                                />
                            </div>

                            <fieldset className="w-full space-y-1 dark:text-gray-100 flex gap-4 items-center">
                                <div>
                                    {file ? (
                                        <img
                                            className="max-w-md border border-violet-400 rounded-xl w-20 h-20"
                                            src={URL.createObjectURL(file)}
                                            alt=""
                                        />
                                    ) : (
                                        <img
                                            className="max-w-md border border-violet-400 rounded-xl w-20 h-20"
                                            src="https://i.ibb.co/LNHHrTZ/profile.webp"
                                            alt=""
                                        />
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="files"
                                        className="block text-sm font-medium"
                                    >
                                        Profile Picture
                                    </label>
                                    <div className="flex">
                                        <input
                                            onChange={(e) =>
                                                setFile(e.target.files[0])
                                            }
                                            type="file"
                                            name="files"
                                            id="files"
                                            className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                                        />
                                    </div>
                                </div>
                            </fieldset>
                            <button className="block mx-auto md:w-full p-3 text-center rounded-sm bg-secondary text-white">
                                Register
                            </button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            <p className="px-3 text-sm dark:text-gray-400">
                                Login with social accounts
                            </p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        </div>
                        <div
                            onClick={loginWithGoogle}
                            className="flex justify-center space-x-4"
                        >
                            <button
                                aria-label="Log in with Google"
                                className="p-3 rounded-sm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                        </div>

                        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                            Do you have an account?
                            <Link
                                rel="noopener noreferrer"
                                to="/login"
                                className="underline dark:text-gray-100"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
