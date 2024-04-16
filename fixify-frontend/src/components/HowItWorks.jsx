// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegHandshake } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { CgTrack } from "react-icons/cg";


const HowItWorks = () => {
  return (
    <div className="text-center p-24 bg-blue-900">
      <h1 className="text-4xl font-bold my-8 text-white">How It Works</h1>
      <div className="flex justify-center space-x-4 my-8 mt-20">
        <div className="flex flex-col items-center bg-gray-200 p-16 flex-1 rounded-md cursor-pointer hover:opacity-75">
          <GiAutoRepair size={64} />
          <p className='my-20 text-2xl font-bold'>Request Assistance</p>
        </div>
        <div className="flex flex-col items-center bg-gray-200 p-16 flex-1 rounded-md cursor-pointer hover:opacity-75">
          <FaRegHandshake size={64} />
          <p className='my-20 text-2xl font-bold'>Get Matched With Helper</p>
        </div>
        <div className="flex flex-col items-center bg-gray-200 p-16 flex-1 rounded-md cursor-pointer hover:opacity-75">
          <CgTrack size={64} />
          <p className='mt-20 text-2xl font-bold'> Track Helpers Arrival</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
