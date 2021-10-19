import React from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";

const Appointment = () => {
    const { title } = useParams();
    const { user } = useAuth();


    const submitAppointment = (data) => {
        console.log(data)
        Swal.fire({
            icon: 'success',
            title: 'WOW!',
            text: `Thanks ${user.displayName} for submit an appointment`
        })
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div className="container mx-auto mt-5 mb-5">
            <h1 className="lg:text-5xl sm:text-4xl font-bold text-red-600 my-5 text-center">Book Your Appointment</h1>
            <div className="form-container flex justify-center">
                <form className="w-full mx-5" onSubmit={handleSubmit(submitAppointment)}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" defaultValue={user.displayName} {...register("name", { required: true })} />
                            {errors.name && <p class="text-red-500 text-xs italic">Please fill out this field.</p>}
                        </div>
                        <div className="w-full md:w-2/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" defaultValue={user.email} {...register("email", { required: true })} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Subject
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" defaultValue={title} {...register("subject", { required: true })} />
                            <p className="text-gray-600 text-xs italic">Your expected service</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea name="" id="" cols="30" rows="10" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4" {...register("message", { required: true })}></textarea>
                            <p className="text-gray-600 text-xs italic">Describe any special message</p>
                            {errors.message && <p class="text-red-500 text-lg italic">Please fill out this field.</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <button className="bg-red-600 text-white transition duration-500 hover:bg-gray-700 p-4 w-full rounded rounded-lg shadow-lg">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;