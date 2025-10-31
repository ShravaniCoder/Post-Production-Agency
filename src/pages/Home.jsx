import React from 'react'
import Hero from '../components/Hero';
import HomeService from '../components/HomeService';
import WhyChooseUs from '../components/WhyChoose';
import Contact from '../components/Contact';

const Home = () => {
  return (
   <>
   <div className='bg-black'>
   <Hero />
   <HomeService />
   <WhyChooseUs />
   <Contact />
   </div>
   </>
  )
}

export default Home;