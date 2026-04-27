import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Loginpage = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-12 flex flex-col gap-16  justify-center'>
            <h1 className='text-center text-3xl uppercase font-bold tracking-widest'>SignIn</h1>
            <div className='flex justify-between gap-4 sm:gap-6 md:gap-12 lg:gap-16 flex-col sm:flex-row'>
                <div className='flex-1 flex flex-col gap-4'>
                    <h2>Login</h2>
                    <div className='flex flex-col gap-2'>
                        <input type="email" placeholder='Email' className='border-2 border-black/50 rounded-md px-5 py-2' />
                    </div>
                    <div className='flex flex-col gap-2 relative'>
                        <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='border-2 border-black/50 rounded-md px-5 py-2' />
                        <div className='absolute right-4 top-[30%]' onClick={()=> setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye className='text-lg'/> : <FaEyeSlash className='text-lg'/>}
                        </div>
                    </div>
                    <div className='text-blue-800 text-sm'>
                        <button>Forgot password ?</button>
                    </div>
                    <div>
                        <button className='bg-black text-white px-8 py-1.5'>Login</button>
                    </div>

                </div>
                <div className='flex-2 flex flex-col items-start gap-4'>
                    <h2 className='text-xl font-medium'>New Customer</h2>
                    <p className='w-100% sm:w-[90%] md:w-[85%] lg:w-[75%]'>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails</p>
                    <Link to='/signup' className='bg-black text-white px-8 py-2'>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Loginpage