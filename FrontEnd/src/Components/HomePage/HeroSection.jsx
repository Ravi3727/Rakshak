import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../Common/NavBar'
import { Footer } from '../Common/Footer'
function HeroSection() {
  return (
    <div className='min-w-[100vw] min-h-[100vh] flex flex-col justify-between'>
    <NavBar/>
    <div className=' text-blue-400'></div>
    <Footer/>
    </div>
  )
}

export default HeroSection