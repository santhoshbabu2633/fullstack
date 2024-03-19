import React from 'react';
import '../../assets/css/Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [Email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [Role, setRole] = useState('');
  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = Email.trim();
    const enteredUsername = username.trim();
    const enteredPassword = password.trim();
    const enteredPhone = Phone.trim();
    const enteredRole=Role.trim();
    localStorage.setItem('email', enteredEmail);
    localStorage.setItem('username', enteredUsername);
    localStorage.setItem('password', enteredPassword);
    localStorage.setItem('phone', enteredPhone);
    localStorage.setItem('role', enteredRole);
    console.log('email saved to local storage:', enteredEmail);
    console.log('Username saved to local storage:', enteredUsername);
    console.log('password saved to local storage:', enteredPassword);
    console.log('phone saved to local storage:', enteredPhone);
    console.log('role saved to local storage:', enteredRole);

    setEmail('');
    setUsername('');
    setPassword('');
    setPhone('');
    setRole('');

    if (Role === 'role1') {
      navigate('/home'); // Navigate to '/home' route for user
    } else if (Role === 'role2') {
      navigate('/adash'); // Navigate to '/adash' route for admin
    }
    
  };

  return (
    <div className='rbg'>
      <br />
      <div className='rbox1'></div>
      <div className='rbox'>
        <br />
        <div className='rh1'>Register</div>
        <form onSubmit={handleSubmit}>
          <input
            className='rin1'
            type='text'
            placeholder='Email'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <input
            className='rin2'
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br></br>
          <input
            className='rin3'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <input className='rin4' type='password' placeholder='Confirm-Password'></input>
          <br></br>
          <input
            className='rin5'
            type='tel'
            placeholder='Phone number'
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <br></br>
          <select 
  className='rin6' 
  value={Role} 
  onChange={(e) => setRole(e.target.value)}
>
  <option value=''>Select Role</option>
  <option value='role1'>User</option>
  <option value='role2'>Admin</option>
</select>

          <br></br>
          <button className='rBtn' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
