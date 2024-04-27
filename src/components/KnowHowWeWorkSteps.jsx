import React from 'react'
import { FaHandPointer } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import KnowHowWeWorkStepCard from './KnowHowWeWorkStepCard';

const logoColour = "#894AED";

const howWeWorkData = [
  {
    id: 1,
    title: "Select your Service",
    content:
      "Choose from a range of grooming options tailored specifically for your pet’s needs.",
    logo: <FaHandPointer size={27} color={logoColour} />,
  },
  {
    id: 2,
    title: "Book and Pay",
    content:
      "Book your preferred service effortlessly on our user-friendly website and make secure payments.",
    logo: <FaSackDollar size={27} color={logoColour} />,
  },
  {
    id: 3,
    title: "Relax, We'll Take Care",
    content:
      "Our team of trusted and vetted groomers will arrive at your doorstep fully equipped to pamper your furry friend.",
    logo: <MdEmojiPeople size={30} color={logoColour} />,
  },
];

const KnowHowWeWorkSteps = () => {
  return (
    <div className='flex md:flex-row flex-col justify-evenly items-center'>
      {howWeWorkData.map(data => <KnowHowWeWorkStepCard key={data.id} data = {data} />)}
    </div>
  )
}

export default KnowHowWeWorkSteps
