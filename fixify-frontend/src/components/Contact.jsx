
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="container mx-auto px-4 py-8 padding-adjustment">
      <div className='items-center flex flex-col '>
        <h1 className="text-5xl text-blue-900 font-bold mb-4">Contact Us</h1>
        <div className="underline mb-20"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-lg" />
            <div>
              <p className="text-lg">Address:</p>
              <p>123 Main St,</p>
              <p>Nairobi,</p>
              <p>Kenya</p>
            </div>
          </div>
          <div className="flex items-center mt-4 mb-2">
            <FaPhone className="mr-2 text-lg" />
            <div>
              <p className="text-lg">Phone:</p>
              <p>123-456-7890</p>
            </div>
          </div>
          <div className="flex items-center mt-4 mb-2">
            <FaEnvelope className="mr-2 text-lg" />
            <div>
              <p className="text-lg">Email:</p>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={30} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare size={30} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare size={30} />
            </a>
          </div>
        </div>
        <div className="h-full">
          {/* Google Maps integration */}
          <div className="h-full">
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              //src={`https://www.google.com/maps/embed/v1/place?q=123+Main+St,+Nairobi,+Kenya&key=YOUR_API_KEY`}
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

