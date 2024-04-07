// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegHandshake } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { CgTrack } from "react-icons/cg";


const HowItWorks = () => {
  return (
    <div className="text-center p-24 bg-white">
      <h1 className="text-4xl font-bold my-8">How It Works</h1>
      <div className="flex justify-center space-x-4 my-8 mt-20">
        <div className="flex flex-col items-center bg-[#2DA68B] p-16 flex-1 rounded-md">
          <GiAutoRepair size={64} />
          <p className='my-20 text-2xl'>Request Assistance</p>
        </div>
        <div className="flex flex-col items-center bg-[#2DA68B] p-16 flex-1 rounded-md">
          <FaRegHandshake size={64} />
          <p className='my-20 text-2xl'>Get Matched With Helper</p>
        </div>
        <div className="flex flex-col items-center bg-[#2DA68B] p-16 flex-1 rounded-md">
          <CgTrack size={64} />
          <p className='my-20 text-2xl'> Track Helpers Arrival</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
