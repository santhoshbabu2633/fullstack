import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faXTwitter,faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import s from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css'; 

const Footer = () => {
  return (
    
    <footer className="footer">
    <div className='fh'></div>

      <div className="footer-content">

        <div className='icon1'><FontAwesomeIcon icon={faFacebook} /> </div>
        <div className='icon2'><FontAwesomeIcon icon={faInstagram} /> </div>
        <div className='icon3'><FontAwesomeIcon icon={faXTwitter} /> </div>
        <div className='icon4'><FontAwesomeIcon icon={faGoogle} /></div>

      </div>

      <img className='v' src={s}></img><br></br>
      <div className='des'>The Business English Certificate (BEC) is a suite of<br></br>
       English language qualifications offered by<br></br> Cambridge Assessment English,<br></br>
        part of the University of Cambridge.<br></br> Specifically designed for individuals seeking to demonstrate their<br></br> 
        proficiency in English within a business context,<br></br> BEC exams assess language skills relevant to the workplace.</div>
                
        <div class Name='help'><div className='hh'>Help</div> 
        <div className='h1'><Link  className='z11' to='/privacy'>privacy policy</Link></div>
        <div className='h2'><Link className='h21' to='/terms'>terms & condition </Link></div>
        <div className='h3'><Link className='h31' to='/support'>Support</Link></div>
        </div><br></br>
        <div class Name='link'><div className='lh'>Links</div> 
        <div className='l1'><Link  className='l11' to='/certificate'>Certificates</Link></div>
        <div className='l2'><Link className='l21' to='/Enquiry'>Enquiry</Link></div>
        <div className='l3'><Link className='l31' to='/Faq'>FAQ</Link></div>
        </div><br></br>
        <div className='ch'>Contacts</div>
      <div className='icon5'><FontAwesomeIcon icon={faPhone} /> +91 8220447907</div>
      <div className='icon6'><FontAwesomeIcon icon={faMapMarkerAlt} /> 4/448 A.K nagar,<br></br>Kanjirankal,<br></br>Sivagangai</div>
      <div className='icon7'><FontAwesomeIcon icon={faEnvelope} /> santhoshbabusankar2014@gmail.com</div>
      

    </footer>
  );
}

export default Footer;
