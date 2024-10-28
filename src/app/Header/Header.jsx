"use client"; // Mark this file as a client component

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active
  const router = useRouter();

  const handleNavToggle = () => {
    setNav((prev) => !prev);
    setDropdownVisible(false); // Close dropdown when nav is toggled
    setActiveDropdown(null); // Reset active dropdown
  };

  const handleDropdownToggle = (id) => {
    if (activeDropdown === id) {
      // If the dropdown is already active, close it
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id); // Set the active dropdown
    }
  };

  const closeAllMenus = () => {
    setNav(false);
    setDropdownVisible(false);
    setActiveDropdown(null); // Reset active dropdown
  };

  const handleNavClick = (path) => {
    closeAllMenus();
    router.push(path);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Services', path: '/Services' },
    { id: 3, text: 'Company', path: '/Company', hasDropdown: true },
    { id: 4, text: 'Contact', path: '/Contact' },
  ];

  return (
    <>
      <title>Tekno Spot</title>
      <link rel="icon" href="img/logo.png" />
      <div className='flex justify-between items-center h-24 max-w-full mx-auto px-4 bg-cyan-900 text-black shadow-md relative'>
        {/* Background Shapes */}
        <div className="shape absolute left-0 top-0 opacity-10 h-full w-1/3 md:w-1/2 lg:w-1/3 z-0">
          <img src="img/footer-shape-left.png" alt="Background Shape Left" className="h-full w-full object-cover" />
        </div>
        <div className="shape absolute right-0 top-0 opacity-10 h-full w-1/3 md:w-1/2 lg:w-1/3 z-0">
          <img src="img/footer-shape-right.png" alt="Background Shape Right" className="h-full w-full object-cover" />
        </div>

        {/* Logo */}
        <div onClick={() => handleNavClick('/')} className='cursor-pointer z-10'>
          <img src="img/LOGO.svg" alt="Logo" className='w-40 h-20' />
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex font-medium z-10'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 m-2 cursor-pointer duration-300 font-semibold hover:text-white relative'
              onClick={item.hasDropdown ? () => handleDropdownToggle(item.id) : () => handleNavClick(item.path)}
              role="menuitem"
              aria-label={item.text}
            >
              <div className="flex items-center">
                {item.text}
                {item.hasDropdown && <AiOutlineDown className='ml-2' />}
              </div>
              {/* Dropdown for "Company" */}
              {item.hasDropdown && activeDropdown === item.id && (
                <ul className='absolute top-full left-0 bg-white shadow-md rounded-md mt-2 py-2 z-20 transition-opacity duration-200 ease-in-out opacity-100'>
                  <li
                    className='px-10 py-2 cursor-pointer hover:bg-gray-200 hover:text-black'
                    onClick={() => handleNavClick('/AboutUs')}
                  >
                    About Us
                  </li>
                  <li
                    className='px-10 py-2 cursor-pointer hover:bg-gray-200 hover:text-black'
                    onClick={() => handleNavClick('/Career')}
                  >
                    Career
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNavToggle} className='block md:hidden cursor-pointer z-10' aria-label="Toggle Navigation">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`${nav ? 'z-50 fixed' : 'fixed left-[-100%]'} md:hidden top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500`}
        >
          {/* Mobile Logo */}
          <div onClick={() => handleNavClick('/')} className='cursor-pointer'>
            <img src="img/LOGO.svg" alt="Logo" className='w-40 h-20 mb-10 mt-5' />
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 border-b rounded-xl font-medium duration-300 hover:text-black cursor-pointer border-gray-600 relative'
              onClick={item.hasDropdown ? () => handleDropdownToggle(item.id) : () => handleNavClick(item.path)}
              role="menuitem"
              aria-label={item.text}
            >
              <div className="flex items-center">
                {item.text}
                {item.hasDropdown && <AiOutlineDown className='ml-2' />}
              </div>
              {/* Mobile Dropdown for "Company" */}
              {item.hasDropdown && activeDropdown === item.id && (
                <ul className='bg-white rounded-md mt-2 py-2 z-20'>
                  <li
                    className='px-6 py-2 cursor-pointer hover:bg-gray-200'
                    onClick={() => handleNavClick('/AboutUs')}
                  >
                    About Us
                  </li>
                  <li
                    className='px-6 py-2 cursor-pointer hover:bg-gray-200'
                    onClick={() => handleNavClick('/Career')}
                  >
                    Career
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
