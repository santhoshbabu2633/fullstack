import React from 'react'
import Navbar from '../assets/Components/Navbar';
import '../assets/css/Home.css';
import logo from '../assets/images/logo.png'; 
const Home = () => {
  return (
    <div>
    <Navbar></Navbar>
      <div className='hbg'>
        
      </div>
      <div className='bbox'>
      <img className='logo' src={logo} alt="Logo"></img>
      <div className='dd'>
      British English Certification</div></div>
      <div></div>
    
    </div>
  )
}

export default Home