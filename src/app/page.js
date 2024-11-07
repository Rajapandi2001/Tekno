"use client";
import Clients from "@/components/Clients";
import ServicesSection from "@/components/ServicesSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Link from 'next/link';

export default function Home() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Main Section with Text and Image */}
      <div className=" flex justify-center items-center relative w-full  h-[650px] overflow-hidden">
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
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 hover:bg-yellow-500 rounded-lg group shadow-lg"
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

      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-white py-16 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
          <img
            src="img/home-about.6165819a.png"
            alt="Teamwork"
            className="rounded-lg w-full h-auto"
            layout="responsive"
            width={600}
            height={400}
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h2 className="text-yellow-500 text-base sm:text-lg lg:text-xl font-bold mb-2">
            WHY TEKNO SPOT?
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            In Pursuit of Excellence, Always.
          </h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            At Tekno Spot Technologies, we are constantly raising the bar each day. Every step we take is
            made with the intent of making operations smoother, faster, and sleeker for you and your
            brand. As a customer-centric enterprise, we are always here to hold your hand through the
            technological sphere - anytime, anywhere.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <div className="flex items-center space-x-2">
              <img
                src="/img/clickcharm.1b640c09.svg"
                alt="Seamless Integration Icon"
                className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
              />
              <span className="text-sm sm:text-base">Seamless Integration</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/img/clickcharm.1b640c09.svg"
                alt="User-Friendly Icon"
                className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
              />
              <span className="text-sm sm:text-base">User-Friendly</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/img/clickcharm.1b640c09.svg"
                alt="Rapid and Reliable Icon"
                className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
              />
              <span className="text-sm sm:text-base">Rapid and Reliable</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/img/clickcharm.1b640c09.svg"
                alt="Superior Performance Icon"
                className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
              />
              <span className="text-sm sm:text-base">Superior Performance</span>
            </div>
          </div>

          <button className="mt-6 bg-blue-900 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
            <Link href="/Discover"> Discover Tekno Spot →</Link>
          </button>
        </div>
      </section>



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
