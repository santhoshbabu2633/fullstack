import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import lcImage from '../assets/images/ic.png'; 
import { setUsername, setEmail, setPassword, setPhone } from '../redux/UserSlice';
import { Dialog } from '@mui/material';
import '../assets/css/Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  const email = useSelector(state => state.auth.email);
  const phone = useSelector(state => state.auth.phone);
  const password = useSelector(state => state.auth.password);
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      dispatch(setUsername(storedUsername));
    }

    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      dispatch(setEmail(storedEmail));
    }

    const storedPassword = localStorage.getItem('password');
    if (storedPassword) {
      dispatch(setPassword(storedPassword));
    }

    const storedPhone = localStorage.getItem('phone');
    if (storedPhone) {
      dispatch(setPhone(storedPhone));
    }
  }, [dispatch]);

  const handleProfileClick = () => {
    setIsDialogOpen(true); 
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); 
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('phone');
    navigate('/'); 
  };

  return (
    <div className='navbar'>
      <Link to="/home" className='link'><div className='navbar_link'>Home</div></Link>
      <Link to="/enquiry" className='link'><div className='navbar_link'>Enquiry</div></Link> 
      <Link to="/Certificate" className='link'><div className='navbar_link'>Certifications</div></Link>
      <Link to="/Faq" className='link'><div className='navbar_link'> FAQ </div></Link>

      
      <img className='profile' src={lcImage} alt="Profile Image" onClick={handleProfileClick} /> {/* Add onClick event to the profile image */}
      <div className='o'><span>{username}</span></div>
      
      <Link to="/udash" className='link'><div className='navbar_link'>Dashboard</div></Link>
      <Dialog  open={isDialogOpen} onClose={handleCloseDialog}>
        <div className='db'>
          <div className='img'></div>
          <div className='name'>
            <div className='s1'>Username: {username}</div>
            <div className='s2'>Email: {email}</div>
            <div className='s3'>Password: {password}</div>
            <div className='s4'>Phone: {phone}</div>
          </div>
          <button className='bts' onClick={handleLogout}>Logout</button> 
        </div>
      </Dialog>
    </div>
  );
};

export default Navbar;
