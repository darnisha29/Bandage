import React, { FC } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/Navbar';
import './Home.css';
import fsimg from '../components/productListing-images/technology 1 (1).svg';
import brand3 from '../components/productListing-images/Vector (52).svg';
import brand2 from '../components/productListing-images/fa-brands-2.svg';
import brand1 from '../components/productListing-images/Vector (51).svg';
import brand4 from '../components/productListing-images/Vector (53).svg';
import brand5 from '../components/productListing-images/Vector (54).svg';
import brand6 from '../components/productListing-images/Vector (55).svg';
import first from  '../images/home/cat-first.svg';
import second from  '../images/home/cat-second.svg';
import third from '../images/home/cat-third.svg';
import fourth from '../images/home/cat-fourth.svg';
import ProductCard from '../components/ProductCard';
import {useDispatch, useSelector } from 'react-redux';
import {add,remove} from "../filters/filtred-product/CartSlice";
import featureFirst from '../images/home/home-feature-first.svg';
import featureSecond from '../images/home/home-feature-second.svg';
import { Link,To } from 'react-router-dom';
import BestSellerSlice from '../filters/filtred-product/Best-SellerSlice';
import { RootState } from '../filters/store';

interface Product {
  id: number; // Make sure id property is defined in the Product interface
  category: string;
  // Define other properties here...
}
const Home: FC = () => {
  const products = useSelector((state: RootState) => state.BestSellerSlice.BestSellerData);
    console.log(products);
  
    
  
    const crockeryProducts = products.filter((product: Product) => product.id <= 8);
    console.log("crockeryProducts", crockeryProducts);
  return (
    <div>
      <Navbar />
      <div className='main-container'>
        <div className='main-container-txt'>
          <h5 className='main-t txt'>SUMMER 2020</h5>
          <h1 className='txt'>NEW COLLECTION</h1>
          <h4 className='main-para txt'>
            We know how large objects will act, <br />
            but things on a small scale.
          </h4>
          <button className='shop-btn'>SHOP NOW</button>
        </div>
        <div className='main-img'>
          <div className='first-circle-white circle'></div>
          <div className='second-circle-white circle '></div>
          <img src={fsimg} alt='' />
          <div className='third-white-circle circle'></div>
          <div className='first-cirlce-purple circle'></div>
          <div className='second-white-circle circle'></div>
        </div>
      </div>

      <div className='brands'>
        <img src={brand1} />
        <img src={brand2} />
        <img src={brand3} />
        <img src={brand4} />
        <img src={brand5} />
        <img src={brand6} />
      </div>
      <div className='home-category'>

            <div className='home-category-title'>
              <h3>EDITOR’S PICK</h3>
              <p>Problems trying to resolve the conflict between </p>
            </div>

            <div className='home-category-imgs-row'>

                 <div className='first-img'><img src={first} alt="" className='first' /> </div>
                   <div>   <img src={second} alt="" className='second' /></div>

                    <div className='home-category-imgs-column'>
                      <img src={third} alt="" className='third'/>
                      <img src={fourth} alt="" className='fourth'/>
                    </div>
            </div>

      </div>

      <div className='home-best-seller'>
        <div className='home-best-seller-title'>

          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>

        <div className='home-best-seller-cards'>
        {/* <ProductCard />  */}
        <div className='product_detail_cards'>
      {crockeryProducts.map((item:any   ) => {
        return (
          <Link to={{
            pathname: `/product-detail/id =${item.id}`,
            state: { product: item } // Pass the entire product object as state
          } as To} key={item.id} className='card'>
          <div className='card' key={item.design}>
            <div>
              <img className='productcard-detail-img' src={item.image} alt={item.design} />
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
          </Link>
        );
      })}
    </div>
        </div>
      </div>



      <div className='feture-product-row'>
        <div className='feture-product-row-img'>
          <img src={featureFirst} className='img1'/>
          <img src={featureSecond} className='img2'/>
          </div>
          <div className='feture-product-row-cont'>
            <h5>Featured Products</h5>
            <h3>We love what we do</h3>
            <p>Problems trying to resolve the conflict between 
the two major realms of Classical physics: 
Newtonian mechanics.
 
 </p>
            <p>Problems trying to resolve the conflict between 
the two major realms of Classical physics: 
Newtonian mechanics.
 
 </p>
          </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Home;