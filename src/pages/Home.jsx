import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'

const Home = () => {
  return (
    <>
      {/* jab bhi home page pe click kare ge ya redirect hoge toh hero component dikhe ga */}
      <Hero/>
      <LatestCollection/> 
      <BestSeller/> 
    </>
  )
}

export default Home
