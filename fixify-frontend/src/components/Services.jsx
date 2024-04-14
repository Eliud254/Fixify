import React from 'react';
import { GiTowTruck, GiCarWheel } from "react-icons/gi";
import { FaCarBattery } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="text-center p-24">
      <h1 className="text-4xl font-bold my-8">Services</h1>
      <div className="flex justify-center space-x-4 my-8 mt-20">
        <div className="flex flex-col items-center bg-white p-16 flex-1 rounded-md cursor-pointer hover:opacity-50">
          <GiTowTruck size={64} />
          <p className='my-10 text-2xl'>Towing</p>
        </div>
        <div className="flex flex-col items-center bg-white p-16 flex-1 rounded-md cursor-pointer hover:opacity-50">
          <GiCarWheel size={64} />
          <p className='my-10 text-2xl'>Tyre Change</p>
        </div>
        <div className="flex flex-col items-center bg-white p-16 flex-1 rounded-md cursor-pointer hover:opacity-50">
          <FaCarBattery size={64} />
          <p className='my-10 text-2xl'>Battery Jumpstart</p>
        </div>
      </div>
      <Link to='/find-help'>
        <button className="bg-black text-white px-6 py-4 rounded-md hover:bg-green-700 text-xl font-semibold mt-20">Get Help Now</button>
      </Link>
    </div>
  );
};

export default Services;
