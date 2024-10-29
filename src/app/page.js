"use client";
import Clients from "@/components/Clients";
import ServicesSection from "@/components/ServicesSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Home() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Main Section with Text and Image */}
      <div className=" flex justify-center items-center relative w-full  h-[600px] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover  bg-black bg-opacity-50"
        >
          <source src="/7101913-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag. Please update your browser.
        </video>
        <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1350px] lg:h-[500px] px-4 py-6">
          {/* Left Text Section */}
          <div data-aos="fade-right" className="md:w-[800px] text-center md:text-left">
            <h3 className="text-xl md:text-4xl font-bold text-white mt-5 mb-2 leading-tighT">
              Tekno Spot builds Applications that get Trending in the Digital World
            </h3>
            <p className="text-md lg:text-lg text-white mb-4">
              WE understand the power of user experience design and employ cutting-edge strategies to make your website and application intuitive, engaging, and downright addictive.
            </p>
            {/* Button to show the form */}
            <div className="flex justify-center md:justify-start lg:ml-52">
              <button
                onClick={() => (window.location.href = 'tel:+917604921773')}
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 hover:bg-black rounded-lg group shadow-lg"
              >
                {/* Your button inner content here */}
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Contact Us
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div data-aos="fade-left" className="flex justify-center md:w-[450px] h-auto  md:mt-0">
            <img
              src="img\career-side.01b1c64e.png"
              alt="Digital Marketing Illustration"
              className="w-full max-w-[450px] h-auto object-contain"
            />
          </div>
        </section>
        
        </div>

      {/* Featured Services Section */}
      <div className="flex flex-col items-center text-center px-4 mt-5 overflow-hidden">
        <h3 className="font-bold text-red-500 text-2xl mb-2">Tekno Spot</h3>
        <div data-aos="fade-up">
          <h1 className="font-bold text-3xl mb-2">Featured Services</h1>
          <p className="text-gray-700 max-w-md md:max-w-[650px]">
            We combine business expertise with technology to build high-impact applications and grow your Digital Footprint.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="overflow-hidden">
        <ServicesSection />
      </div>

      {/* Clients Section */}
      <div className="text-center">
        <h1 className="font-bold text-red-500 text-2xl mb-4 py-10">Some of Our Clients</h1>
      </div>
      <div className="overflow-hidden">
        <Clients />
      </div>

      {/* Call-to-Action Section */}
      <div data-aos="zoom-in" className="flex justify-center font-bold text-[20px] lg:text-2xl items-center h-40 md:h-32 bg-gradient-to-r from-teal-400 to-gray-100 p-4 md:p-6">
        Strong enough to make your
        Biggest Dreams
        a Reality with Us
      </div>
    </>
  );
}
