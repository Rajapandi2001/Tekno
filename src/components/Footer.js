import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => {
    return (
        <footer className="bg-[#373f4b] text-gray-300 py-10 px-4 md:px-28 relative">
            {/* Background Shapes */}
            <div className="shape absolute left-0 top-0 opacity-5 h-full w-1/3 md:w-1/2 lg:w-1/3 z-0">
                <img src="img/footer-shape-left.png" alt="Background Shape Left" className="h-full w-full object-cover" />
            </div>
            <div className="shape absolute right-0 top-0 opacity-5 h-full w-1/3 md:w-1/2 lg:w-1/3 z-0">
                <img src="img/footer-shape-right.png" alt="Background Shape Right" className="h-full w-full object-cover" />
            </div>
            {/* Main Footer Content */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:mt-10 p-5 z-10 relative">
                {/* Logo and Description */}
                <div className="space-y-4">
                    <div className="flex items-center mb-4">
                        <Link href="/">
                            <img src="img/LOGO.svg" alt="TEKNO SPOT Logo" className="h-12 w-auto" />
                        </Link>
                    </div>
                    <p className="text-sm">
                        We understand the power of user experience design and employ cutting-edge strategies to make your website, application intuitive, engaging, and downright addictive.
                    </p>
                    <p className='mb-3'>Phone: <a href="tel:+917604921773" className="text-white hover:underline">+91 7604921773</a></p>
                    <p className='mb-3'>Address: Tiruchirappalli</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-white text-lg font-bold mb-3">Quick Links</h2>
                    <div className="space-y-2">
                        <Link href="/"><p className="hover:text-white mb-2">Company</p></Link>
                        <Link href="/PrivacyPolicy"><p className="hover:text-white mb-2">Privacy Policy</p></Link>
                        <Link href="/AboutUs"><p className="hover:text-white mb-2">About Us</p></Link>
                    </div>
                </div>

                {/* Resources */}
                <div>
                    <h2 className="text-white text-lg font-bold mb-3">Resources</h2>
                    <ul className="space-y-2">
                        <Link href="/"><li className="hover:text-white mb-2">Support</li></Link>
                        <Link href="/Contact"><li className="hover:text-white mb-2">Contact</li></Link>
                        <Link href="/"><li className="hover:text-white mb-2">Terms</li></Link>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold text-white mb-6 leading-tight">Social Links</h1>
                    <div className="flex space-x-4 justify-start">
                        <a href="https://www.instagram.com/tekno_spot_/" className="text-white hover:text-black bg-[#fbfbfb22] rounded-full px-2 py-2" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </a>
                        <a href="https://www.youtube.com/@Tekno_Spot" className="text-white hover:text-black bg-[#fbfbfb22] rounded-full px-2 py-2" aria-label="YouTube">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                        <Link href="/" className="text-white hover:text-black bg-[#fbfbfb22] rounded-full px-2 py-2" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-400 pt-4">
                <p className="text-center text-sm text-gray-200">© 2024 TEKNO SPOT. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
