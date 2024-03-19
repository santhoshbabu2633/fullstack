import React from 'react'
import '../../assets/css/Register.css'
const Register = () => {
  return (
    <div className='rbg'>
      <br />
      <div className='rbox1'></div>
      <div className='rbox'>
        <br />
        <div className='rh1'>
        Register
        </div>
        <input className='rin1' type='text' placeholder='Email'></input><br></br>
        <input className='rin2' type='text' placeholder='Username'></input><br></br>
        <input className='rin3' type='password' placeholder='Password'></input><br></br>
        <input className='rin4' type='password' placeholder='Confirm-Password'></input><br></br>
        <input className='rin5' type='tel' placeholder='Phone number'></input><br></br>
        <select className='rin6'>
          <option value="">Select Role</option>
          <option value="role1">User</option>
          <option value="role2">Admin</option>
         
        </select><br></br>
        <button className='rBtn' type='submit'>Register</button>

      </div>
    </div>  
   
  )
}

export default Register