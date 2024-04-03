import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import LoginSignUp from "./LoginSignUp";
import { Link } from "react-router-dom";

const NavLinks = [
  "Services",
  "About Us",
  "Contacts",
];

const Navbar = () => {
  const [nav, setNavbar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleNav = () => {
    setNavbar((prev) => !prev);
  };

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <nav className="p-4 bg-emerald-600 text-white">
      <div className="container mx-auto max-w-screen-xl relative">
        {/* Flex container */}
        <div className="flex justify-between items-center text-white">
          <a href="/">
            <span>Fixi</span>fy
          </a>

          {/* Menu */}
          <div className="hidden lg:flex space-x-6 text-sm items-center">
            {NavLinks.map((link, index) => (
              <a key={index} className="hover:text-indigo-600 duration-300 ease-in-out cursor-pointer">
                {link}
              </a>
            ))}
            <Link to="/login">
              <button className="px-5 rounded-md font-medium bg-white text-black border-indigo-600 py-2 hover:bg-green-700 hover:border-green-700" onClick={toggleLogin}>
              {showLogin ? 'SignUp' : 'Login'}
              </button>
            </Link>
          </div>

          {/* Hamburg menu */}
          <div className="lg:hidden" onClick={toggleNav}>
            {nav ? <IoClose size={28} className="text-white" /> : <AiOutlineMenuFold size={25} />}
          </div>

          {/* Mobile menu view */}
          {nav && (
            <div className="absolute top-14 left-0 right-0 bg-emerald-600 text-white z-50 px-4 py-8 rounded-lg">
              <div className="space-y-6 flex flex-col items-center">
                {NavLinks.map((link, index) => (
                  <a key={index} className="hover:text-green-700 duration-300 ease-in-out cursor-pointer">
                    {link}
                  </a>
                ))}
                <Link to="/login">
                  <button className="px-5 rounded-md font-medium bg-white text-black border-indigo-600 py-2 hover:bg-green-700 hover:border-indigo-700">
                  {showLogin ? 'SignUp' : 'Login'}
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;