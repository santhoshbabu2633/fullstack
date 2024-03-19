import React from 'react';
import '../../assets/css/Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
      
      <div className='navbar__item'>
        <a href="/" className='navbar__link'>Home</a>
      </div>
      <div className='navbar__item'>
        <a href="/about" className='navbar__link'>Enquiry</a>
      </div>
      <div className='navbar__item'>
        <a href="/about" className='navbar__link'>Certification Courses</a>
      </div>
      <div className='navbar__item'>
        <a href="/about" className='navbar__link'>About Us</a>
      </div>
    </div>
  );
};

export default Navbar;
