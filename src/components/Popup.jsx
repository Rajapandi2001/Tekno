"use client";
import { useState } from "react";
function Popup() {
  // State to control the popup visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace this with your form handling logic (e.g., API call)
    alert("Thank you! Our team will call you soon.");
    // Close the form after submission
    setIsFormVisible(false);
  };

  return (
    <div className="App">
      {/* Button to show the form */}
      <div className="flex justify-center md:justify-start lg:ml-52">
        <button
          className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group shadow-lg"
          onClick={toggleFormVisibility}
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Contact Us
          </span>
        </button>
      </div>

      {/* Popup Form */}
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-96 h-auto border border-neutral-500 rounded-lg bg-neutral-50 p-6 z-50">
            <h2 className="font-extrabold text-2xl text-violet-600 mb-2">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-neutral-700 mb-4">
              If you're looking to turn your ideas into reality, Tekno Spot is here to make it happen. Whether you’re a startup aiming to disrupt the market or an established business seeking to strengthen your digital presence, we have the skills and passion to help you achieve your goals.
            </p>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="flex gap-1 mt-4">
                <div className="relative rounded-lg w-full overflow-hidden">
                  <input
                    type="text"
                    className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5"
                    placeholder="Name..."
                    required
                  />
                </div>
              </div>

              {/* Phone number */}
              <div className="flex gap-1 mt-4">
                <div className="relative rounded-lg w-full overflow-hidden">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5"
                    placeholder="Phone..."
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex gap-1 mt-4">
                <div className="relative rounded-lg w-full overflow-hidden">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5"
                    placeholder="Email..."
                    required
                  />
                </div>
              </div>

              {/* Subscribe Button */}
              <div className="flex gap-1 mt-4">
                <button
                  type="submit"
                  className="bg-violet-500 text-neutral-50 p-2 w-full rounded-lg hover:bg-violet-400"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={toggleFormVisibility}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
