import React from 'react';
// import slide1 from '../../images/slider/1.jpg';
import './Slider.css';
const Slider = () => {
    return (
        <div>
            <div className=" slide bg-cover bg-no-repeat bg-center h-4/6 flex flex-col justify-center items-start">

                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 slide-content p-4">
                    <h3 className="inspire-txt text-2xl uppercase my-5">Inspiring better health</h3>
                    <h1 className="text-6xl	my-5"><span className="text-blue-600 font-bold">Healthy Life,</span><br /><span className="text-5xl"> healthy Family</span></h1>
                    <p className="font-medium text-lg mt-4">
                        Globally harness multimedia based collaboration and idea-sharing with<br /> backend products. Continually whiteboard superior opportunities via<br /> covalent scenarios.
                    </p>
                    <div className="flex gap-x-5 mt-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Discover More</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View all service</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Slider;