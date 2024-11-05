
import FeaturesSection from '@/components/FeaturesSection';
import React from 'react';

const WhoWeAre = () => {
    return (
        <>

            <div className=" flex justify-center items-center relative w-full  h-[300px] lg:h-[460px] overflow-hidden">
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

                <section className="relative text-white py-10 px-8 lg:px-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Left Section */}
                            <div data-aos="fade-right" className="lg:w-1/2 flex flex-col justify-center">
                                <h2 className="text-yellow-500 text-lg uppercase tracking-wide mb-2">Who Are We?</h2>
                                <h1 className="text-xl lg:text-4xl font-bold leading-tight">
                                    Streamlined Solutions For <br /> Everyday Operations
                                </h1>
                            </div>

                            {/* Decorative Elements */}
                            <div className="hidden lg:flex flex-col items-center justify-center space-y-2 mt-5">
                                <div className="border-l-4 border-white h-10"></div>
                                <span className="text-2xl text-white">✦</span>
                                <div className="border-l-4 border-white h-10"></div>
                            </div>

                            {/* Right Section */}
                            <div data-aos="fade-left" className="lg:w-1/2 text-sm lg:mt-5 ">
                                <p className='lg:text-xl'>
                                    At Tekno Spot, we craft software excellence. Streamlining complexity, we engineer
                                    solutions that redefine efficiency. From coding to user experience, our commitment to innovation
                                    is unwavering.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="1000" className="flex items-center justify-center mt-10 px-4 text-center">
                <h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight md:leading-relaxed mb-4">
                    Discover Your Potential with <br className="hidden sm:block" /> Tekno Spot - Perform Like Never Before!
                </h1>
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="px-4 sm:px-8 md:px-16 lg:px-20 text-center mt-6">
                <p className="text-sm sm:text-base md:text-xl leading-relaxed sm:leading-loose mb-4">
                    Imagine a team of tech enthusiasts who genuinely love what they do, helping people across various industries fall in love with their businesses! Thats us  not just coding pros but partners in making life simpler. Whether you are in healthcare, finance, or running a startup, we have got your back.
                </p>
                <p className="text-sm sm:text-base md:text-xl leading-relaxed sm:leading-loose mb-4">
                    At Tekno Spot, were a team of software experts constantly pushing the envelope, making cutting-edge technology feel like a casual coffee chat. No jargon, no hassle  just straightforward, effective solutions that work like magic. From making code simple to delivering a smooth user experience, we are all about driving innovation forward.
                </p>
                <p className="text-sm sm:text-base md:text-xl leading-relaxed sm:leading-loose">
                    Take the leap with us and watch the magic happen!
                </p>
            </div>

            <FeaturesSection />

        </>
    );
};

export default WhoWeAre;
