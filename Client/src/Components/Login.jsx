import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEyeSlash, FaEye } from "react-icons/fa";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-12 mb-20 flex flex-col gap-12 justify-center max-w-6xl xl:mx-auto'>
            <h1 className='text-center text-3xl uppercase font-bold tracking-[0.2em] text-gray-900'>SignIn</h1>
            <div className='flex justify-between gap-10 sm:gap-12 md:gap-16 lg:gap-24 flex-col sm:flex-row'>
                <div className='flex-1 flex flex-col gap-6 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100'>
                    <h2 className='text-2xl font-semibold text-gray-800'>Login</h2>
                    <div className='flex flex-col gap-2'>
                        <input type="email" placeholder='Email' className='w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block px-5 py-3.5 transition duration-200 outline-none' />
                    </div>
                    <div className='flex flex-col gap-2 relative'>
                        <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block px-5 py-3.5 transition duration-200 outline-none' />
                        <div className='absolute right-4 top-[-15%] translate-y-[50%] cursor-pointer text-gray-400 hover:text-orange-500 transition-colors p-2' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye className='text-lg' /> : <FaEyeSlash className='text-lg' />}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors'>Forgot password?</button>
                    </div>
                    <div className='pt-2'>
                        <button className='w-full bg-gray-900 hover:bg-black text-white font-medium rounded-xl text-md px-8 py-3.5 text-center transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5'>Login</button>
                    </div>

                </div>
                <div className='flex-1 flex flex-col items-start gap-6 bg-gray-50/50 p-6 sm:p-10 rounded-3xl border border-gray-100 justify-center h-fit'>
                    <h2 className='text-2xl font-semibold text-gray-800'>New Customer</h2>
                    <p className='text-gray-500 leading-relaxed max-w-md'>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
                    <Link to='/signup' className='inline-flex justify-center items-center w-full sm:w-auto text-center border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-medium rounded-xl text-md px-10 py-3 transition-all duration-300'>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login