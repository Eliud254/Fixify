
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="container mx-auto px-4 py-8 padding-adjustment">
      <div className='items-center flex flex-col '>
        <h1 className="text-5xl text-blue-900 font-bold mb-4">Contact Us</h1>
        <div className="underline mb-20"></div>
      </div>
      <div className="flex flex-col w-full items-center px-20 text-blue-900 font-bold">
          <div className="flex items-center mb-10 w-9/12">
            <FaMapMarkerAlt className="mr-2 text-4xl " />
            <div className='ml-16'>
              <p className="text-lg">Address:</p>
              <p>123 Main St,Nairobi, Kenya</p>
            </div>
          </div>

          <div className="flex items-center mt-4 mb-10 w-9/12">
            <FaPhone className="mr-2 text-4xl" />
            <div className='ml-16'>
              <p className="text-lg">Phone:</p>
              <p>123-456-7890</p>
            </div>
          </div>

          <div className="flex items-center mt-4 mb-10 w-9/12">
            <FaEnvelope className="mr-2 text-4xl " />
            <div className='ml-16'>
              <p className="text-lg">Email:</p>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="flex mt-4 space-x-4 w-9/12 mb-20">
            <a href="#" className="text-blue-900 hover:text-blue-700" target="_blank" rel="noopener noreferrer " style={{ marginRight: '20px' }}>
              <FaFacebookSquare size={40} />
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700" target="_blank" rel="noopener noreferrer mr-10" style={{ marginRight: '20px' }}>
              <FaTwitterSquare size={40} />
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700" target="_blank" rel="noopener noreferrer mr-10" style={{ marginRight: '20px' }}>
              <FaInstagramSquare size={40} />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Contacts;

