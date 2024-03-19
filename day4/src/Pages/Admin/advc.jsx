import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../assets/css/ctable.css';
const advc = () => {
  return (
    <div>
          <Navbar></Navbar>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Level</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Course Offered By</th>
            <th>Fee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IELTS for UK visa & immigration</td>
            <td>-</td>
            <td>IELTS Certification</td>
            <td>-</td>
            <td>IELTS</td>
            <td>INR 16,500</td>
            <td><button>edit</button> <br></br><button className='del'>delete</button></td>
          </tr>
          <tr>
            <td>BEC Higher</td>
            <td>-</td>
            <td>Cambridge Certification</td>
            <td>-</td>
            <td>Cambridge</td>
            <td>₹7,150</td>
            <td><button>edit</button> <br></br><button className='del'>delete</button></td>
          </tr>
          <tr>
            <td>ISE III (CEFR C1)</td>
            <td>-</td>
            <td>Trinity Certified</td>
            <td>4 hrs and 15 min</td>
            <td>Trinity College of London</td>
            <td> £185</td>
            <td><button>edit</button> <br></br><button className='del'>delete</button></td>
          </tr>
          
        </tbody>
      </table>
      <Footer></Footer>
    </div>
  )
}

export default advc

