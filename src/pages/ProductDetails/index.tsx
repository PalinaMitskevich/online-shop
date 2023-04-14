import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Slider } from "../../components/Slider";
import {RootState} from "../../store";
import { IoHeartOutline } from "react-icons/io5";
import { addProduct } from "../../store/reducers/cartSlice";
import { toggleItem } from "../../store/reducers/wishlistSlice";
import './index.css'

export const ProductDetails: React.FC = () => {
  const dispatch = useDispatch()
  const {productId} = useParams()
  const product = useSelector((state: RootState) => {
    const products = state.products.value
    return products.find(({ id }) => id === +productId!)
  }) as Product

  const handleCartClick = () => {
    dispatch(addProduct(product.id))
  }

  const handleHeartClick = () => {
    dispatch(toggleItem(product.id))
  }

  return (
    <div className='product-details-container'>
      <div className='slider-container'>
        <Slider slides={product.images}/>
      </div>
      <div className='description-container'>
        <p className='title'>{product.title}</p>
        <p className='brand'>{product.brand}</p>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <p>Rate: {product.rating}</p>
        <button onClick={handleCartClick}>Add to cart</button>
        <button onClick={handleHeartClick}><IoHeartOutline /></button>
      </div>
    </div>

  );
};





















