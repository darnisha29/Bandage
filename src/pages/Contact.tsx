import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import '../CSS/Contact.css';
import background1 from '../images/Contact/contact-background1.svg'
import background2 from '../images/Contact/contact-background2.svg'
import { Link } from 'react-router-dom';
import contactImg from '../images/Contact/contactImg.svg';

function Contact  ()  {
  return (
    <div className='contact'>

      <Navbar/>
      <div className='hero-section'>

            <div className='hero-content'>
            <h3>Get answers to all your 
                        questions.</h3>

              <p>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>

              <button>Cpntact our Company</button>
              <div className='media'>
                                              <FaInstagram className='media-icon' size={24}/>
                                              <LiaFacebook className='media-icon'size={24}/>
                                              <FaTwitter className='media-icon' size={24}/>

              </div>

      </div>
   </div>
        
        <div className='background1'>
          <img src={background1} alt="" />
          <div className='contant'>
            <h3>Questions & Answers</h3>
            <p>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
            <Link to="">CONTACT US</Link>
          </div>
        </div>

        <div className='background2'>
        <img src={background2} alt="" />
        <div className='background2-content-first'>
          <h3>CONTACT US</h3>
          <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
          <button>CONTACT US</button>
        </div>


        <div className='background2-content-second'>
          <div className='card'>
            <h5>Paris</h5>
            <p>1901 Thorn ridge Cir. </p>
            
            <p>75000 Paris</p>
            <p>Phone ; +451 215 215 </p>
            <p>Fax : +451 215 215</p>
          </div>
          <div className='card'>
            <h5>Berlin</h5>
            <p>4140 Parker Rd.  </p>
           
            <p>75000 Paris</p>
            <p>Phone ; +451 215 215 </p>
            <p>Fax : +451 215 215</p>
          </div>
        </div>


        <div className='background2-content-third'>
          <div className='card'>
            <h5>Paris</h5>
            <p>1901 Thorn ridge Cir. </p>
            
            <p>75000 Paris</p>
            <p>Phone ; +451 215 215 </p>
            <p>Fax : +451 215 215</p>
          </div>
          <div className='card'>
            <h5>Berlin</h5>
            <p>4140 Parker Rd.  </p>
            
            <p>75000 Paris</p>
            <p>Phone ; +451 215 215 </p>
            <p>Fax : +451 215 215</p>
          </div>
        </div>

        </div>

        <div className='work-with-us'>

<div className='work-with-first'>
  <h5>WORK WITH US</h5>
  <h1>Now Let's grow yours</h1>
  <p>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
  <button>Button</button>
</div>
<div className='work-with-second'>
  <img src={contactImg} width={400}/>
</div>

</div>


      <Footer/>
      
    </div>
  )
}

export default Contact
