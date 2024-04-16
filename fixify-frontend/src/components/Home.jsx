import React from 'react'
import Hero from './Hero';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Reviews from './Reviews';


const Home = () => {
  return (
    <div>
        <Hero />
        <Services mt-0/>
        <HowItWorks />
        <Reviews />
    </div>
  )
}

export default Home
