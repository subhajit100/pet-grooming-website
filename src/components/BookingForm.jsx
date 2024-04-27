import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    locality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="w-[90%] border-[1.5px] p-8 m-8 mt-24 bg-purple-200 border-[#894AED] rounded-lg shadow-lg" id="bookingForm">
      <h2 className="text-4xl font-bold mb-4">Pet Grooming Services</h2>
      <div className="flex items-center justify-start my-6">
        <h2 className="text-2xl font-bold text-[#894AED]">starting from $30</h2>
        <h3 className="text-xl text-gray-500 mx-2">(Incl. all charges)</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-500 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block mb-2 text-gray-500 font-bold"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-500 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="locality"
            className="block mb-2 text-gray-500 font-bold"
          >
            Locality
          </label>
          <input
            type="text"
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
          <div className="flex justify-center my-8">
            <button
              type="submit"
              className="bg-yellow-500 border border-black text-black py-2 px-4 rounded-md hover:bg-yellow-600 hover:border-yellow-600 font-bold"
            >
              Book Now
            </button>
          </div>
      </form>
    </div>
  );
};

export default BookingForm;
