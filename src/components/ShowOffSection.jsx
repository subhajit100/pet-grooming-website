import React from "react";
import ShowOffCards from "./ShowOffCards";
import { FaCalendarCheck } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

const ShowOffSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="absolute inset-0 z-10">
        {/* heading */}
        <h1 className="lg:text-5xl sm:text-4xl text-3xl leading-tight font-bold my-10 text-center">
          Happy Pets Groomed
        </h1>
        {/* cards for showoff */}
        <ShowOffCards />
        <HashLink smooth to="#bookingForm">
          <div className="flex justify-center my-8">
            <button
              type="submit"
              className="bg-yellow-500 border border-black text-black py-2 px-4 rounded-md hover:bg-yellow-600 hover:border-yellow-600 font-semibold inline-block"
            >
              <div className="flex">
                <div>Book Now </div>

                <span className="mx-2 inline-block">
                  <FaCalendarCheck size={20} color="black" />
                </span>
              </div>
            </button>
          </div>
        </HashLink>
      </div>
      {/* Image */}
      <img
        src="/images/bg-landing-2.png"
        alt="landing-bg"
        className="md:h-auto md:w-[1200px] sm:h-[700px] h-[750px] w-auto banner-img z-0"
      />
    </div>
  );
};

export default ShowOffSection;
