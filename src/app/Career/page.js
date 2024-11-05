import Head from 'next/head';

export default function Home() {
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
                    <div className="relative z-10 mb-4 px-3 py-1.5 rounded-full bg-[#ffffff1f] text-xs font-semibold uppercase tracking-widest text-white md:text-sm md:mb-6">
                        <span className="text-lime-200">◉</span> Careers at Tekno Spot
                    </div>

                    {/* Main Heading */}
                    <h1 className="relative z-10 mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Got What It Takes? We'd Like <br className="hidden md:block" /> To Hear From You.
                    </h1>

                    {/* Subheading */}
                    <p className="relative z-10 mb-6 text-sm leading-relaxed md:text-base lg:text-lg">
                        We are on the lookout for talented individuals motivated by a desire to make a difference through technology.
                    </p>

                    {/* Call-to-action Button */}
                    <button className="relative z-10 px-8 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-full shadow-lg hover:bg-[#f3f044c3] transition md:text-lg md:px-12">
                        Mail Us
                    </button>
                </div>

            </div>
            <main
                className="min-h-screen bg-gray-50 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('img/bg.svg')" }}
            >
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12">
                    {/* Left Section */}
                    <div className="flex flex-col justify-center lg:pr-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Careers in digital innovation.
                        </h2>
                        <p className="text-lg text-gray-600">
                            We connect people, skills, and businesses around the globe, creating successful careers both within our own
                            organization and those of our clients.
                        </p>
                    </div>

                    {/* Right Section */}
                    <section aria-labelledby="form-title" className="bg-white shadow-md rounded-lg p-8">
                        <h3 id="form-title" className="text-2xl font-bold text-gray-800 mb-6">
                            Ready to take the next step in your career journey?
                        </h3>
                        <p className='mb-5'>Fill out the form below to connect with exciting job opportunities tailored to your skills and ambitions</p>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                        First name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                        Last name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                        Phone number<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                        State<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="state"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700">
                                    LinkedIn Profile<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="url"
                                    id="linkedinProfile"
                                    required
                                    className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="jobRoles" className="block text-sm font-medium text-gray-700">
                                    Job Roles Interested In<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="jobRoles"
                                    required
                                    className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                        Upload your resume<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        id="resume"
                                        required
                                        accept=".pdf, .doc, .docx"
                                        className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                                        Upload Your Cover Letter or Portfolio
                                    </label>
                                    <input
                                        type="file"
                                        id="coverLetter"
                                        accept=".pdf, .doc, .docx"
                                        className="mt-1 block w-full py-2 px-3 border-gray-600 rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
}
