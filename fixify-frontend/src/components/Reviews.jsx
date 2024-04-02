// eslint-disable-next-line no-unused-vars
import React from 'react'
import placeholder from '../assets/place-holder-avatar.jpg'

const Reviews = () => {
  return (
    <div className="text-center p-24">
      <h1 className="text-3xl font-bold my-8">Reviews</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="flex flex-col items-center bg-white p-8 rounded-md">
          <img src={placeholder} alt="Avatar 1" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-xl">Reviewer 1</p>
          <p className="text-gray-500">Towing service was great!</p>
        </div>
        <div className="flex flex-col items-center bg-white p-8 rounded-md">
          <img src={placeholder} alt="Avatar 2" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-xl">Reviewer 2</p>
          <p className="text-gray-500">Quick and efficient tire change!</p>
        </div>
        <div className="flex flex-col items-center bg-white p-8 rounded-md">
          <img src={placeholder} alt="Avatar 3" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-xl">Reviewer 3</p>
          <p className="text-gray-500">Helped me jumpstart my car in no time!</p>
        </div>
        <div className="flex flex-col items-center bg-white p-8 rounded-md">
          <img src={placeholder} alt="Avatar 4" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-xl">Reviewer 4</p>
          <p className="text-gray-500">Excellent service, highly recommended!</p>
        </div>
      </div>
      <button className="bg-black text-white px-6 py-4 rounded-md hover:bg-green-700">Give Review</button>
    </div>
  )
}

export default Reviews
