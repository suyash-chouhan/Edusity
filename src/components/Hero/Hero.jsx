import React from 'react'
import './Hero.css'
import { Link } from "react-scroll";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'> 
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <Link to='about' smooth={true} offset={-150} duration={500} className='btn'>Explore More <img src={dark_arrow} alt="" /></Link> 
        
      </div>
    </div>
  )
}

export default Hero
