import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from "react-icons/fi";
import '../CSS/About.css';
import heroImg from '../images/About/heroImg.svg';
import team1 from '../images/About/team-1.svg';
import team2 from '../images/About/team-2.svg';
import team3 from '../images/About/team-3.svg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import Companies from '../components/Companies';
import workImg from '../images/About/work-about.svg'


function About  () {
  return (
    <div className='about-container'>

        <div className='navbar'>
                 <h3>Bandage</h3>

                  <div className='links'>
                    <p>Home</p>
                    <p>Product</p>
                    <p>pricing</p>
                    <p>Contact</p>
                  </div>


                  <div className="nav-last">
                  <div>Login</div>
                  <button>Become a member <FiArrowRight/></button>
                  </div>
         </div>

         <div className='about-heroSection'>

                  <div className='hero-content'>
                          <h5>ABOUT COMPANY</h5>
                          <h3>ABOUT US</h3>
                          <p>We know how large objects will act, 
                              but things on a small scale</p>
                          <button>Get Quote Now</button>
                  </div>

                  <div className='hero-img'>
                          <img src={heroImg} alt=""  width={450}/>
                  </div>
         </div>


         <div className='about-problem'>

                <div className='about-problem-first'>

                              <p>Problems trying</p>
                              <h4>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h4>
                </div>

                  <div className='about-problem-second'>

                          <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                  </div>
         </div>


         <div className='about-clients'>

                <div className='about-clients-content'>

                      <h3>15K</h3>
                      <p>happy customers</p>

                </div>

                <div className='about-clients-content'>

                        <h3>150K</h3>
                        <p>Monthly visitors</p>
                </div>

                <div className='about-clients-content'>

                        <h3>15</h3>
                        <p>Countries  Worldwide</p>

                </div>

                <div  className='about-clients-content'>

                      <h3>100+</h3>
                      <p>Top partners</p>

                </div>

         </div>



          <div className='about-team'>

                <div className='team-title'>

                        <h3>Meet Our Team</h3>
                        <p>Problems trying to resolve the conflict between 
                        the two major realms of Classical physics: Newtonian mechanics </p>

                </div>

                <div className='team-content'>

                        <div className='team-card'>
                                <img src={team1}/>

                                <div className='team-card-txt'>
                                    <h5>Username</h5>
                                    <h6>Profession</h6>

                                    <div className='team-card-media'  >
                                          <FaInstagram className='media' size={24}/>
                                          <LiaFacebook className='media'size={24}/>
                                          <FaTwitter className='media' size={24}/>

                                    </div>
                                </div> 

                        </div>

                        <div className='team-card'>
                                <img src={team2} />

                                <div className='team-card-txt'>
                                    <h5>Username</h5>
                                    <h6>Profession</h6>

                                    <div className='team-card-media' >
                                          <FaInstagram size={24} className='media'/>
                                          <LiaFacebook size={24} className='media'/>
                                          <FaTwitter size={24} className='media'/>
                                    </div>
                                </div> 

                        </div>

                        <div className='team-card'>
                                <img src={team3} />

                                <div className='team-card-txt'>
                                    <h5>Username</h5>
                                    <h6>Profession</h6>

                                    <div className='team-card-media' >
                                          <FaInstagram size={24} className='media' />
                                          <LiaFacebook size={24} className='media' />
                                          <FaTwitter size={24} className='media' />
                                    </div>
                                </div> 

                        </div>
                        

                </div>

          </div>


          <div className='companies-info'>

                <div className='companies-title'>
                          <h3>Big Companies Are Here</h3>
                          <p>Problems trying to resolve the conflict between 
                          the two major realms of Classical physics: Newtonian mechanics </p>
                </div>

                <Companies/>
          </div>

          <div className='work-with-us'>

                      <div className='work-with-first'>
                        <h5>WORK WITH US</h5>
                        <h1>Now Let's grow yours</h1>
                        <p>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                        <button>Button</button>
                      </div>
                      <div className='work-with-second'>
                        <img src={workImg} width={400}/>
                      </div>

          </div>



      <Footer/>
    </div>
  )
}

export default About
