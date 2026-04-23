import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-16'>
            <div>
                <Link to='/'><img src={logo} alt="" className='w-25 h-25' /></Link>
            </div>
            <div className='flex gap-6'>
                <a href="" className='text-lg text-black/60 font-semibold'>About Us</a>
                <a href="" className='text-lg text-black/60 font-semibold'>Store</a>
                <a href="" className='text-lg text-black/60 font-semibold'>Reviews</a>
                <a href="" className='text-lg text-black/60 font-semibold'>Enquiries</a>
                <a href="" className='text-lg text-black/60 font-semibold'>Connect Us</a>
            </div>
            <div className='flex gap-6'>
                <Link to='/login' className='cursor-pointer px-8 py-2 rounded-lg font-semibold bg-orange-400 text-white'>
                    Login</Link>
                <Link to='/signup' className='cursor-pointer px-8 py-2 rounded-lg font-semibold border-2 border-orange-400'>
                    Signup</Link>
            </div>
        </div>
    )
}

export default Navbar