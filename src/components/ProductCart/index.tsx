import React from 'react';
import './index.css'

type Props = {
  title: string
  price: number
  image: string
}

export const ProductCart: React.FC<Props> = ({ title , price, image}) => {

  return (
    <div className='cart-product-container'>
      <img src={image} alt={title}/>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};
