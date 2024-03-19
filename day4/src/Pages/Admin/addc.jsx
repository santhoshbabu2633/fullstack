import React from 'react'
import Navbar from '../../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import ebg from '../../assets/images/c.webp';
import '../../assets/css/addc.css';
const addc = () => {
  const navigate = useNavigate(); 
  const handleSubmit = () => {
   
    navigate('/advc');
  };
  return (
    <div> <Navbar></Navbar>
    <img className='ebg' src={ebg}></img>
    <div className='ebox'>
        <div className='elabel'> Add Courses </div>
        <input className='e1' type='text' placeholder='Course name'></input><br></br>
    <textarea
            className='e2'
            placeholder="Description"
           
          ></textarea>
    <input className='e3' type='email' placeholder='Email Id'></input><br></br>
    <input className='e4' type='text' placeholder='Cost'></input><br></br>
    
    <button className='eBtn' type='submit' onClick={handleSubmit}>Submit</button>
    </div>
    <Footer></Footer></div>
  )
}

export default addc