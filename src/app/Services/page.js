import ServicesSection from '@/components/ServicesSection'
import React from 'react'

const page = () => {
    return (
        <>
            <section
                className="flex items-center justify-center w-full bg-cover bg-center h-[300px] lg:h-[500px]  bg-black bg-opacity-5"
                style={{ backgroundImage: "url('img/photo-1553877522-43269d4ea984.avif')" }}
            >
                <div className="flex flex-col items-center text-center px-4 h-full mt-36 lg:mt-96 overflow-hidden">
                    <h3 className="font-bold  text-yellow-500 text-xl lg:text-3xl ">Tekno Spot</h3>
                    <div data-aos="fade-up">
                        <h1 className="font-bold text-2xl lg:text-3xl text-black">Featured Services</h1>
                        <p className="text-white text-lg max-w-md md:max-w-[650px]">
                            We combine business expertise with technology to build high-impact applications and grow your Digital Footprint.
                        </p>
                    </div>
                </div>
            </section>
            <ServicesSection/>

        </>
    )
}

export default page
