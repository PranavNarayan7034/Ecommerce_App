import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: 'About Us', path: '#' },
        { name: 'Store', path: '#' },
        { name: 'Reviews', path: '#' },
        { name: 'Enquiries', path: '#' },
        { name: 'Connect Us', path: '#' },
    ]

    return (
        <nav className='sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    {/* Logo Segment */}
                    <div className='shrink-0 flex items-center'>
                        <Link to='/'>
                            <img src={logo} alt="CartWave Logo" className='w-auto h-12 md:h-16 object-contain' />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex items-center space-x-8'>
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.path} className='text-base font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200'>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className='hidden lg:flex items-center space-x-4'>
                        <Link to='/login' className='text-gray-700 hover:text-orange-500 font-medium px-4 py-2 transition-colors duration-200'>
                            Login
                        </Link>
                        <Link to='/signup' className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] transition-all duration-200 hover:-translate-y-0.5'>
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='lg:hidden flex items-center'>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-orange-50 focus:outline-none transition-colors duration-200'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {/* Hamburger Icon */}
                            {!isMobileMenuOpen ? (
                                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='lg:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden absolute w-full'
                    >
                        <div className='px-4 pt-2 pb-6 space-y-1 sm:px-6 flex flex-col gap-1'>
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.path}
                                    className='block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200'
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className='mt-4 pt-6 border-t border-gray-100 flex flex-col gap-3 px-2'>
                                <Link
                                    to='/login'
                                    className='block w-full text-center px-4 py-3 rounded-full border-2 border-gray-200 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors'
                                >
                                    Log in
                                </Link>
                                <Link
                                    to='/signup'
                                    className='block w-full text-center px-4 py-3 rounded-full text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] transition-colors'
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar