
// Contact.jsx

import React from 'react';

const Contacts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-lg mb-2">Address:</p>
          <p>123 Main St,</p>
          <p>City,</p>
          <p>Country</p>
          <p className="text-lg mt-4 mb-2">Phone:</p>
          <p>123-456-7890</p>
          <p className="text-lg mt-4 mb-2">Email:</p>
          <p>info@example.com</p>
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
              //src={`https://www.google.com/maps/embed/v1/place?q=123+Main+St,+City,+Country&key=YOUR_API_KEY`}
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
