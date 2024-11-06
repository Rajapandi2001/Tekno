"use client";
import Image from 'next/image';
import React from 'react';
import { FaAndroid, FaApple } from 'react-icons/fa';
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
                        App Development
                    </h1>

                    {/* Subheading */}
                    <p className="relative z-10 mb-6 text-sm leading-relaxed md:text-base lg:text-lg">
                        "Great apps are built on seamless functionality and intuitive design."
                    </p>
                </div>

            </div>
            <section
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white py-16 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center"
            >
                <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
                    <Image
                        src="/img/mobileapp.73f0ad3d.png"
                        alt="Teamwork"
                        className="rounded-lg"
                        layout="responsive"
                        width={600}
                        height={300}
                    />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
                    <h2 className="text-yellow-500 text-base sm:text-lg lg:text-xl font-bold mb-2">
                        AT YOUR FINGERTIPS
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Bringing The World's Finest to Your Phones
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                        At Tekno Spot, we're intent on crafting and stepping into new worlds with ease. We are at the heart of innovation as we introduce you to the pulsating world of app development - where efficiency meets excellence. We're not just a tech company; we're the architects of the digital future, weaving lines of code into seamless experiences that redefine the way we live, work, and play.
                    </p>

                    {/* Features Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="\img\styleclick.2aa3bac1.svg"
                                alt="Innovative Concepts Icon"
                                width={24}
                                height={24}
                                className="text-blue-600"
                            />
                            <span className="text-sm sm:text-base">Innovative Concepts</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image
                                src="\img\styleclick.2aa3bac1.svg"
                                alt="Rapid Results Icon"
                                width={24}
                                height={24}
                                className="text-blue-600"
                            />
                            <span className="text-sm sm:text-base">Rapid Results</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image
                                src="\img\styleclick.2aa3bac1.svg"
                                alt="User-Centric Designs Icon"
                                width={24}
                                height={24}
                                className="text-blue-600"
                            />
                            <span className="text-sm sm:text-base">User-Centric Designs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image
                                src="\img\styleclick.2aa3bac1.svg"
                                alt="Personalised Solutions Icon"
                                width={24}
                                height={24}
                                className="text-blue-600"
                            />
                            <span className="text-sm sm:text-base">Personalised Solutions</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" px-8 ">
                <div className="max-w-[1200px] mx-auto text-center">
                    <div className="mb-16">
                        <h2 className="text-yellow-500 font-bold lg:text-lg tracking-wider uppercase">
                            Adaptable and Quick
                        </h2>
                        <h1 className="text-gray-800 text-2xl md:text-4xl font-bold mt-2">
                            Seamlessly Crafted for <br /> Android & iOS Excellence
                        </h1>
                    </div>

                    {/* Android Section */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16">
                        <div className="lg:w-[650px] text-left lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start mb-4">
                                <FaAndroid className="text-yellow-500 text-2xl mr-2" />
                                <span className="text-yellow-500 font-semibold">Android App</span>
                            </div>
                            <h2 className="text-gray-800 lg:text-2xl font-bold mb-4">
                                Crafting Brilliance for Android Devices
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Dive into the world of Android with us, where we provide the best of technology for
                                your needs. Our expert developers harness the power of the Android ecosystem, ensuring
                                your app not only adapts seamlessly to the myriad of devices but also stands out with a
                                user interface that captures attention. From conceptualization to deployment, we
                                navigate the Android landscape with finesse, delivering apps that leave a lasting
                                impression.
                            </p>
                        </div>
                        <div className="lg:w-1/3 flex justify-center">
                            <img
                                src="/img/android.a67697e3.png"
                                alt="Android Development"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* iOS Section */}
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 mb-10">
                        <div className="lg:w-[600px] flex justify-center">
                            <img
                                src="/img/ios.91e20da4.png"
                                alt="iOS Development"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="lg:w-2/3 text-left lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start mb-4">
                                <FaApple className="text-yellow-500 text-xl mr-2" />
                                <span className="text-yellow-500 font-semibold">iOS App</span>
                            </div>
                            <h2 className="text-gray-800 lg:text-2xl text-center lg:text-left font-bold mb-4">
                                Accelerated Growth with iOS
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Apple's iOS ecosystem demands precision, and we rise to the challenge. Our team is
                                equipped with the expertise to create immersive experiences that resonate with the
                                elegance Apple is known for. Whether its harnessing the latest features of iOS or
                                ensuring a flawless user journey, we meticulously craft apps that elevate your brand on
                                the App Store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
