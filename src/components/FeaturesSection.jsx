// components/FeaturesSection.js
"use client";
export default function FeaturesSection() {
    return (
        <section className="bg-white py-12 px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
                <p className="text-yellow-500 font-bold text-sm sm:text-lg">WE ARE SPECIAL. HERE IS WHY.</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    Goal-Oriented Operations for Consistent Success
                </h2>
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
                        <div className="bg-indigo-950 text-white p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                            <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">{feature.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Feature items data
const features = [
    {
        title: "Seamless Integration",
        description: "We make products that fit your operations like an elusive puzzle piece. Watch as our solutions become an integral part of your everyday in the smoothest manner possible!",
        icon: StarIcon,
    },
    {
        title: "Customer-Centric",
        description: "Our products are designed keeping in mind the most important factor - YOU. What we create for you is not just an app; it would be YOUR app, designed to fit your brand like an extension, rather than an addition.",
        icon: UserIcon,
    },
    {
        title: "Rapid and Reliable",
        description: "We are quick, and we always come through. It is a time-tested combination, and it works. Always.",
        icon: GroupIcon,
    },
    {
        title: "Superior Performance",
        description: "We are always a cut above the rest. Do not believe us? See for yourself!",
        icon: PerformanceIcon,
    },
    {
        title: "Accelerated Growth",
        description: "Smooth operations lead to better output and quicker growth in time - and a good technological assistant can serve as a catalyst!",
        icon: GrowthIcon,
    },
    {
        title: "Technical Support",
        description: "Need a hand? Our teams always around! We are here to help and guide you with any queries you may have.",
        icon: SupportIcon,
    },
];

// Icons (SVGs for each feature)
function StarIcon(props) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.588 4.89a1 1 0 00.95.69h5.115c.969 0 1.371 1.24.588 1.81l-4.14 3.012a1 1 0 00-.364 1.118l1.588 4.89c.3.921-.755 1.688-1.54 1.118l-4.14-3.012a1 1 0 00-1.176 0l-4.14 3.012c-.784.57-1.838-.197-1.54-1.118l1.588-4.89a1 1 0 00-.364-1.118L.3 9.617c-.784-.57-.38-1.81.588-1.81h5.115a1 1 0 00.95-.69l1.588-4.89z" />
        </svg>
    );
}

function UserIcon(props) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 5a3 3 0 100 6 3 3 0 000-6zM4 14a6 6 0 0112 0v1H4v-1z" clipRule="evenodd" />
        </svg>
    );
}

function GroupIcon(props) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7a3 3 0 100-6 3 3 0 000 6zM17 14a4 4 0 00-3-3.87V10a5 5 0 00-10 0v.13A4 4 0 001 14v1h6v-1a3 3 0 016 0v1h6v-1zM5 10a3 3 0 116 0v1H5v-1z" />
        </svg>
    );
}

function PerformanceIcon(props) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7H7a1 1 0 000 2h6a1 1 0 000-2zm0 4H7a1 1 0 000 2h6a1 1 0 000-2z" />
            <path fillRule="evenodd" d="M10 1a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 0112 0H4z" clipRule="evenodd" />
        </svg>
    );
}

function GrowthIcon(props) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 3a1 1 0 011 1v6h-2V6H8v4H6V4a1 1 0 011-1h6zm2 8a2 2 0 011.732 1H18a2 2 0 012 2v2a2 2 0 01-2 2h-3.268A2 2 0 0115 16v-2a2 2 0 010-4h1zm-8 1a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm-4 3a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" />
        </svg>
    );
}

function SupportIcon(props) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2 6a6 6 0 0112 0v1h.5a2.5 2.5 0 010 5h-.25a3.001 3.001 0 00-5.5 0h-.25a2.5 2.5 0 110-5H10V6a4 4 0 10-8 0v6a2 2 0 002 2h1v2a1 1 0 01-2 0v-2H2a4 4 0 01-4-4V6z" clipRule="evenodd" />
        </svg>
    );
}
