import React from 'react'
import BookingForm from './BookingForm'

const FeaturedSections = () => {
  return (
    <div className='relative overflow-hidden mt-28'>
        {/* Content */}
      <div className="absolute inset-0 md:flex z-10 md:justify-between">
        <div className="md:w-[48%] w-[95%] flex flex-col justify-center lg:ml-16 md:ml-8 ml-4">
          <h1 className="lg:text-5xl md:text-4xl text-3xl leading-tight font-bold ml-5">Best Pet Grooming Services in the world</h1>
          <div className="lg:p-3 md:p-2 p-1 ml-2 lg:mt-20 md:mt-16 mt-10">
          <img
            src="/images/two-pets-featured.png"
            alt="Logo"
            className='w-[80%] h-auto mx-auto'
          />
          </div>
        </div>
        <div className='md:w-[48%] w-[95%]'>
            <BookingForm />
        </div>
      </div>
      {/* Image */}
      <img
        src="/images/bg-landing-pet.png"
        alt="landing-bg"
        className="md:h-auto md:w-[1200px] sm:h-[1400px] h-[1300px] w-auto banner-img z-0"
      />
    </div>
  )
}

export default FeaturedSections
