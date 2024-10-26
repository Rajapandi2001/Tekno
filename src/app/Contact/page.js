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
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('img/bg-2.png')" }}>
        <section className="min-h-screen text-black flex items-center justify-center p-8">
          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <button className="px-4 py-2 rounded-full bg-[#ffffff40] text-sm uppercase tracking-wider shadow-lg">
                  Contact
                </button>
              </div>
              <h1 className="text-4xl text-slate-700 font-serif font-bold tracking-wider">Tekno Spot </h1>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-[#ffffff40] rounded-lg">
                  <span className="text-2xl">📩</span>
                  <div>
                    <h3 className="font-bold">Email us</h3>
                    <p className="text-black">surya@teknospot.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-[#ffffff40] rounded-lg">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-bold">Call us</h3>
                    <p className="text-black">+91 7604921773</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-[#ffffff40] rounded-lg">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-bold">Our location</h3>
                    <p className="text-black">Tiruchirappalli, Tamilnadu</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Section - Contact Form */}
            <div className="bg-[#ffffff40] p-8 rounded-lg shadow-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="w-full p-3 mt-2 bg-[#ffffff40] rounded-lg focus:ring-2 focus:ring-black outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="w-full p-3 mt-2 bg-[#ffffff40] rounded-lg focus:ring-2 focus:ring-black outline-none"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="w-full p-3 mt-2 bg-[#ffffff40] rounded-lg focus:ring-2 focus:ring-black outline-none"
                    placeholder="Your message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:text-white hover:bg-black transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
    </>
  );
};

export default Contact;
