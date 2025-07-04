import React from 'react'
import Header from '../components/Header'
import Steps from '../components/steps'
import Description from '../components/Description'
import Testimonial from '../components/testimonial'
import GenerateBtn from '../components/GenerateBtn'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonial/>
      <GenerateBtn/>
      
    </div>
  )
}

export default Home
