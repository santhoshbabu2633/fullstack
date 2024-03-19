import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../assets/css/Trinity.css';

const Trinity = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/ctable'); 
  };

  return (
    <div>
      <Navbar />
      <div className='lcc1'></div>
      <div className='lcc11'>
        Course Name: ISE Foundation (CEFR A2)<br />
        Duration: 2hrs 10 min <br />
        Price: £85 - £110<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc2'></div>
      <div className='lcc21'>
        Course name: ISE I (CEFR B1)<br />
        Duration: 2 hrs and 40 min<br />
        Price: £110 - £135<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc3'></div>
      <div className='lcc31'>
        Course name: ISE II (CEFR B2) <br />
        Duration: 3 hrs and 30 min<br />
        Price: £135 - £160<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc4'></div>
      <div className='lcc41'>
        Course name: ISE III (CEFR C1)<br />
        Duration: 4 hrs and 15 min<br />
        Price: £160 - £185<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <div className='lcc5'></div>
      <div className='lcc51'>
        Course name: ISE IV (CEFR C2)<br />
        Duration: 4 hrs and 45 min<br />
        Price: £185 - £210<br />
        <button className='aBtn' type='submit' onClick={handleButtonClick}>Add</button>
      </div>
      <Footer />
    </div>
  );
}

export default Trinity;
