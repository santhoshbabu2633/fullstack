import React from 'react';
import '../../assets/css/ctable.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
const CourseTable = () => {
  return (
    <div className="course-table">
    <Navbar></Navbar>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Email Id</th>
            <th>Enquiry Type</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IELTS for UK visa & immigration</td>
            <td>How to apply ?</td>
            <td>babu@gmail.com</td>
            <td>Complaint</td>
            <td><button>Delete</button></td>
        
          </tr>
          <tr>
            <td>IELTS for UK visa & immigration</td>
            <td>How to apply ?</td>
            <td>babu@gmail.com</td>
            <td>Complaint</td>
            <td><button>Delete</button></td>
        
          </tr>
          <tr>
            <td>IELTS for UK visa & immigration</td>
            <td>How to apply ?</td>
            <td>babu@gmail.com</td>
            <td>Complaint</td>
            <td><button>Delete</button></td>
        
          </tr>
          <tr>
            <td>IELTS for UK visa & immigration</td>
            <td>How to apply ?</td>
            <td>babu@gmail.com</td>
            <td>Complaint</td>
            <td><button>Delete</button></td>
        
          </tr>
          
          
        </tbody>
      </table>
      <Footer></Footer>
    </div>
  );
};

export default CourseTable;
