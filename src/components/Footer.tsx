import React from 'react'
import './css/Footer.css'

import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";

function Footer  (): JSX.Element {
  return (
    <div className=' Footer'>
      <div className='footer-head'>
            <h3>Bandage</h3>
            <div className='footer-img'>
           <FaInstagram className='img' size={24}/>
           <LiaFacebook className='img' size ={24}/>
           <FaTwitter className='img' size ={24}/>
            </div>
     
      </div>
      <div className='hr'></div>
      <div className='footer-content'>
        <div className='content'>
          <h5 className='cont-heading'>Company info</h5>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className='content'>
          <h5 className='cont-heading'>Legal</h5>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>

        <div className='content'>
          <h5 className='cont-heading'>Features</h5>
          <p>Bussines Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>

        <div className='content'>
          <h5 className='cont-heading'>Resources</h5>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>

        <div className='content'>
          <h5 className='cont-heading'>Get in Touch</h5>
          
        </div>



      </div>
      <div className='footer-last'>
    <p>Made With Love By Finland All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
