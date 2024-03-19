import React from 'react'
import '../../assets/css/Forgetpassword.css';
const Forgotpassword = () => {
  return (
    <div className='fbg'>
    <br />
    <div className='fbox1'></div>
    <div className='fbox'>
      <br />
      <div className='fh1'>
        Forgot Password
      </div>
      <input className='fin1' type='text' placeholder='Email'></input><br></br>
      <input className='fin2' type='password' placeholder='Password'></input><br></br>
      <input className='fin3' type='password' placeholder='Confirm-Password'></input><br></br>
      <button className='fBtn' type='submit'>Procced</button>
      <div className='fn1'></div>
    </div>
  </div> 
  )
}

export default Forgotpassword