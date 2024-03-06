import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../filters/store';
import { removeFav } from '../filters/filtred-product/WishListSlice';
import { FavItem } from '../filters/filtred-product/WishListSlice';
import { BiMenuAltRight } from "react-icons/bi";
import { Link,To } from 'react-router-dom';
import './WishList.css';
import Navbar from '../components/Navbar';

import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineClear } from "react-icons/md";



interface Product {
    id: number; 
    category: string;
 
  }
const WishlistPage: React.FC = () => {
  const [dropdownmenu, setDropdownmenu] = useState<boolean>(false);
  const firstLetter = useSelector((state: RootState) => state.registrationForm.firstLetter);

  const wishlist: FavItem[] = useSelector((state: RootState) => state.Whishlist);
  const  username  = useSelector((state: RootState) => state.registrationForm.username);

  console.log(username);
  const dispatch = useDispatch();

  const removeFromWishlist = (id: number) => {
    dispatch(removeFav(id));
  };
  console.log(wishlist);

  const dropdownMenu = () => {
    if (!dropdownmenu) {
      setDropdownmenu(true);
      console.log(dropdownmenu);
    } else {
      setDropdownmenu(false);
    }
  };

  const products = useSelector((state: any) => state.filter.filterdata);
  console.log("total products---------", products);


const items = products.filter((product: Product) => {
    return wishlist.some((item: FavItem) => item.id === product.id);
  });
  console.log("items in wishlist ---------------",items);

  return (
    <div className="wishlist-page">
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

      <h1>My Wishlist</h1>
      
      <div className="wishlist-items">
        {items.map((item:any) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} width={150} />
              <button onClick={() => removeFromWishlist(item.id)} className='remove'><MdOutlineClear/></button>
            <div className='wishlist-item-info'>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
            </div>
            <div><button className='add-to-cart'>Add to cart </button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
