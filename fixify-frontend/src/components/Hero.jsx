// eslint-disable-next-line no-unused-vars
import React from 'react'
import roadsideImage from '../assets/roadside.jpeg'

const Hero = () => {
  return (
    <div className='min-h-screen flex items-center justify-items-start bg-fixed bg-no-repeat bg-center opacity-75'
         style={{
           backgroundImage: `url(${roadsideImage})`,
           backgroundSize: 'cover',  
           backgroundPosition: 'center',
           
         }}
         >
      <div className=' p-40 rounded-lg hero'>
        <h1 className="text-6xl font-semibold text-white">Get Road Assistance Anytime, Anywhere!</h1>
        <p className='my-10 text-2xl text-[#2DA68B]'>Fixify: Your Roadside Assistance Solution - Instant Help When You Need It Most!</p>
        <button className="bg-[#2DA68B] text-white px-6 py-4 rounded-md hover:bg-green-700 text-xl font-semibold">Find Help Now</button>
      </div>
    </div>
  )
}

export default Hero
