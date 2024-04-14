// eslint-disable-next-line no-unused-vars
import React from 'react'
import roadsideImage from '../assets/deep_blue.jpg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='min-h-screen flex items-center justify-items-start bg-fixed bg-no-repeat bg-center'
         style={{
           backgroundColor: '#FFA500',
           backgroundSize: 'cover',  
           backgroundPosition: 'center',
           
         }}
         >
      <div className=' p-40 rounded-lg hero'>
        <h1 className="text-6xl font-bold text-blue-900">Get Road Assistance Anytime, Anywhere!</h1>
        <p className='my-10 text-2xl text-blue-900'>Fixify: Your Roadside Assistance Solution - Instant Help When You Need It Most!</p>
        <Link to='/find-help'>
          <button className="bg-blue-900 text-white px-6 py-4 rounded-md hover:bg-blue-700 text-xl font-semibold">Find Help Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
