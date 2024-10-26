"use client"; // Mark this file as a client component

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts } from 'react-icons/ai';
import Link from 'next/link'; // Import Link from next/link

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/', icon: <AiOutlineHome size={20} className="inline mr-2" /> },
    { id: 2, text: 'About Us', path: '/AboutUs', icon: <AiOutlineInfoCircle size={20} className="inline mr-2" /> },
    { id: 3, text: 'Contact', path: '/Contact', icon: <AiOutlineContacts size={20} className="inline mr-2" /> },
  ];

  return (
    <div className='flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black shadow-md'>
      {/* Logo */}
      <Link href="/" className='cursor-pointer'>
        <img src="img/LOGO.svg" alt="Logo" className='w-40 h-20' />
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex font-medium'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-gray-200 rounded-xl m-2 cursor-pointer duration-300 hover:text-green-400'
          >
            <Link href={item.path} aria-label={item.text} className="flex items-center">
              {item.icon}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer' aria-label="Toggle Navigation">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`${
          nav ? 'z-50 fixed' : 'fixed left-[-100%]'
        } md:hidden top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500`}
      >
        {/* Mobile Logo */}
        <Link href="/" className='cursor-pointer'>
          <img src="img/LOGO.svg" alt="Logo" className='w-40 h-20 mb-10 mt-5' />
        </Link>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl font-medium duration-300 hover:text-green-400 cursor-pointer border-gray-600'
          >
            <Link href={item.path} aria-label={item.text} className="flex items-center">
              {item.icon}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
