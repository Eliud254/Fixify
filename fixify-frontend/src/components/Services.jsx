// eslint-disable-next-line no-unused-vars
import React from 'react'
import { GiTowTruck, GiCarWheel } from "react-icons/gi"
import { FaCarBattery } from "react-icons/fa6";


const Services = () => {
  return (
    <div className="text-center p-24">
      <h1 className="text-3xl font-bold my-8">Services</h1>
      <div className="flex justify-center space-x-4 my-8">
        <div className="flex flex-col items-center bg-white p-16 flex-1 rounded-md">
          <GiTowTruck size={64} />
          <p className='my-10 text-xl'>Towing</p>
        </div>
        <div className="flex flex-col items-center bg-white p-16 flex-1 rounded-md">
          <GiCarWheel size={64} />
          <p className='my-10 text-xl'>Tyre Change</p>
        </div>
        <div className="flex flex-col items-center bg-white p-16 flex-1 rounded-md">
          <FaCarBattery size={64} />
          <p className='my-10 text-xl'> Battery Jumpstart</p>
        </div>
      </div>
      <button className="bg-black text-white px-6 py-4 rounded-md hover:bg-green-700">Get Help Now</button>
    </div>
  )
}

export default Services
