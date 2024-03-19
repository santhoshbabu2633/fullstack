import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../../assets/css/LC.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const TOEFL = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleButtonClick = () => {
    navigate('/ctable'); // Navigate to '/ctable' route
  };

  return (
    <div>
      <Navbar />
      <div className='tcc1'></div>
      <div className='lcc11'>
        Course Name: Test of English as a Foreign Language<br />
        Price: ₹16,900 INR<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <Footer />
    </div>
  );
}

export default TOEFL;
