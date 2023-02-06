import React from 'react'
import './Home.css'
// import Navbar from './Navbar'

export const Home = () => {
  return (
    // <><Navbar /></>
    <div className='home-container'>
        <video src='./video/video-1.mp4' autoPlay logo muted></video>
        <h1>Buy Priemum Products</h1>
        <p>what are you waiting for?</p>
        <div className='home-btns'>
          <button className='btns'> Get Started </button>
          <button className='btns'> Shop Now </button>
        </div>
    </div>
  )
}
export default Home;
