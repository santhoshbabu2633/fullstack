import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import '../../assets/css/Login.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredUsername = username.trim();
    const enteredPassword = password.trim();
    localStorage.setItem('username', enteredUsername);
    localStorage.setItem('password',enteredPassword)
    console.log('Username saved to local storage:', enteredUsername);
    console.log('Username saved to local storage:', enteredPassword);
    setUsername('');
    setPassword('');
    navigate('/home'); 
  };

  return (
    <div className='lbg'>
      <br />
      <div className='loginbox1'></div>
      <div className='loginbox'>
        <br />
        <div className='h1'>
          Login
        </div>
        <form onSubmit={handleSubmit}>
          <input 
            className='in1' 
            type='text' 
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <input 
            className='in2' 
            type='password' 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button className='loginBtn' type='submit'>Login</button>
        </form>
        <Link to="/register" className='link'><div className='n1'> New one? Register</div></Link>
        <Link to="/forgotpassword" className='link'><div className='fp'>Forgot Password</div></Link>
      </div>
    </div>  
  );
}

export default Login;
