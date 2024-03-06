import React, { FC } from 'react';
import './card.css';

const Card: FC = () => {
  return (
    <div className='shop-card-container'>
      <h3>The Product of the week</h3>
      <button>Explore Items</button>
    </div>
  );
}

export default Card;