import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../firebase/firebase.init';

initializeAuthentication();
const auth = getAuth();

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = user => {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((res) => {
                const { user } = res;
                console.log(user);
            })
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <div className="login-area">

                <div className="w-full flex item-center justify-center my-5">
                    <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
                        {/* <label className="font-light text-2xl mb-3" htmlFor="">Name</label>
                        <input className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" type="text" placeholder="Enter you name" /> */}
                        {/* <label className="font-light text-2xl mb-2" htmlFor="">Email</label> */}
                        <h1 className="text-5xl my-5">LOGIN</h1>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-2" type="email" placeholder="Enter your email"  {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                            {/* <label className="font-light text-2xl mb-" htmlFor="">Password</label> */}
                            <input className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-2" type="password" placeholder="Enter your password" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4 mt-3">Login</button>
                        </form>


                        <p>New here?<Link to="/signup" className="text-red-500 font-bold"> Please signup</Link></p>

                        <p className="text-right mb-2">Forgot password</p>
                        <label className="text-gray-800 mb-2">or</label>
                        <button className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-3">Sign with Google</button>
                        <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-3">Sign with Facebook</button>
                        <button className="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 text-gray-100 transition mb-3">Sign with Github</button>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Login;