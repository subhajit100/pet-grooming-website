import React from "react";
import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    id: 1,
    imgUrl: "/images/pet-related-job-1.png",
    title: "Professional Groomers",
    content:
      "Our trained experts provide tailored care for pets of all breeds, ensuring a safe and comfortable grooming experience.",
  },
  {
    id: 2,
    imgUrl: "/images/pet-related-job-2.png",
    title: "Exclusive VIP treatment",
    content:
      "Experience pampering fit for royalty with personalized indulgence for your beloved pet.",
  },
  {
    id: 3,
    imgUrl: "/images/pet-related-job-3.png",
    title: "Premium Equipments",
    content:
      "Trust in our state-of-the-art tools for precision grooming, ensuring safety and efficiency throughout the process.",
  },
  {
    id: 4,
    imgUrl: "/images/pet-related-job-4.png",
    title: "Top-Quality products",
    content:
      "Our gentle, pet-friendly formulas promote health and shine, delivering exceptional results for your furry friend.",
  },
  {
    id: 5,
    imgUrl: "/images/pet-related-job-5.png",
    title: "Post-grooming cleanup",
    content:
      "Enjoy a mess-free grooming experience and leave the cleanup to us for a pristine home environment.",
  },
  {
    id: 6,
    imgUrl: "/images/pet-related-job-6.png",
    title: "Expert advice",
    content:
      "Benefit from our groomers’ knowledge and guidance on pet care, grooming techniques, and maintaining your pet’s well-being between sessions.",
  },
];

const Features = () => {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8 justify-items-center justify-center py-2 mx-10">
    {featuresData.map(feature => <FeatureCard key={feature.id} feature={feature}/>)}
  </div>;
};

export default Features;
