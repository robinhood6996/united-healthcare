import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './Nav.css'

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, signOutUser } = useAuth();



    return (
        <div className="shadow-lg sticky top-0 bg-white z-50">
            <div>
                {
                    user.email ? (<div className="lg:hidden md:hidded sm:block text-center">
                        <h2 className="md:font-bold text-red-600 text-sm"><span className="md:font-sm text-gray-800 ">Welcome!</span> {user.displayName}</h2>
                    </div>) : ('')
                }
                <hr />
            </div>

            <nav className="bg-white-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 "
                                    src={logo}
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">

                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to="/"
                                        className=" hover:bg-gray-700 hover:text-white text-black px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="/services"
                                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Services
                                    </Link>

                                    <Link
                                        to="/doctors"
                                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Doctors

                                    </Link>

                                    <Link
                                        to="/about"
                                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About Us

                                    </Link>

                                    <Link
                                        to="/faq"
                                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        FAQ

                                    </Link>

                                    {/* Conditional Login and Logout button */}
                                    {
                                        user.email ?
                                            (<button className="text-white transition duration-500 bg-red-800 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={signOutUser}>
                                                Logout
                                            </button>)
                                            :
                                            (<Link
                                                to="/login"
                                                className="text-black hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                Login
                                            </Link>)
                                    }
                                    <div className="mx-10 username">
                                        {
                                            user.email ? (<div className="sm:hidden md:block lg:block text-center pcuser">
                                                <h2 className="md:font-bold text-red-600 text-sm"><span className="md:font-sm text-gray-800 ">Welcome!</span> {user.displayName}</h2>

                                            </div>) : ('')
                                        }
                                    </div>

                                </div>

                            </div>

                        </div>



                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>



                    </div>

                </div >


                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="/"
                                    className="hover:bg-gray-700 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/services"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Services
                                </Link>

                                <Link
                                    to="/doctors"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Doctors
                                </Link>

                                <Link
                                    to="/about"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About Us
                                </Link>

                                <Link
                                    to="/faq"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    FAQ
                                </Link>
                                {/* conditional login and logout  */}
                                {
                                    user.email ?
                                        (<button className="text-white bg-red-500 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={signOutUser}>
                                            Logout
                                        </button>)

                                        :
                                        (<Link
                                            to="/login"
                                            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Login

                                        </Link>)

                                }
                            </div>
                        </div>
                    )}
                </Transition>
            </nav >

            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>

                </div>
            </main> */}
        </div >
    );
}

export default Nav;