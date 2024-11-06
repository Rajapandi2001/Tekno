"use client";
import { AiOutlineDesktop, AiOutlineCloudServer, AiOutlineSetting, AiOutlineThunderbolt, AiOutlineGlobal, AiOutlineSecurityScan } from 'react-icons/ai';

export default function Web() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16"
      style={{ backgroundImage: "url('img/footer-bg1.c3e6cabd.jpg')" }}
    >
      <div className="text-center mb-8">
        <h2 className="text-yellow-400 font-semibold">FUTUREPROOF SOLUTIONS</h2>
        <h1 className="text-4xl font-bold">Stay Ahead of the Curve!</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Responsive Web Design */}
        <div className="flex flex-col items-center text-center p-6 bg-[#ffffff44] rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <AiOutlineDesktop className="text-6xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Responsive Web Design</h3>
          <p>Does not matter what device your user is on - our websites adapt quickly to every screen and give users a comfortable viewing experience!</p>
        </div>

        {/* Web Hosting Services */}
        <div className="flex flex-col items-center text-center p-6 bg-[#ffffff44] rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <AiOutlineCloudServer className="text-6xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Hosting Services</h3>
          <p>We've got your websites back  providing top-notch web hosting services with a side of tech-savvy charm.</p>
        </div>

        {/* Website Maintenance */}
        <div className="flex flex-col items-center text-center p-6 bg-[#ffffff44] rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <AiOutlineSetting className="text-6xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Website Maintenance</h3>
          <p>We provide hassle-free website maintenance services to keep things running smoothly without any hitches!</p>
        </div>

        {/* Lightning Fast */}
        <div className="flex flex-col items-center text-center p-6 bg-[#ffffff44] rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <AiOutlineThunderbolt className="text-6xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
          <p>Having a website that facilitates quick loading is a dealbreaker for many users  and with us, you will never have to worry!</p>
        </div>

        {/* Domain Names */}
        <div className="flex flex-col items-center text-center p-6 bg-[#ffffff44] rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <AiOutlineGlobal className="text-6xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Domain Names</h3>
          <p>A good domain name can do wonders for your website traffic, and we have got it covered  consider it in good hands!</p>
        </div>

        {/* Robust Security Features */}
        <div className="flex flex-col items-center text-center p-6 bg-[#ffffff44] rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <AiOutlineSecurityScan className="text-6xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Robust Security Features</h3>
          <p>We provide a comprehensive array of resilient security features to safeguard your assets and information with utmost diligence.</p>
        </div>
      </div>
    </section>
  );
}
