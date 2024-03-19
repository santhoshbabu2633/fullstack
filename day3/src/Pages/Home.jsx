import React from 'react'
import Navbar from '../Components/Navbar';
import '../assets/css/Home.css';
import logo from '../assets/images/logo.png'; 
import Footer from '../Components/Footer';
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
      
      <div></div><br></br><br></br>
    <Footer></Footer>
    </div>
  )
}

export default Home;