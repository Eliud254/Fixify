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
    <nav className="p-4 bg-emerald-600 text-white">
      <div className="container mx-auto max-w-screen-xl relative">
        {/* Flex container */}
        <div className="flex justify-between items-center text-white text-2xl ">
          <Link to="/">
            <span>Fixify</span>
          </Link>

          {/* Menu */}
          <div className="hidden lg:flex space-x-6 text-sm items-center ">
            {NavLinks.map((link, index) => (
              <Link to={link.path} key={index} className="hover:text-green-800 duration-300 ease-in-out cursor-pointer text-2xl">
                {link.title}
              </Link>
            ))}
            <Link to="/login">
              <button className="px-5 rounded-md font-medium bg-white text-black border-green-800 py-2 hover:bg-green-700 hover:border-green-700 text-2xl" onClick={toggleLogin}>
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
                  <Link to={link.path} key={index} className="hover:text-green-700 duration-300 ease-in-out cursor-pointer text-2xl">
                    {link.title}
                  </Link>
                ))}
                <Link to="/login">
                  <button className="px-5 rounded-md font-medium bg-white text-black border-green-800 py-2 hover:bg-green-700 hover:border-green-800 text-2xl">
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
