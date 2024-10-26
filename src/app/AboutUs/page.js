"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Popup from '@/components/Popup';
const AboutUs = () => {
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
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000, // Duration of the animations
      once: false,    // Animation triggers again on scroll up and down
      mirror: true,   // Animates elements in and out while scrolling up and down
      easing: 'ease-in-out', // Smoother transition for animations
      offset: 120,   // Animation will occur only once when you scroll down
    });
  }, []);
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section - Image Grid */}
          <div className="flex flex-col lg:flex-row gap-5 z-20">
            <img
              src="img/about/Rectangle 16.jpg"
              alt="team-working"
              className="rounded-lg h-52  w-full object-cover "
            />
            <img
              src="img/about/Rectangle 17.jpg"
              alt="team-discussing"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Right Section - Text Section */}
          <div className="flex flex-col justify-center relative z-50">
            <h2 className="text-blue-500 text-lg font-semibold mb-4">About us</h2>
            <h1 className="text-4xl font-light">
              Great{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 font-semibold">
                Product
              </span>{' '}
              is
            </h1>
            <h1 className="text-4xl font-bold">
              built by great{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
                teams
              </span>
            </h1>
            <p className="text-gray-600 text-lg mt-5">
              We help build and manage a team of world-class developers to bring your vision to life
            </p>

            <button
              type="submit"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              onClick={toggleFormVisibility} >
              Let’s get started!
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
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
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-5 mt-10 p-5">
        <img
          src="img/about/Rectangle 18.jpg"
          alt="team-collaborating"
          className="rounded-lg w-[500px]  z-10"
        />
        <img
          src="img/about/Rectangle 19.jpg"
          alt="team-outdoor"
          className="rounded-lg w-[500px] "
        />
      </div>
      <img
        src="img/about/Vector 3.svg"
        alt="decorative vector"
        className="absolute lg:top-56 top-[800px] right-0 object-right ml-[800px] w-56 h-56 z-0 opacity-50"
      />
      <img
        src="img\about\Frame 27.svg"
        alt="decorative vector"
        className="absolute top-[300px] right-0 object-right ml-[800px] w-56 h-56 z-0 opacity-50"
      />
      <img
        src="img\Vector.svg"
        alt="decorative vector"
        className="absolute top-96 left-0 object-right  w-80 h-80 z-0 opacity-50"
      />
      <section className='bg-lime-100 mt-10'>
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Text Content */}
          <div className="flex flex-col justify-center">
            <div className='border-4 border-lime-400 w-36'></div>
            <h2 className="text-3xl font-bold text-black mb-4">

              Let’s Build Something Amazing Together
            </h2>
            <p className="text-gray-500 mb-6">
              If you're looking to turn your ideas into reality, <strong>Tekno Spot</strong> is here to make it happen. Whether you’re a startup aiming to disrupt the market or an established business seeking to strengthen your digital presence, we have the skills and passion to help you achieve your goals.</p>
            <Popup/>
          </div>

          {/* Right Section - Services Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-4 hover:shadow-md">
              <img src="img\about\apps 1.png" alt="Web Application" className="w-10 h-10 mb-4" />
              <p className="text-purple-800 font-semibold">Web Application</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-4 hover:shadow-md">
              <img src="img\about\startup 1.png" alt="SEO" className="w-10 h-10 mb-4" />
              <p className="text-purple-800 font-semibold">SEO</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center justify-center bg-purple-100 rounded-lg p-4 hover:shadow-md">
              <img src="img\about\coding 1.png" alt="Mobile Applications" className="w-10 h-10 mb-4" />
              <p className="text-purple-800 font-semibold">Mobile Applications</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-4 hover:shadow-md">
              <img src="img\about\cloud-computing 1.png" alt="AR/VR" className="w-10 h-10 mb-4" />
              <p className="text-purple-800 font-semibold">AR/VR</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-5 lg:mt-32'>
        <div className="mt-5 lg:mt-16 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 px-4">
          {/* Vision Section */}
          <div className="relative w-full md:w-[350px] h-[350px] bg-white rounded-[20px] shadow-[0px_0px_30px_1px_#00000040] flex flex-col justify-center items-center p-4 transition-transform transform hover:scale-105">
            <img
              src="img\about\Frame 19.svg"
              alt="Vision"
              className="w-[190px] h-[150px] md:w-[200px] md:h-[200px] object-cover"
            />
            <h4 className="text-[#1f783f] font-inter font-bold mb-4 text-center text-[24px] leading-[19.36px]">
              Our Vision
            </h4>
            <p className="text-[16px] leading-[19.36px] font-normal font-inter text-center lg:mb-28">
              our vision is to empower businesses by building digital products that don't just meet industry standards but redefine them. We believe in creating applications that are not only functional but also delightful to use—tools that help businesses grow, connect with their audience, and achieve their biggest ambitions.
            </p>
          </div>

          {/* Mission Section */}
          <div className="relative w-full md:w-[350px] h-[350px] bg-white rounded-[20px] shadow-[0px_0px_30px_1px_#00000040] flex flex-col justify-center items-center  p-4 transition-transform transform hover:scale-105">
            <img
              src="img\about\Illustration (1).svg"
              alt="Mission"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover"
            />
            <h4 className="font-inter text-[#1f783f] font-bold mb-4 text-center text-[24px] leading-[19.36px]">
              Our Mission
            </h4>
            <p className="text-[16px] leading-[19.36px] font-normal font-inter  text-center  lg:mb-48">
              Our mission is to combine innovation, creativity, and technical expertise to deliver digital solutions that solve real-world problems. We are dedicated to making the digital landscape more accessible, intuitive, and user-centric, one project at a time.
            </p>
          </div>
        </div>
      </section>
      <div data-aos="zoom-in" className="flex justify-center font-bold text-[20px] lg:text-2xl items-center h-40 md:h-32 bg-gradient-to-r from-teal-400 to-gray-100  p-4 md:p-6">
        Strong enough to make your
        Biggest Dreams
        a Reality with Us
      </div>
    </>
  );
};

export default AboutUs;
