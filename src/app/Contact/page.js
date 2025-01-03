"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display the popup when the form is submitted.
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold">Thank you!</h2>
            <p className="mt-4 text-black">Our team will contact you soon.</p>
            <button
              onClick={closeModal}
              className="mt-6 py-2 px-4 bg-black text-white rounded-lg hover:bg-slate-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="relative w-full  h-[500px] lg:h-[550px]  overflow-hidden ">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/7101913-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag. Please update your browser.
        </video>
        <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1350px] lg:h-[500px] px-4 py-8 mx-auto">
          {/* Left Text Section */}
          <div data-aos="fade-right" className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <div className="ml-4 md:ml-10 lg:ml-20">
              <h2 className="text-yellow-400 font-bold text-lg md:text-xl mb-2">Contact Us</h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                What Can We Help <br className="hidden md:block" /> You With?
              </h1>
              <p className="text-base md:text-lg text-white">
                Get in touch with us and lets create magic - together.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div data-aos="fade-left" className="flex justify-center md:w-1/2 h-auto">
            <img
              src="img/contact.svg"
              alt="Digital Marketing Illustration"
              className="w-full max-w-[450px] md:max-w-[600px] h-auto object-contain"
            />
          </div>
        </section>

      </div>


      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <style jsx>{`
    .shimmer {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
  `}</style>

        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section (Contact Info) */}
          <div className="space-y-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-3xl font-bold text-gray-800 mt-5">
              Lets Chat <span role="img" aria-label="wave">👋</span> <br />
              Tell me about your project.
            </h2>
            <div className="space-y-4 text-gray-600">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="bg-gray-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 6.25 7 13 7 13s7-6.75 7-13c0-3.87-3.13-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
                <p>Tiruchirappalli, Tamilnadu</p>
              </div>
              {/* Phone Numbers */}
              <div className="flex items-start space-x-3">
                <div className="bg-gray-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.093 15.093 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.23 11.48 11.48 0 003.51.61 1 1 0 011 1v3.36a1 1 0 01-1 1C7.39 21 3 16.61 3 11.5a1 1 0 011-1h3.36a1 1 0 011 1 11.48 11.48 0 00.61 3.51 1 1 0 01-.23 1.11l-2.2 2.2z" />
                  </svg>
                </div>
                <p>+91 7604921773</p>
              </div>
              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="bg-gray-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1.41 4.83L12 13.25 5.41 8.83 4 10.24l8 5.01 8-5.01-1.41-1.41z" />
                  </svg>
                </div>
                <p>surya@teknospot.in</p>
              </div>
            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <div className="bg-white p-8 rounded-lg shadow-xl  w-full max-w-md ">
            <h3 className="text-xl text-center font-bold text-gray-800 mb-6">Help Us Get To Know You</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Full Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Full name"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
                <div className="absolute inset-0 shimmer opacity-50 pointer-events-none rounded-md"></div>
              </div>

              {/* Email Id Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Email Id"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
                <div className="absolute inset-0 shimmer opacity-50 pointer-events-none rounded-md"></div>
              </div>

              {/* Mobile No Field */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Mobile no"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
                <div className="absolute inset-0 shimmer opacity-50 pointer-events-none rounded-md"></div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="Subject"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
                <div className="absolute inset-0 shimmer opacity-50 pointer-events-none rounded-md"></div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  placeholder="Message"
                  required
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 resize-none"
                  rows="4"
                ></textarea>
                <div className="absolute inset-0 shimmer opacity-50 pointer-events-none rounded-md"></div>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-gray-800 text-white py-2 px-8 rounded-full hover:bg-gray-900 transition">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </>
  );
};

export default Contact;
