import { faCalendarCheck, faEnvelopeOpen, faMapMarked, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch';


const SingleService = () => {
    const history = useHistory();
    const { id } = useParams();
    const [services] = useFetch();
    console.log(services)
    const service = services?.filter(item => item.id == id);


    const handleAppointment = (title) => {
        history.push(`/appointment/${title}`);
    }

    return (
        <div className="container mx-auto">
            <hr />
            {service.map(item => <div className="singleService" key={item.id}>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="p-5">
                        <img className="rounded-lg shadow-lg" src={item.img} alt="" />
                    </div>

                    <div>
                        <div className="my-auto mx-5">
                            <div className="flex my-5 gap-4 shadow-lg p-4">
                                <div className="icon">
                                    <FontAwesomeIcon className="text-5xl text-red-800 transiton duration-500 hover:text-gray-800" icon={faMapMarked} />
                                </div>
                                <div className="address">
                                    <h3 className="text-xl">Address</h3>
                                    <p className="text-lg font-normal text-gray-500">27th Avenue New York, W2 3XE, US</p>
                                </div>
                            </div>
                            <div className="flex my-5 gap-4 shadow-lg p-4">
                                <div className="icon">
                                    <FontAwesomeIcon className="text-5xl text-red-800 transiton duration-500 hover:text-gray-800" icon={faMobileAlt} />
                                </div>
                                <div className="address">
                                    <h3 className="text-xl">Call Us</h3>
                                    <p className="text-lg font-normal text-gray-500">0-800-2336-7820</p>
                                </div>
                            </div>
                            <div className="flex my-5 gap-4 shadow-lg p-4">
                                <div className="icon">
                                    <FontAwesomeIcon className="text-5xl text-red-800 transiton duration-500 hover:text-gray-800" icon={faEnvelopeOpen} />
                                </div>
                                <div className="address">
                                    <h3 className="text-xl">Write to  us</h3>
                                    <p className="text-lg font-normal text-gray-500">office@medicare.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading mb-5 mx-5">
                    <h2 className="text-4xl font-medium text-red-800 my-4">{item.title}</h2>
                    <p className="text-lg text-gray-600">{item.short_desc}</p>
                    <h4 className="text-2xl font-semibold text-red-800 my-3">Details of service:</h4>
                    <p className="text-lg text-gray-600 my-4">{item.description}</p>
                    <button className="bg-red-800 text-white hover:bg-gray-800 hover:ring-red-200 p-2 my-4 border rounded-lg shadow-lg transition duration-500 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none" onClick={() => handleAppointment(item.title)}><FontAwesomeIcon icon={faCalendarCheck} className="mx-3" />Book an appointment</button>
                </div>
            </div>)}
        </div>
    );
};

export default SingleService;