import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Certificate.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Certificate = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div>
      <Navbar />
      <div className='cc1' onClick={() => handleNavigate('/lc')}>
      
      </div>
      <div className='cc2' onClick={() => handleNavigate('/ielts')}>
      
      </div>
      <div className='cc3' onClick={() => handleNavigate('/toefl')}>
     
      </div>
      <div className='cc4' onClick={() => handleNavigate('/pte')}>
       
      </div>
      <div className='cc5' onClick={() => handleNavigate('/trinity')}>
        Trinity College of London
      </div>
      <div className='cc6' onClick={() => handleNavigate('/bec')}>
        Cambridge University
      </div>
      <Footer />
    </div>
  );
};

export default Certificate;
