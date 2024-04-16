// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    
    <footer className="bg-blue-900 text-white mt-auto w-full">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="list-none">
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/services" className="hover:text-gray-400">Our Services</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <p>123 Street Name</p>
            <p>City, Country</p>
            <p>Email: info@fixify.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 text-center py-4">
        <p>&copy; {new Date().getFullYear()} Fixify. All rights reserved.</p>
      </div>
    </footer>
    
  );
};

export default Footer;
