import React from "react";
import { FaCalendarCheck } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="bg-[#894AED] fixed z-40 w-full top-0 left-0">
      <div className="flex justify-between items-center h-28">
        {/* paw image div */}
        <div className="md:p-2 sm:p-1 lg:ml-16 md:ml-8 ml-3">
          <img
            src="/images/pawspace-logo.png"
            alt="Logo"
            className='sm:h-16 w-auto md:h-20 lg:h-24 h-14'
          />
        </div>
        {/* book now div */}
        <HashLink smooth to="#bookingForm">
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <div className="md:w-10 md:h-10 h-7 w-7 flex justify-center items-center md:mx-4 mx-1 rounded-full bg-yellow-500">
              <FaCalendarCheck size={20} color="black" />
            </div>
            <div className="text-white md:text-lg text-md">Book Now</div>
          </div>
        </HashLink>
        {/* google reviews div */}
        <div className="lg:p-2 lg:mr-16 sm:p-1 md:mr-6 mr-2">
          <img
            src="/images/google-badge-logo.png"
            alt="Logo"
            className="sm:h-16 w-auto md:h-20 lg:h-24 h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
