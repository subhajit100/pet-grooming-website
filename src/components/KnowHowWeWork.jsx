import React from "react";
import { FaCalendarCheck } from "react-icons/fa6";
import KnowHowWeWorkSteps from "./KnowHowWeWorkSteps";
import { HashLink } from "react-router-hash-link";

const KnowHowWeWork = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="absolute inset-0 z-10">
        {/* heading */}
        <h1 className="lg:text-5xl sm:text-4xl text-3xl leading-tight font-bold text-center lg:my-20 md:my-16 my-10">
          How do we work?
        </h1>
        {/* section to know about how we work */}
        <div className="border bg-white border-[#FF9E8E] lg:p-4 p-2 py-8 lg:mx-16 mx-10 my-6 rounded-xl">
          <KnowHowWeWorkSteps />
        </div>
        <HashLink smooth to="#bookingForm">
          <div className="flex justify-center my-16">
            <button
              type="submit"
              className="bg-yellow-500 border border-black text-black py-2 px-4 rounded-md hover:bg-yellow-600 hover:border-yellow-600 font-semibold inline-block"
            >
              <div className="flex">
                <div>Schedule now </div>

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
        src="/images/bg-landing-3.png"
        alt="landing-bg"
        className="md:h-auto md:w-[1300px] sm:h-[900px] h-[950px] w-auto banner-img z-0"
      />
    </div>
  );
};

export default KnowHowWeWork;
