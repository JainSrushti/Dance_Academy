import React from 'react'
import Homepic from '../Components/Home/Hero'
import Hero from '../Components/Home/Hero'
import Booking ,{Form} from '../Components/Home/Booking'
import Info from '../Components/Home/Info'
import Offer from '../Components/Home/Offer'
import Testimonials from '../Components/Home/Testimonials'
import Teacher from '../Components/Home/Teacher'
import News from '../Components/Home/News'

function Homepage() {
  return (
    <div>
      <Hero/>
      <Booking/>
      <Info/>
      <Offer/>
      <Testimonials/>
      <Teacher/>
      <News/>
    </div>
  )
}

export default Homepage
