import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../assets/css/bc.css';

const Bec = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleButtonClick = () => {
    navigate('/ctable'); // Navigate to '/ctable' route
  };

  return (
    <div>
      <Navbar />
      <div className='lcc1'></div>
      <div className='lcc11'>
        <br />
        Course Name: BEC Preliminary<br />
        Price: ₹4100 <br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc2'></div>
      <div className='lcc21'>
        <br />
        Course name: BEC Vantage<br />
        Price: ₹4850 <br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc3'></div>
      <div className='lcc31'>
        <br />
        Course name: BEC Higher <br />
        Price: ₹7150 <br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <Footer />
    </div>
  );
}

export default Bec;
