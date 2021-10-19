import { faAmbulance, faBriefcaseMedical, faHeartbeat, faHospital, faProcedures, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container mx-auto">
            <div className="heading shadow-lg p-5 mt-5">
                <h2 className="text-5xl font-light my-5">What we stand for ?</h2>
                <h2 className="text-5xl font-bold text-red-700 my-5">Our core values</h2>
                <p className="text-lg font-medium text-gray-500">Completely synergize resource taxing relationships via premier niche markets.<br /> Professionally cultivate one-to-one customer service with robust ideas.</p>
            </div>

            <div className="about-content grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 mb-5">

                {/* About Item */}
                <div className="about-item flex gap-4  p-4 shadow-lg">
                    <div className="icon">
                        <FontAwesomeIcon className="text-7xl text-red-700" icon={faUserMd} />
                    </div>
                    <div className="about-details">
                        <h3 className='text-xl font-bold'>DOCTOR YOU CHOOSE</h3>
                        <p className="text-md font-light">Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications.</p>
                    </div>
                </div>

                {/* About Item */}
                <div className="about-item flex gap-4  p-4 shadow-lg">
                    <div className="icon">
                        <FontAwesomeIcon className="text-7xl text-red-700" icon={faHeartbeat} />
                    </div>
                    <div className="about-details">
                        <h3 className='text-xl font-bold'>YOUR HEALTHCARE</h3>
                        <p className="text-md font-light">Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core.</p>
                    </div>
                </div>

                {/* About Item */}
                <div className="about-item flex gap-4  p-4 shadow-lg">
                    <div className="icon">
                        <FontAwesomeIcon className="text-7xl text-red-700" icon={faBriefcaseMedical} />
                    </div>
                    <div className="about-details">
                        <h3 className='text-xl font-bold'> ALWAYS THERE FOR YOU</h3>
                        <p className="text-md font-light">Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics.</p>
                    </div>
                </div>

                {/* About Item */}
                <div className="about-item flex gap-4  p-4 shadow-lg">
                    <div className="icon">
                        <FontAwesomeIcon className="text-7xl text-red-700" icon={faProcedures} />
                    </div>
                    <div className="about-details">
                        <h3 className='text-xl font-bold'>NURSING STAFF</h3>
                        <p className="text-md font-light">Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities.</p>
                    </div>
                </div>
                {/* About Item */}
                <div className="about-item flex gap-4  p-4 shadow-lg">
                    <div className="icon">
                        <FontAwesomeIcon className="text-7xl text-red-700" icon={faAmbulance} />
                    </div>
                    <div className="about-details">
                        <h3 className='text-xl font-bold'> EMERGENCY SERVICES</h3>
                        <p className="text-md font-light">Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply.</p>
                    </div>
                </div>
                {/* About Item */}
                <div className="about-item flex gap-4  p-4 shadow-lg">
                    <div className="icon">
                        <FontAwesomeIcon className="text-7xl text-red-700" icon={faHospital} />
                    </div>
                    <div className="about-details">
                        <h3 className='text-xl font-bold'>PREMIUM FACILITIES</h3>
                        <p className="text-md font-light">Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;