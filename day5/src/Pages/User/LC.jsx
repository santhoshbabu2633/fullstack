import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../assets/css/LC.css';

const LC = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleButtonClick = () => {
    navigate('/ctable'); // Navigate to '/ctable' route
  };

  return (
    <div>
      <Navbar />
      <div className='lcc1'></div>
      <div className='lcc11'>
        <p>Level: A2</p>
        <p>Course Name: LanguageCert International ESOL A2 Access</p>
        <p>Price: £39.00</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc2'></div>
      <div className='lcc21'>
        <p>Level: B1</p>
        <p>Course Name: LanguageCert International ESOL B1 Achiever</p>
        <p>Price: £45.00</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc3'></div>
      <div className='lcc31'>
        <p>Level: B2</p>
        <p>Course Name: LanguageCert International ESOL B2 Communicator</p>
        <p>Price: £61.00</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc4'></div>
      <div className='lcc41'>
        <p>Level: C1</p>
        <p>Course Name: LanguageCert International ESOL C1 Expert</p>
        <p>Price: £65.00</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc5'></div>
      <div className='lcc51'>
        <p>Level: C2</p>
        <p>Course Name: LanguageCert International ESOL C2 Mastery</p>
        <p>Price: £67.00</p>
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <Footer />
    </div>
  );
}

export default LC;
