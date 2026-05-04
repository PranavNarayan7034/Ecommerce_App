import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Await!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5!",
      offer: "Hurry up only few left!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='mx-4 md:mx-8 lg:mx-16 mb-8'>
      <div className='bg-[#E6E9F2] overflow-hidden rounded-2xl relative h-[650px] md:h-[450px] flex items-center shadow-inner'>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='absolute inset-0 flex flex-col md:flex-row items-center w-full h-full'
          >
            {/* Blended Background Image Container */}
            <div className='absolute right-0 top-0 bottom-0 w-full md:w-[60%] h-[300px] md:h-full z-0 pointer-events-none'>
              <img
                src={sliderData[currentSlide].image}
                alt={sliderData[currentSlide].title}
                className="object-cover object-center h-full w-full opacity-90 mix-blend-multiply"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 50%)",
                  maskImage: "linear-gradient(to right, transparent 0%, black 50%)",
                }}
              />
            </div>

            <div className='absolute right-0 top-0 bottom-0 w-full md:hidden h-[50%] z-0 pointer-events-none'>
              <img
                src={sliderData[currentSlide].image}
                alt={sliderData[currentSlide].title}
                className="object-cover object-center h-full w-full opacity-90 mix-blend-multiply"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 80%)",
                  maskImage: "linear-gradient(to bottom, transparent 0%, black 80%)",
                }}
              />
            </div>

            {/* Text Content */}
            <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-6 z-10 px-8 py-10 md:px-16 mt-auto md:mt-0 mb-12 md:mb-0 text-center md:text-left'>
              <p className='text-sm md:text-base font-semibold text-orange-600 tracking-wider uppercase'>
                {sliderData[currentSlide].offer}
              </p>
              <h3 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight'>
                {sliderData[currentSlide].title}
              </h3>
              <div className="flex flex-wrap items-center mt-2 md:mt-4 gap-4 justify-center md:justify-start">
                <button className="px-6 md:px-8 py-3 bg-orange-600 hover:bg-orange-700 transition duration-300 rounded-full text-white font-medium shadow-lg hover:shadow-orange-500/30">
                  {sliderData[currentSlide].buttonText1}
                </button>
                <button className="px-6 md:px-8 py-3 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white border border-gray-200 transition duration-300 rounded-full font-medium shadow-sm">
                  {sliderData[currentSlide].buttonText2}
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-orange-600 w-8' : 'bg-gray-400 w-2.5 hover:bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider