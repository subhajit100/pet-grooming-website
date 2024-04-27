import React from 'react'

const FeatureCard = ({feature}) => {
    const {imgUrl, title, content} = feature;
  return (
    <div className="flex flex-col items-center justify-center text-center p-2 mx-4">
      <img src={imgUrl} alt="Logo" className="w-36 h-36 my-2" />
      <h2 className="text-xl font-semibold mb-2 text-[#894AED]">{title}</h2>
      <p className="text-gray-700 text-md mb-2">{content}</p>
    </div>
  )
}

export default FeatureCard
