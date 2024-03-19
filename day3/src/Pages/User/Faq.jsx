import React from 'react';

import '../../assets/css/Faq.css'; 
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Faq = () => {
  return (
    
    <div>
    <Navbar></Navbar>
    <br></br>
    <div className='sh'>
      <h2>Frequently Asked Questions (FAQ)</h2></div>

      <div className="faq-section">
        <h3>General Questions</h3>
        <div className="question">
          <h4>How to give Enquiry?</h4>
          <p>Go to enquiry page and post your complaints.</p>
        </div>
        <div className="question">
          <h4>Is it free or paid?</h4>
          <p>It is absolutley free for the users enjoy our services.</p>
        </div>
      </div>

      <div className="faq-section">
        <h3>Course Related Questions</h3>
        <div className="question">
          <h4>What courses do you offer?</h4>
          <p>We offer a variety of certification courses including IELTS, TOEFL, PTE, etc.</p>
        </div>
        <div className="question">
          <h4>How long does it take to complete a course?</h4>
          <p>The duration of each course varies. Please refer to the specific course details for more information.</p>
        </div>
      </div>
     <Footer></Footer>
    </div>
  );
};

export default Faq;
