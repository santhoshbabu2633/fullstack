import React from 'react';
import '../../assets/css/Login.css';

const Login = () => {
  return (
    <div className='lbg'>
      <br />
      <div className='loginbox1'></div>
      <div className='loginbox'>
        <br />
        <div className='h1'>
          Login
        </div>
        <input className='in1' type='text' placeholder='Username'></input><br></br>
        <input className='in2' type='password' placeholder='Password'></input><br></br>
        <button className='loginBtn' type='submit'>Login</button>
        <div className='n1'>New User ? Register</div>
      </div>
    </div>  
  );
}

export default Login;
