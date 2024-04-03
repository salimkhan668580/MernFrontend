import React from 'react'

import HeroSection from '../../components/HeroSection/HeroSection'
import Service from '../../components/Service/Service'
import PapularProduct from '../../components/papularProduct/PapularProduct'
import Gallary from '../../components/Gallary/Gallary'



function Home({addTOCart}) {
  return (
    
    <>
      <HeroSection/>
      
    

        <Service/>
        <PapularProduct addTOCart={addTOCart}/>
        <Gallary/>
       
    </>
  )
}

export default Home