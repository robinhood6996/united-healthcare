import { faEnvelopeOpen, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import faqImg from '../../images/faq.jpg';
const Faq = () => {
    return (
        <div className="container mx-auto my-5">
            <div className="faq-heading">
                <h3 className="text-sm font-thin mb-5 border p-3 shadow-lg">KNOWLEDGE IS THE PATH TO SUCCESS</h3>
                <h2 className="text-5xl font-light">Usual Questions</h2>
                <h2 className="text-6xl font-bold text-red-800 my-3">from Our patients</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="">
                    <img src={faqImg} className="rounded shadow-lg my-5" alt="" />
                </div>
                <div className="mx-auto">
                    <h2 className='text-4xl text-center font-bold text-red-800 my-7'>Fill up for enquiery</h2>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="phone" />
                                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                    Subject
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="phone" />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <input className="appearance-none block w-full bg-red-800 text-gray-50 border border-gray-200 rounded py-3 px-4 mb-3" id="phone" type="submit" />
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div className="git-container bg-red-800 p-4 rounded">
                <div className="git-header text-center">
                    <h1 className="text-6xl font-semibold text-white after:block after:bg-gray-50">GET IN TOUCH</h1>
                    <p className="text-md font-light text-white mt-5 w-3/4 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ratione culpa cumque perferendis quis veniam repellendus minus repellat explicabo eum saepe consequuntur repudiandae vitae, earum ex praesentium, ab in.</p>
                </div>

                <div className="git-content flex justify-center mt-12 mb-10 gap-10">
                    <div className="git-item text-center">
                        <FontAwesomeIcon icon={faLocationArrow} className="bg-white transition duration-500 hover:bg-red-700 hover:text-white text-gray-700 text-6xl rounded-full hover:p-5 p-4" />
                        <h4 className="text-lg text-gray-50 font-bold my-2">Address</h4>
                        <p className="text-md text-gray-50 font-normal">27th Avenue, W2 3XE, New York</p>
                        <p className="text-md text-gray-50 font-normal">27th Avenue, W2 3XE, New York</p>
                    </div>
                    <div className="git-item text-center">
                        <FontAwesomeIcon icon={faPhone} className="bg-white transition duration-500 hover:bg-red-700 hover:text-white text-gray-700 text-6xl rounded-full hover:p-5 p-4" />
                        <h4 className="text-lg text-gray-50 font-bold my-2">Call Us</h4>
                        <p className="text-md text-gray-50 font-normal">0-800-777-2331</p>
                        <p className="text-md text-gray-50 font-normal">0-800-777-2331</p>
                    </div>
                    <div className="git-item text-center">
                        <FontAwesomeIcon icon={faEnvelopeOpen} className="bg-white transition duration-500 hover:bg-red-700 hover:text-white text-gray-700 text-6xl rounded-full hover:p-5 p-4" />
                        <h4 className="text-lg text-gray-50 font-bold my-2">Write to us</h4>
                        <p className="text-md text-gray-50 font-normal">office@stanford.com</p>
                        <p className="text-md text-gray-50 font-normal">service@stanford.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;