"use client";

import Image from 'next/image';
import React from 'react';
const Page = () => {
    return (
        <>
        <div className=" flex justify-center items-center relative w-full  h-[380px] lg:h-[460px] overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover  bg-black bg-opacity-50"
                >
                    <source src="\3163534-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag. Please update your browser.
                </video>

                <div className="relative flex flex-col items-center justify-center h-screen px-4 text-center text-white md:px-0">
                    {/* Badge */}
                    <div className="relative z-10 mb-4 px-3 py-1.5 rounded-full bg-[#ffffff3b] text-xs font-semibold uppercase tracking-widest text-white md:text-sm md:mb-6 shadow-md">
                        <span className="text-lime-200">◉</span> To create Tekno Spot
                    </div>

                    {/* Main Heading */}
                    <h1 className="relative z-10 mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">
                    Video Editing
                    </h1>

                    {/* Subheading */}
                    <p className="relative z-10 mb-6 text-sm leading-relaxed md:text-base lg:text-lg">
                    Transforming raw video footage into polished and engaging videos
                    </p>
                </div>

            </div>
            <section
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white py-10 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center"
            >
                <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
                    <Image
                        src="/img/New Project (1).png"
                        alt="Teamwork"
                        className="rounded-lg"
                        layout="responsive"
                        width={600}
                        height={400}
                    />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
                    <h2 className="text-yellow-500 text-base sm:text-lg lg:text-xl font-bold mb-2">
                    Professional Video Editing Services
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Crafting Visual Stories with Precision and Passion
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    At Tekno Spot, we specialize in transforming your raw footage into cinematic masterpieces. Whether you need a captivating corporate video, a dynamic YouTube vlog, or a stunning promotional ad, we are the experts who bring your vision to life.
                    </p>

                    {/* Features Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="\img\styleclick.2aa3bac1.svg"
                                alt="Video Cutting and Trimming Icon"
                                width={24}
                                height={24}
                                className="text-blue-600"
                            />
                            <span className="text-sm sm:text-base">Video Cutting and Trimming</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image
                                src="\img\styleclick.2aa3bac1.svg"
                                alt="Social Media Video Editing Icon"
                                width={24}
                                height={24}
                                className="text-blue-600"
                            />
                            <span className="text-sm sm:text-base">Social Media Video Editing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image
                                src="\img\styleclick.2aa3bac1.svg"
                                alt="Social Media Video Editing Icon"
                                width={24}
                                height={24}
                                className="text-blue-600"
                            />
                            <span className="text-sm sm:text-base">Social Media Video Editing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image
                                src="\img\styleclick.2aa3bac1.svg"
                                alt="Corporate and Promotional Videos Icon"
                                width={24}
                                height={24}
                                className="text-blue-600"
                            />
                            <span className="text-sm sm:text-base">Corporate and Promotional Videos</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
