import React from 'react';
import { paths } from "../../constants";
import {Link } from "react-router-dom";
import { IoSearchOutline, IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSearchInputValue } from "../../store/reducers/productsSlice";
import './index.css';

export const Header = () => {

  const dispatch = useDispatch()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInputValue(event.target.value))
  }

  return (
    <div className='header'>
      <Link to={paths.HOME}>
        <p className='logo'>Logo</p>
      </Link>
      <div className='search-input-group'>
        <IoSearchOutline className='search-icon'/>
        <input type='search'  className='search-input' placeholder='Search' onChange={handleInputChange}/>
      </div>
        <Link to={paths.WISHLIST} className='wishlist'>
          <IoHeartOutline className='heart-icon'/>
          <p className= 'header-text'>Wishlist</p>
        </Link>
        <Link to={paths.CART} className='cart'>
          <IoCartOutline className='cart-icon'/>
          <p className= 'header-text'>Cart</p>
        </Link>
    </div>
  );
};