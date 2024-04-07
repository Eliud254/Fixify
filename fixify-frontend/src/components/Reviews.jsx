// eslint-disable-next-line no-unused-vars
import React from 'react'
import placeholder from '../assets/place-holder-avatar.jpg'

const Reviews = () => {
  return (
    <div className="text-center p-24">
      <h1 className="text-4xl font-bold my-8">Reviews</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 mt-20">
        <div className="flex flex-col items-center bg-white p-8 rounded-md">
          <img src={placeholder} alt="Avatar 1" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-xl mt-8 ">Just Austin</p>
          <p className="text-gray-500 mt-8 mb-8">Towing service was great!</p>
        </div>
        <div className="flex flex-col items-center bg-white p-8 rounded-md">
          <img src={placeholder} alt="Avatar 2" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-xl mt-8 ">Billy the Mont</p>
          <p className="text-gray-500 mt-8 mb-8">Quick and efficient tire change!</p>
        </div>
        <div className="flex flex-col items-center bg-white p-8 rounded-md">
          <img src={placeholder} alt="Avatar 3" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-xl mt-8 ">Achilles</p>
          <p className="text-gray-500 mt-8 mb-8">Helped me jumpstart my car in no time!</p>
        </div>
        <div className="flex flex-col items-center bg-white p-8 rounded-md">
          <img src={placeholder} alt="Avatar 4" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-xl mt-8 ">Ragner</p>
          <p className="text-gray-500 mt-8 mb-8">Excellent service, highly recommended!</p>
        </div>
      </div>
      <button className="bg-black text-white px-6 py-4 rounded-md hover:bg-green-700 text-xl font-semibold mt-20">Give Review</button>
    </div>
  )
}

export default Reviews
