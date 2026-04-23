import React from 'react'
import { Link } from 'react-router-dom'

const Signuppage = () => {
  return (
    <div>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-12 flex flex-col gap-16  justify-center'>
        <h1 className='text-center text-3xl uppercase font-bold tracking-widest'>Create Account</h1>
        <div className='flex justify-between gap-4 sm:gap-6 md:gap-12 lg:gap-16 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col gap-4'>
            <h2>Signup</h2>
            <div className='flex flex-col gap-2'>
              <input type="text" placeholder='Name' className='border-2 border-black/50 rounded-md px-5 py-2' />
            </div>
            <div className='flex flex-col gap-2'>
              <input type="email" placeholder='Email' className='border-2 border-black/50 rounded-md px-5 py-2' />
            </div>
            <div className='flex flex-col gap-2 relative'>
              <input type="password" placeholder='Password' className='border-2 border-black/50 rounded-md px-5 py-2' />
            </div>
            
            <div>
              <button className='bg-black text-white px-8 py-1.5'>Signup</button>
            </div>

          </div>
          <div className='flex-2 flex flex-col items-start gap-4'>
            <h2 className='text-xl font-medium'>Already Have Account</h2>
            <p className='w-100% sm:w-[90%] md:w-[85%] lg:w-[75%]'>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails</p>
            <Link to='/login' className='bg-black text-white px-8 py-2'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signuppage