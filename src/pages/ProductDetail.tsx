import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import {products_data} from '../API/productsData'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../CSS/ProductDetail.css';
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import { IoEye } from "react-icons/io5";
// import { FaViadeoSquare } from 'react-icons/fa';
import {useDispatch, useSelector } from 'react-redux';
import { RootState } from '../filters/store';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { addFav,removeFav } from '../filters/filtred-product/WishListSlice';
import {add,remove} from "../filters/filtred-product/CartSlice";
import { useLocation, useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import { click } from '@testing-library/user-event/dist/click';
import { FavItem } from '../filters/filtred-product/WishListSlice';
import { subscribe } from 'diagnostics_channel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import BestSellerSlice from '../filters/filtred-product/Best-SellerSlice';
// import { FaHeart } from 'react-icons/fa';
// import faheat
interface Product {
  id: number; // Make sure id property is defined in the Product interface
  category: string;
  // Define other properties here...
}
function ProductDetail  ( )  {
  const [selectedcolor,setSelectedcolor] = useState('');
  const[counter, setCounter] = useState(1);
  const [ids,setids] = useState([]);
  const { category } = useParams(); // Get the category parameter from the URL
  const {images} = useParams();
  const {cart} = useSelector((state:any) => state);
  const dispatch = useDispatch();
  const location = useLocation();
  // const {wishlist} = useSelector((state:any) => state);
  const { Whishlist } = useSelector((state:  RootState) => state)as { Whishlist: FavItem[] }; 
  const [favitem,setFavitem] = useState(false);
  const [cartitem,setCartitem] =useState(false);
  const [color,setColor] = useState('');

  const colorHandler = (color:any) => {
    setColor(color);
    console.log(color);
  }
  
  // console.log("wishlist-----------------------------",wishlist);


  const id = location.pathname.split("").at(-1);

  // console.log(id);


const favHandler = (id: number) => {

  if (!favitem) {
      // wishlist.push({id});
    setFavitem(true);
    const newFavItem: FavItem = { id };
    dispatch(addFav(newFavItem)); 
    console.log("wishlist-----------------------------",Whishlist);
    toast.success(`Product added to wishlist`);
    
  }
  else{
    setFavitem(false);
    dispatch(removeFav(id)); 
    toast.success(`Product removed from wishlist`);
  }
}



  const addToCart = () => {

    if(cart.includes(item)){
      setCounter(prev=> prev +1 );
    }
    if(!cartitem){
      setCartitem(true);
      console.log("color--------------",color);
      console.log({subprices: item.price,...item, quantity: 1,TotalPrice:0,color: color});
       dispatch(add({subprices: item.price,...item, quantity: 1,TotalPrice:0,color: color}));
       console.log(item.price);
      toast.success("Item added to Cart");
    }
    else{
      setCartitem(false);
       dispatch(remove(item.id)); 
    toast.success(`Product removed from cart`);
    }

    
    
  }

  const sellerData = useSelector((state:RootState) => state.BestSellerSlice.BestSellerData);
  

  const products = useSelector((state: any) => state.filter.filterdata);
  console.log(products);

  

  const crockeryProducts = products.filter((product: Product) => product.category === "crokery");
  console.log("crockeryProducts", crockeryProducts);



  // console.log(id);
  // for(let i = 0; i < products.length; i++){
  //   console.log(products[i].id);
  //   if(id){
  //     if(products[i].id == +id){
  //       console.log(products[i]);
  //     }
  //   }
  // }
  const item = products.find((product: any) => product.id == id);
  console.log(item);
  const selectedItem = item;
  console.log(item);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedcolor(event.currentTarget.id);
    console.log('Button clicked:', selectedcolor);
  }
  
  
  
  return (
    <div className='product-container'>
      <Navbar/>
      <div className='cart-to-home'>
         <span> <Link to='/'>Home </Link>   /   Cart  </span>

      </div>
    <div className='details'>

              <div className='detail-slides'>
              <div >
                              <img src={selectedItem.image} alt={`Shop ${item}`} height={'440vw'} width={'500vw'} />
                            </div>
                    {/* <Slider {...settings} className='`sliding`'>
                        { selectedItem.images.map((item: string, index: number) => {
                          return (
                            <div >
                              <img src={selectedItem.image} alt={`Shop ${item}`} height={'440vw'} width={'500vw'} />
                            </div>
                          );
                        })}
                      </Slider> */}
              </div>

                  <div className='detail-info'>
                    <h3 >{selectedItem.name}</h3>
                    <p className='rates'>{selectedItem.rates}</p>
                    <p className='price'>${selectedItem.price}</p>
                    <p className='description'>{selectedItem.description}</p>
                    <div className='hr'></div>
                    <div className='Colors' >  
                           {selectedItem && Array.isArray(selectedItem.colors) && selectedItem.colors.map((color: string, index: number) => (
                             <button onClick={ () => colorHandler(color)} key={index} className='color' style={{ backgroundColor: color }} id={color}></button>
                           ))}
                        
                    </div>
                    <div className='buttons'>
                        <button className='button'>Select options</button>
                        <button className='icons fav-btn' onClick = {() =>favHandler(selectedItem.id )}>{favitem ?<FaHeart  size={20}/>: <MdFavoriteBorder className='faheart' size={18}/>}</button>
                        <button className='icons cart-btn' onClick={() => addToCart()}>{cartitem?<FaCartShopping size = {20}/>:<PiShoppingCart size={18}/>}</button>
                        <button className='icons eye-btn'><IoEye/></button>
                    </div>
                    
                  </div>

              </div>


              
    <div className='product_detail_cards'>
      {crockeryProducts.map((item:any   ) => {
        return (
          <div className='card' key={item.design}>
            <div>
              <img className='productcard-detail-img' src={item.image} alt={item.design}   />
            </div>
            <p className='design'>{item.design}</p>
            <p className='department'>{item.department}</p>
            <div>
              <p>
               <span className='gray'> {item.price1}</span> <span className='green'> {item.price1}</span>
              </p>
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  
                  
              
                        


      <Footer/>
    </div>
  )
}

export default ProductDetail;
