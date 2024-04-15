import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavLinks = [
  { title: "Services", path: "/services" },
  { title: "About Us", path: "/about" },
  { title: "Contacts", path: "/contacts" },
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
    <nav className={`p-4 custom-bg-color text-white fixed top-0 left-0 right-0 z-50`}>
      <div className="container mx-auto max-w-screen-xl relative">
        {/* Flex container */}
        <div className="flex justify-between items-center custom-text-color text-2xl ">
          <Link to="/">
            <span>Fixify</span>
          </Link>

          {/* Menu */}
          <div className="hidden lg:flex space-x-6 text-sm items-center ">
            {NavLinks.map((link, index) => (
              <Link to={link.path} key={index} className="hover:text-blue-500 duration-300 ease-in-out cursor-pointer text-2xl">
                {link.title}
              </Link>
            ))}
            <Link to="/login">
              <button className="px-5 rounded-md font-medium main-bg-color text-black  py-2 hover:bg-blue-500 hover:border-green-700 text-2xl" onClick={toggleLogin}>
                {showLogin ? 'SignUp' : 'Login'}
              </button>
            </Link>
          </div>

          {/* Hamburg menu */}
          <div className="lg:hidden" onClick={toggleNav}>
            {nav ? <IoClose size={28} className="custom-text-color" /> : <AiOutlineMenuFold size={25} />}
          </div>

          {/* Mobile menu view */}
          {nav && (
            <div className="absolute top-14 left-0 right-0 bg-blue-900 custom-text-color z-50 px-4 py-8 rounded-lg">
              <div className="space-y-6 flex flex-col items-center">
                {NavLinks.map((link, index) => (
                  <Link to={link.path} key={index} className="hover:text-blue-500 duration-300 ease-in-out cursor-pointer text-2xl">
                    {link.title}
                  </Link>
                ))}
                <Link to="/login">
                  <button className="px-5 rounded-md font-medium main-bg-color text-black py-2 hover:bg-blue-500 text-2xl">
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
