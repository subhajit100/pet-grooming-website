import React from "react";

const KnowHowWeWorkStepCard = ({ data }) => {
  const { id, title, content, logo } = data;
  return (
    <div
      className={`flex flex-col sm:my-4 sm:py-3 md:my-1 md:justify-start md:items-center justify-center ${
        id !== 1 ? "md:border-l md:border-t-0 border-t border-[#FF9E8E]" : ""
      }`}
    >
      {/* logo and title content in same row */}
      <div className="flex justify-center items-center mt-2 md:mt-1">
        <div>{logo}</div>
        <div className="text-2xl text-[#894AED] font-bold mx-3 text-center">{title}</div>
      </div>
      {/* content section */}
      <div className="text-gray-600 px-6 py-2 mx-3 my-3">{content}</div>
    </div>
  );
};

export default KnowHowWeWorkStepCard;
