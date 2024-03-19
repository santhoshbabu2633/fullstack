import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../assets/css/Adash.css';
import { useNavigate } from 'react-router-dom';
import ud1 from '../../assets/images/c.webp';
import ud21 from '../../assets/images/pay.jpeg';
import ud31 from '../../assets/images/a.jpg';
import ud41 from '../../assets/images/h.webp';

const Dash = () => {
    const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <div>
        <Navbar></Navbar>
        <div className='ud1'>Add Courses<br></br><br></br><img className='ud41' src={ud41} onClick={() => handleNavigate('/addc')}></img>
    </div>
    <div className='ud1'>View Courses<br></br><br></br><img className='ud11' src={ud1} onClick={() => handleNavigate('/advc')}></img>
    </div>
    <div className='ud2'>View Payment details<br></br><br></br><img className='ud21' src={ud21} onClick={() => handleNavigate('/payt')}></img>
    </div>
    <div className='ud3'>View Enquiries<br></br><br></br><img className='ud31' src={ud31} onClick={() => handleNavigate('/etable')}></img>

    </div>
        <Footer></Footer>
    </div>
  )
}

export default Dash