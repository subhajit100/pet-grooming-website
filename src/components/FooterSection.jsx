import React from "react";
import { FaCalendarCheck } from "react-icons/fa6";
import {HashLink} from 'react-router-hash-link';

const FooterSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="absolute inset-0 z-10">
        {/* heading */}
        <div className="lg:text-5xl sm:text-4xl text-3xl font-bold text-center text-white max-w-[500px] mx-auto md:my-10 my-6">
          Trusted by 50,000+ Pet Parents
        </div>
        <div className="text-white text-center lg:text-xl text-md">
          Become a part of a thriving community with over 5,00,000 pet lovers
          just like you, in the world.
        </div>
        <HashLink smooth to="#bookingForm">
          <div className="flex justify-center my-8">
            <button
              type="submit"
              className="bg-yellow-500 border border-black text-black py-2 px-4 rounded-md hover:bg-yellow-600 hover:border-yellow-600 font-semibold inline-block"
            >
              <div className="flex my-1">
                <div>Book Your Grooming Service</div>

                <span className="mx-2 inline-block">
                  <FaCalendarCheck size={20} color="black" />
                </span>
              </div>
            </button>
          </div>
        </HashLink>
        {/* horizontal line of 80% width */}
        <hr className="block w-[90%] border-solid border-white border-b-0 border-t mx-auto my-3"></hr>
        {/* copyright section */}
        <div className="text-white text-center md:text-md text-sm">
          Ⓒ 2024 – TK PETCARE SOLUTIONS PRIVATE LIMITED – All Rights Are
          Reserved
        </div>
      </div>
      {/* Image */}
      <img
        src="/images/footer-bg.png"
        alt="landing-bg"
        className="md:h-auto lg:w-[1350px] md:w-[1200px] sm:h-[400px] h-[400px] w-auto banner-img z-0"
      />
    </div>
  );
};

export default FooterSection;
