import React from 'react'
import '../../assets/css/userdash.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ud1 from '../../assets/images/c.webp';
import ud21 from '../../assets/images/cert.webp';
import ud31 from '../../assets/images/a.jpg';
const dashboard = () => {
    const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <div><Navbar>

    </Navbar>
    <div className='ud1'>View Courses<br></br><br></br><img className='ud11' src={ud1} onClick={() => handleNavigate('/ctable')}></img>
    </div>
    <div className='ud2'>Add Enquiry<br></br><br></br><img className='ud21' src={ud21}onClick={() => handleNavigate('/enquiry')}></img>
    </div>
    <div className='ud3'>View Enquiries<br></br><br></br><img className='ud31' src={ud31}onClick={() => handleNavigate('/etable')}></img>

    </div>
    <Footer>

    </Footer>
    </div>
  )
}

export default dashboard