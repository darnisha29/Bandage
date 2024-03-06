import React, { useState } from 'react';
import './Navbar.css';
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { CgFormatJustify } from "react-icons/cg";
import { Link,To } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BiMenuAltRight } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { RootState } from '../filters/store'; 

const Navbar: React.FC = () => {
  const [dropdownmenu, setDropdownmenu] = useState<boolean>(false);
  const firstLetter = useSelector((state: RootState) => state.registrationForm.firstLetter);
  const username = useSelector((state: RootState) => state.registrationForm.username);
  // console.log(username);
  // console.log(firstLetter);

  const dropdownMenu = () => {
    if (!dropdownmenu) {
      setDropdownmenu(true);
      console.log(dropdownmenu);
    } else {
      setDropdownmenu(false);
    }
  };

  return (
    <div>
      <div className='nav' id='navbar'>
        <div className='call'>
          <div><IoCallOutline size={18} /></div>
          <p>(225) 555-0118</p>
        </div>

        <div className='mail'>
          <div><TfiEmail size={14} /></div>
          <div><p>michelle.rivera@example.com</p></div>
        </div>

        <div>
          <p className='offer'>Follow Us  and get a chance to win 80% off</p>
        </div>

        <div className='follow-us'>
          <p>Follow Us  :</p>
          <div className='follow-us-img'>
            <FaInstagram size={18} />
            <FaYoutube size={18} />
            <LiaFacebook size={24} />
            <FaTwitter size={18} />
          </div>
        </div>

        

      </div>
      <div className='second-nav'>
            <div className='logo'>
          <h2 ><Link to='/' className='logo-color' >Bandeg</Link></h2>
          </div>

        <div className='links'>
          <p><Link to={{pathname: `/`} as To}  className='l-color'>Home</Link></p>
          <div>
            <select className="p-shop" name="shop" id="shop" >
              <option value="volvo">Shop</option>
              <option value="saab">B</option>
              <option value="mercedes">C</option>
              <option value="audi">D</option>
            </select>
          </div>
          <div className='link' >
            <div><p><Link to={{pathname: `/about`} as To} className='l-color'>About </Link></p> </div>
            <div><p><Link to = '#' className='l-color'>Blog </Link></p> </div>
            <div><p><Link to ={{pathname: `/contact`} as To}className='l-color'>Contact</Link></p> </div>
            <div><p><Link to = {{pathname: `/product-listing`} as To}className='l-color'>Pages</Link></p></div>
          </div>
        </div>

        <div className='login-register'>
        {firstLetter ? (
          <div className='for-logged'>
            <div className="user-initial">{firstLetter}</div>
        <CiSearch className='second-nav-icon' size={22} />
        <Link to='/cart' className='second-nav-icon'><BsCart size={20}/></Link>
        <Link to={{pathname: `/wishlist`} as To}> <MdFavoriteBorder className='second-nav-icon' size={20} /></Link>
        </div>

      )  :
      <div className='for-not-logged'>
      <p><Link to='login' className='login' >Login / Register</Link></p>
          <CiSearch className='second-nav-icon' size={20} />
          <Link to='/cart' className='second-nav-icon'><BsCart size={20}/></Link>
         <Link to={{pathname: `/wishlist`} as To}> <MdFavoriteBorder className='second-nav-icon' /></Link>
         </div>
}</div>
      </div>

      <div className="nav-for-mob">
        <div>
          <h3>Bandage</h3>
        </div>
        <div className='nav-for-mob-icons'>
        <CiSearch className='second-nav-icon' size={20} />
          <Link to='/cart' className='second-nav-icon'><BsCart /></Link>
          <button onClick={dropdownMenu}>
            <BiMenuAltRight size={20} second-nav-icon/>
            {/* <CgFormatJustify /> */}
          </button>
        </div>
      </div>
      {dropdownmenu ? (
        <div className='second-nav-mob'>
          <div className='links-mob'>
            
              <Link to={{pathname: `/`} as To} className='link-mob'>Home</Link> 
              <Link to={{pathname: `/about`} as To} className='link-mob'>About</Link>
              <Link to={{pathname: `/about`} as To} className='link-mob'>Pricing </Link>
              <Link to={{pathname: `/about`} as To} className='link-mob'>Contact</Link>
              
            
          </div>

          <div className='login-register-mob'>
            <Link to={{pathname: `/login`} as To}>Login / Register</Link>
            
          </div>
        </div>
      ) : null}

    </div>
  );
}

export default Navbar;