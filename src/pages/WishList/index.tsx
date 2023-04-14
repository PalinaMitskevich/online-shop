import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {ProductCart} from "../../components/ProductCart";
import {addProduct} from "../../store/reducers/cartSlice";
import {removeFromWishlist} from '../../store/reducers/wishlistSlice'

export const WishList = () => {
  const products = useSelector((state: RootState) => state.products.value)
  const wishlist = useSelector((state: RootState) => state.wishlist.value)
  const dispatch = useDispatch()

  return (
    <div>
      {wishlist.map((currentId) => {
        const product = products.find(({ id }) => id === currentId) as Product

        return (
          <div>
            <ProductCart title={product.title} price={product.price} image={product.thumbnail} key={product.id} />
            <button onClick={() => {
              dispatch(addProduct(product.id))
              dispatch(removeFromWishlist(product.id))
            }
            }>Move to cart</button>
            <button onClick={() => dispatch(removeFromWishlist(product.id))}>Delete</button>
          </div>
        )
      })}
    </div>
  );
};