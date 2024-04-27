import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";
import FeedbackCard from "./FeedbackCard";

const feedbacks = [
  {
    logo: "/images/avatar-5.png",
    name: "JOHN DOE",
    rating: 4,
    thoughts:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus nam eligendi dignissimos architecto dolores, autem at voluptates ducimus dolorum animi.",
  },
  {
    logo: "/images/avatar-6.png",
    name: "ROSE",
    rating: 5,
    thoughts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui illum beatae ad fugit. Ab dolor officia aperiam labore nihil voluptatibus sint non maxime cupiditate, enim totam veritatis suscipit?",
  },
  {
    logo: "/images/avatar-7.png",
    name: "CLARA",
    rating: 3,
    thoughts:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ad saepe, consequatur perspiciatis ullam, debitis unde necessitatibus commodi aliquid odio vero nesciunt optio?",
  },
  {
    logo: "/images/avatar-8.png",
    name: "NINA MARGARET",
    rating: 5,
    thoughts:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rem omnis doloremque quos facere libero natus voluptates cumque voluptatibus id reprehenderit, repellendus amet? Sunt?",
  },
  {
    logo: "/images/avatar-9.png",
    name: "ANUPAM ROY",
    rating: 5,
    thoughts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aut sequi esse maiores modi eum, nisi doloribus reprehenderit voluptate quam laborum nihil dolorem asperiores, exercitationem cumque ex commodi eos!",
  },
  {
    logo: "/images/avatar-10.png",
    name: "SARANSH DEY",
    rating: 5,
    thoughts:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ab omnis ex nostrum cum doloremque magni deserunt illo delectus nobis.",
  },
];

const FeedbackSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <LuChevronLeftCircle size={28} color="black" />,
    nextArrow: <LuChevronRightCircle size={28} color="black" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#FFC85B] min-h-96 pb-20">
      <div className="flex justify-center items-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold p-8 text-black md:my-6">
        Positive Reviews
      </div>
      <div className="w-11/12 md:ml-10 md:pl-0 pl-10">
        <Slider {...settings}>
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.name} feedback={feedback} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeedbackSection;
