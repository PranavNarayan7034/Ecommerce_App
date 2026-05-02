import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Signuppage = () => {

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    let formError;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Username validation
    if (!formData.name) {
      formError = "Name Required"
    }
    else if (formData.name.length < 3) {
      formError = "Username Must be alteast 3 Characters"
    }
    //Email validation
    else if (!formData.email) {
      formError = "Email Required"
    }
    else if (!emailRegex.test(formData.email)) {
      formError = "Please enter a valid email address"
    }
    //password validation
    else if (!formData.password) {
      formError = "Password Required"
    }
    else if (formData.password.length < 5) {
      formError = "Password must be at least 5 characters long"
    }
    return formError
  }

  const onSignup = async () => {
    try {
      const validateError = validateForm()
      if (validateError) {
        console.log("Error:", validateError)
        toast.error(validateError)
        return
      }

      const response = await axios.post(
        'http://127.0.0.1:8000/api/auth/signup',
        formData)
      console.log("Account Created")
      setFormData({ name: "", email: "", password: "" })

      toast.success('Account Created, Check your mail to verify account')
    } catch (error) {
      console.log("Error in Signup :", error)
    }
  }

  return (
    <div>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-12 flex flex-col gap-16  justify-center'>
        <h1 className='text-center text-3xl uppercase font-bold tracking-widest'>Create Account</h1>
        <div className='flex justify-between gap-4 sm:gap-6 md:gap-12 lg:gap-16 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col gap-4'>
            <h2>Signup</h2>
            <div className='flex flex-col gap-2'>
              <input name='name' value={formData.name} onChange={handleChange}
                type="text" placeholder='Name' className='border-2 border-black/50 rounded-md px-5 py-2' />
            </div>
            <div className='flex flex-col gap-2'>
              <input name='email' value={formData.email} onChange={handleChange}
                type="email" placeholder='Email' className='border-2 border-black/50 rounded-md px-5 py-2' />
            </div>
            <div className='flex flex-col gap-2 relative'>
              <input name='password' value={formData.password} onChange={handleChange}
                type={showPassword ? 'text' : 'password'} placeholder='Password' className='border-2 border-black/50 rounded-md px-5 py-2' />
              <div className='absolute right-4 top-[30%]'
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye className='text-lg' /> : <FaEyeSlash className='text-lg' />}
              </div>
            </div>

            <div>
              <button className='bg-black text-white px-8 py-1.5' onClick={onSignup}>Signup</button>
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