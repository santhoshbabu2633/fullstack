import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../assets/css/IELTS.css';

const IELTS = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleButtonClick = () => {
    navigate('/ctable'); // Navigate to '/ctable' route
  };

  return (
    <div>
      <Navbar />
      <div className='lcc1'></div>
      <div className='lcc11'>
        <p>Course Name: Computer-based IELTS for UKVI</p>
        <p>Price: INR 16,500</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc2'></div>
      <div className='lcc21'>
        <p>Course name: IELTS for UK visa & immigration</p>
        <p>Price: INR 16,500</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc3'></div>
      <div className='lcc31'>
        <p>Course name: c</p>
        <p>Price: INR 16,250</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc4'></div>
      <div className='lcc41'>
        <p>Course name: Pen & paper based IELTS</p>
        <p>Price: INR 16,250</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc5'></div>
      <div className='lcc51'>
        <p>Course name: IELTS life skill (A1 & B1)</p>
        <p>Price: INR 15,350</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <Footer />
    </div>
  );
}

export default IELTS;
