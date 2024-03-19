import React from 'react'
import '../assets/css/userprofile.css';
import Navbar from '../../Components/Navbar';
const userprofile = () => {
  return (
    <div>
    <Navbar></Navbar>
   <div className='ubox'>
   
    
   </div>
   <div className='pc'>
   </div>
   <div className='pd'>
   <div className='name'>Name:</div>
   <div className='email'>Email:</div>
   <div className='phone'>Phone no:</div>
   <hr></hr>
   <div className='cd'>
    <div className='cd1'>Courses Enrolled:</div>
    <div className='cd2'>Enquiries Rised:</div>
    <div className='cd3'>Enquiries Solved:</div>

   </div>
   <button className='btt'>Contact Us</button>
   </div>
   </div>
  )
}

export default userprofile