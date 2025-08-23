import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState , setPlayState] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <Hero/>
      
      <div className="container">
        <Title subtitle='OUR PROGRAMS' title='What we offer'/>
         <Programs/>
         <About setPlayState={setPlayState}/>
         <Title subtitle='GALLERY' title='Campus Photos'/>
         <Campus/>
         <Title subtitle='TESTIMONIALS' title='What our students says'/>
         <Testimonials/>
         <Title subtitle='CONTACT US' title='Get in Touch'/>
         <Contact/>
         <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
