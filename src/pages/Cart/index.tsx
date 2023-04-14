import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import { removeProduct,addProduct } from "../../store/reducers/cartSlice";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import './index.css'
import {ProductCart} from "../../components/ProductCart";


export const Cart = () => {
  const products = useSelector((state: RootState) => state.products.value)
  const cart = useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch()

  return (
    <div>
      {cart.map(({ productId, count }) => {
        const product = products.find(({ id }) => id === productId) as Product

        return (
          <>
            <ProductCart title={product.title} price={product.price} key={product.id} image={product.thumbnail}/>
            <div className='count-container'>
              <button onClick={() => dispatch(removeProduct(product.id))}><IoRemoveSharp /></button>
              <p>{count}</p>
              <button onClick={() => dispatch(addProduct(product.id))}><IoAddSharp /></button>
            </div>
          </>
        )
      })}
    </div>
  );
};