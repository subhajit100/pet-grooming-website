import React from 'react'

const ShowOffCard = ({card}) => {
    const {heading, content} = card;
  return (
    <div className='bg-[#FEF0D0] border-[#FFAF00] border lg:p-8 p-4 m-2 mx-auto flex flex-col justify-center items-center md:w-1/4 w-4/5 rounded-xl '>
      <div className='lg:text-4xl md:text-3xl text-2xl font-bold text-[#894AED] lg:my-3 my-2'>
         {heading}
      </div>
      <div className='lg:text-2xl text-xl text-[#894AED] lg:my-2 my-1 text-center'>
        {content}
      </div>
    </div>
  )
}

export default ShowOffCard
