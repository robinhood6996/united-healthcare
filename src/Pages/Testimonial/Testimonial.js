
import React from 'react';
import patient1 from '../../images/patients/1.jpg';
import patient2 from '../../images/patients/2.jpg';
import patient3 from '../../images/patients/3.jpg';
import patient4 from '../../images/patients/4.jpg';

const Testimonial = () => {
    return (
        <div>
            <div className="git-container bg-red-800 p-4">
                <div className="git-header text-center">
                    <h1 className="sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-gray-900 ">Patients Testimonial</h1>
                    <p className="text-md font-light text-white mt-5 w-3/4 mx-auto">It’s always the word of mouth that’s the best advice. Here are some of our…</p>
                </div>

                <div className="container git-content grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4  mx-auto mt-12 mb-10 gap-10">
                    <div className="git-item flex flex-col justify-center text-center">
                        <img src={patient1} className="rounded-full mx-auto mb-5" width="200px" alt="" />
                        <p className="text-md text-gray-50 font-normal">Professionals in their work, the surgery went well and I was able to go on with my life within just a few weeks. Recommended!</p>
                        <h4 className="text-lg text-gray-50 font-bold my-2">LARAINE FLEMMING</h4>
                        <h4 className="text-lg text-gray-50 font-light my-2">CBR</h4>
                    </div>
                    <div className="git-item flex flex-col justify-center text-center">
                        <img src={patient2} className="rounded-full mx-auto mb-5" width="200px" alt="" />
                        <p className="text-md text-gray-50 font-normal">I am deeply grateful to Dr. Chase for his expertise and care. He practices both the science and the art of cardiac surgery.</p>
                        <h4 className="text-lg text-gray-50 font-bold my-2">HERBIE HAYNES</h4>
                        <h4 className="text-lg text-gray-50 font-light my-2"> Valve Prolapse Repair</h4>
                    </div>
                    <div className="git-item flex flex-col justify-center text-center">
                        <img src={patient3} className="rounded-full mx-auto mb-5" width="200px" alt="" />

                        <p className="text-md text-gray-50 font-normal">I felt like 102 before, now I feel like 52, thanks to Dr. Chase and his team. Their expertise is second to none!</p>
                        <h4 className="text-lg text-gray-50 font-bold my-2">WILLIAM SMITH</h4>
                        <p className="text-md text-gray-50 font-light">TMR</p>
                    </div>
                    <div className="git-item flex flex-col justify-center text-center">
                        <img src={patient4} className="rounded-full mx-auto mb-5" width="200px" alt="" />
                        <p className="text-md text-gray-50 font-normal">I felt like 102 before, now I feel like 52, thanks to Dr. Chase and his team. Their expertise is second to none!</p>
                        <h4 className="text-lg text-gray-50 font-bold my-2">WILLIAM SMITH</h4>
                        <p className="text-md text-gray-50 font-light">TMR</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;