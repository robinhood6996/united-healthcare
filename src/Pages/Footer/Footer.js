import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-3 bg-gray-800 text-white">
                <div className="logo my-5 mx-auto">
                    <img src={logo} width="200px" alt="" />
                    <div className="">
                        <h2 className="text-2xl my-5 text-gray-300">0-800-777-2331</h2>
                        <h3 className="text-md text-gray-300">24/7 Emergency Number</h3>



                    </div>
                </div>

                <div className="my-5 mx-auto">
                    <h2 className="text-xl font-medium"> Quick Visit</h2>
                    <ul className="my-5">
                        <li className="text-md text-gray-300 my-2">
                            <Link to="/">Our Doctors</Link>
                        </li>
                        <li className="text-md text-gray-300 my-2">
                            <Link to="/">All Services</Link>
                        </li>
                        <li className="text-md text-gray-300 my-2">
                            <Link to="/">Contact Us</Link>
                        </li>
                        <li className="text-md text-gray-300 my-2">
                            <Link to="/">About Us</Link>
                        </li>

                    </ul>
                </div>
                <div className="my-5 mx-auto">
                    <h2 className="text-xl font-medium">All you about to know</h2>
                    <ul className="my-5">
                        <li className="text-md text-gray-300 my-2">
                            <Link to="/">General Information</Link>
                        </li>
                        <li className="text-md text-gray-300 my-2">
                            <Link to="/">Doctor's Profile</Link>
                        </li>
                        <li className="text-md text-gray-300 my-2">
                            <Link to="/">Galleries</Link>
                        </li>
                        <li className="text-md text-gray-300 my-2">
                            <Link to="/">Working Hours</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </div >
    );
};

export default Footer;