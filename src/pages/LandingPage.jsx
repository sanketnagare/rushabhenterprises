import React from 'react'
import Header from '../parts/Header';
import { useEffect } from 'react';
import Hero from '../parts/Hero';
import Services from '../parts/Services';


import data from '../assets/data/data.json'

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
        <Header/>
        <Hero/>
        <Services data={data.service}/>
    </div>
  )
}



export default LandingPage