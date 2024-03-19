import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../assets/css/pte.css';

const PTE = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleButtonClick = () => {
    navigate('/ctable'); // Navigate to '/ctable' route
  };

  return (
    <div>
      <Navbar />
      <div className='lcc1'></div>
      <div className='lcc11'>
        Level: Academic <br />
        Course Name: PTE Academic<br />
        Price: $445 AUD<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc2'></div>
      <div className='lcc21'>
        Level: Academic<br />
        Course name: PTE Academic Online<br />
        Price: $445 AUD<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc3'></div>
      <div className='lcc31'>
        Level: Core<br />
        Course name: PTE Academic <br />
        Price: $445 AUD<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc4'></div>
      <div className='lcc41'>
        Level: UK Visa and Immigration tests<br />
        Course name: LanguagePTE Home A1<br />
        Price: £$375 AUD<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc5'></div>
      <div className='lcc51'>
        Level: UK Visa and Immigration tests<br />
        Course name: PTE Home A2<br />
        Price: $375 AUD<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc6'></div>
      <div className='lcc61'>
        Level: UK Visa and Immigration tests<br />
        Course name: PTE Home B1<br />
        Price: $375 AUD<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc7'></div>
      <div className='lcc71'>
        Level: UK Visa and Immigration tests<br />
        Course name: PTE Academic UKVI<br />
        Price: $445 AUD<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <Footer />
    </div>
  );
}

export default PTE;
