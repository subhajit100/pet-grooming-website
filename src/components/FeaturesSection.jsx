import React from 'react'
import Features from './Features'

const FeaturesSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="absolute inset-0 z-10">
        {/* heading */}
        <h1 className="lg:text-5xl sm:text-4xl text-3xl leading-tight font-bold text-center lg:my-20 md:my-16 my-10">
          Our Features
        </h1>
        {/* features */}
        <Features />
      </div>
      {/* Image */}
      <img
        src="/images/bg-landing-pet.png"
        alt="landing-bg"
        className="md:h-auto lg:w-[1350px] md:w-[1500px] sm:h-[2000px] xs:h-[2130px] h-[2300px] w-auto banner-img z-0"
      />
    </div>
  )
}

export default FeaturesSection
