
import { faCalendarCheck, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useDoctors from '../../Hooks/useDoctors';

const Doctors = () => {
    //use Doctor data hook
    const [doctors] = useDoctors();
    return (
        <div className="container mx-auto my-5">
            <div className="flex flex-col justify center service-heading text-center my-5 px-2">
                <h2 className="sm:text-5xl lg:text-5xl font-light text-gray-600 my-5">Our All <span className="font-medium text-red-800">Specialists</span></h2>
                <p className="text-lg text-gray-500">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs </p>
            </div>
            <div className="grid gap-5  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 services ">
                {
                    doctors.map(doctor => <div className="max-w-lg mx-auto px-8" key={doctor.id}>
                        <div className="bg-white border border-gray-200 shadow-md rounded-lg mx-w-sm mb-5">
                            <Link to="#">
                                <img className="rounded-t-lg" src={doctor.img} alt="" />
                            </Link>
                            <div className="p-5">
                                <Link to="#">
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{doctor.name}</h5>
                                    <h5 className="text-gray-900 font-normal text-2xl tracking-tight mb-2">{doctor.title}</h5>
                                </Link>
                                <p className="font-normal text-gray-700 mb-3">{doctor.details}</p>
                                <Link to={`/doctor/${doctor.name}`}>
                                    <button className="text-white bg-red-800 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center transition duration-500">
                                        <FontAwesomeIcon className="mx-2" icon={faCalendarCheck} />  Book Appointment
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Doctors;