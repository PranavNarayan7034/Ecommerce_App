import React from 'react'
import logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-16 bg-blue-300'>
            <div>
                <img src={logo} alt="" className='w-25 h-25'/>
            </div>
            <div className='flex gap-6'>
                <a href="" className='text-lg text-black/60 font-semibold'>About Us</a>
                <a href="" className='text-lg text-black/60 font-semibold'>Store</a>
                <a href="" className='text-lg text-black/60 font-semibold'>Reviews</a>
                <a href="" className='text-lg text-black/60 font-semibold'>Enquiries</a>
                <a href="" className='text-lg text-black/60 font-semibold'>Connect Us</a>
            </div>
            <div className='flex gap-6'>
                <button className='px-8 py-2 rounded-lg font-semibold bg-orange-400 text-white'>Login</button>
                <button className='px-8 py-2 rounded-lg font-semibold border-2 border-orange-400'>Signup</button>
            </div>
        </div>
    )
}

export default Navbar