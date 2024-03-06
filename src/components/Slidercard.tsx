import React, { FC } from 'react';
import '../pages/ProductListing.css';

interface SlidercardProps {
  item: {
    image: string;
  };
}

const Slidercard: FC<SlidercardProps> = ({ item }) => {
  return (
    <div className="slider-card">
      <img src={item.image} alt="product image" />
    </div>
  );
}

export default Slidercard;