import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../assets/css/Enquiry.css';
import ebg from '../../assets/images/istockphoto-1568199725-170667a.webp'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Enquiry = () => {
  const navigate = useNavigate(); 

  const handleSubmit = () => {
   
    navigate('/etable');
  };

  return (
    <div>
      <Navbar />
      <img className='ebg' src={ebg} alt="ebg" />
      <div className='ebox'>
        <div className='elabel'> Enquiry </div>
        <input className='e1' type='text' placeholder='Course name'></input><br></br>
        <textarea
          className='e2'
          placeholder="Description"
        ></textarea>
        <input className='e3' type='email' placeholder='Email Id'></input><br></br>
        <select className='e4'>
          <option value="">Enquiry Type</option>
          <option value="t1">Certification Status</option>
          <option value="t2">Verification</option>
          <option value="t3">Course Requirements</option>
          <option value="t4">Complaints</option>
          <option value="t5">Others</option>
        </select><br></br>
        <button className='eBtn' type='submit' onClick={handleSubmit}>Submit</button>
      </div>
      <Footer />
    </div>
  );
}

export default Enquiry;
