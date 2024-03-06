import React from 'react'
import './Companies.css'

import brand3 from '../components/productListing-images/Vector (52).svg';
import  brand2 from '../components/productListing-images/fa-brands-2.svg';
import brand1 from '../components/productListing-images/Vector (51).svg';
import brand4 from '../components/productListing-images/Vector (53).svg';
import brand5 from '../components/productListing-images/Vector (54).svg';
import brand6 from '../components/productListing-images/Vector (55).svg'; 

const Companies = () => {
  return (
    
      <div className='companies'>
                              <img src = {brand1}/>
                              <img src = {brand2}/>
                              <img src = {brand3}/>
                              <img src = {brand4}/>
                              <img src = {brand5}/>
                              <img src = {brand6}/>
                </div>
    
  )
}

export default Companies
