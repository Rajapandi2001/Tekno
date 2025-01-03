"use client";
import Link from 'next/link';
import React from 'react';

const services = [
    {
        id: 1,
        imageUrl: 'img/web-development-DeGyxk2x.png',
        title: 'Web Development',
        description: 'Building and maintaining websites for businesses and organizations',
        link: '/WebDevelopement',
    },
    {
        id: 2,
        imageUrl: 'img/app-development-DiXxa6Wf.png',
        title: 'App Development',
        description: 'Creating mobile applications for smartphones and tablets',
        link: '/AppDevelopement',
    },
    {
        id: 3,
        imageUrl: 'img/seo-BB_wdGq8.png',
        title: 'SEO',
        description: 'Improving a website’s ranking in SERPs to increase organic traffic',
        link: '/SEO',
    },
    {
        id: 4,
        imageUrl: 'img/editing-CJGUGMYj.png',
        title: 'Video Editing',
        description: 'Transforming raw video footage into polished and engaging videos',
        link: '/VideoEditing',
    },
    {
        id: 5,
        imageUrl: 'img/social-media-marketing-B4qmekcR.png',
        title: 'Social Media Marketing',
        description: 'Creating campaigns to increase brand awareness, engagement, and leads',
        link: '/SocialMediaMarketing',
    },
    {
        id: 6,
        imageUrl: 'img/graphics-design-C0Cl6JmH.png',
        title: 'Graphics Design',
        description: 'Creating visuals such as logos, infographics & social media graphics',
        link: '/GraphicsDesign',
    },
];

const ServiceCard = ({ imageUrl, title, description, link }) => (
    <Link href={link}>
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative overflow-hidden w-60 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-3xl cursor-pointer bg-gray-300 shadow-lg flex flex-col items-center justify-center text-center p-6 transition-all duration-500 hover:shadow-[0px_0px_30px_1px_#00000040]"
        >
            <div className="z-10 absolute w-full h-full peer"></div>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-gray-100 transition-all duration-500"></div>
            <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-gray-100 transition-all duration-500"></div>
            <img
                src={imageUrl}
                alt={title}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4 object-contain transform transition-transform duration-300 ease-in-out hover:scale-110 z-10"
            />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 z-10">{title}</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 z-10">{description}</p>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent the click from navigating to the link
                    window.location.href = 'tel:+917604921773';
                }}
                className="relative px-8 py-2 rounded-xl bg-black text-white z-10 transition-colors overflow-hidden
                    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-600 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700"
            >
                Make a Call
            </button>
        </div>
    </Link>
);

const ServicesSection = () => (
    <div className="container mx-auto py-10 mt-5 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    imageUrl={service.imageUrl}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                />
            ))}
        </div>
    </div>
);

export default ServicesSection;
