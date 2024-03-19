import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../assets/css/Payment.css';
import mc from '../../assets/images/mc.png';
import vc from '../../assets/images/visa.png';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Payment = () => {
  const navigate = useNavigate(); 
  const [showModal, setShowModal] = useState(false); 

  const handleProceed = () => {
    
    setShowModal(true);
  };

  const closeModal = () => {
   
    setShowModal(false);

  
    navigate('/home');
  };

  return (
    <div>
      <Navbar />
      <div className='pbox'></div>
      <div className='pbox1'>
        <br></br>
        <div className='ph'>Payment</div>
        <img className='con1' src={mc} alt="mc"></img>
        <img className='con2' src={vc} alt="vc"></img>
        <input className='con3' placeholder='card holder name'></input>
        <input className='con4' placeholder='card number'></input>
        <input className='con5' placeholder='exp date'></input>
        <input className='con6' placeholder='CVV'></input>
        <br></br>
        <button className='payb' onClick={handleProceed}>Proceed</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Payment successful! ✔️</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Payment;
