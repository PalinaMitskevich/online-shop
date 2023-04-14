import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import {paths} from "../../constants";

type Props = {
  product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {

  return (
    <div className='product-card'>
      <div className='image-container'>
        <img src={product.thumbnail} className='product-image' alt={product.title}/>
      </div>
      <p className='product-title'>{product.title}</p>
      <p className='product-brand'>{product.brand}</p>
      <p className='product-price'>${product.price}</p>
      <Link to={`..${paths.PRODUCT}/${product.id}`}>
        <button type='button' className='button-more-details' >More details</button>
      </Link>
    </div>
  );
};