import React from 'react'
import HeaderSlider from '../Components/HeaderSlider'
import Hero from '../Components/Hero'
import Products from '../Components/Products'

const Homepage = () => {
    return (
        <div className="flex flex-col gap-8 pb-16">
            <Hero />
            <div>
                <div className="mx-16 mb-6 mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Promotions</h2>
                    <div className="h-1 w-20 bg-orange-500 mt-3 rounded-full"></div>
                </div>
                <HeaderSlider />
            </div>

            <Products />
        </div>
    )
}

export default Homepage