import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setSort} from "../../store/reducers/productsSlice";

const sortArrow: Record<RootState['products']['sort']['price'], JSX.Element | null> = {
  '': null,
  'desc': <IoMdArrowDropdown />,
  'asc': <IoMdArrowDropup />,
}

export const SortAndFilter = () => {
  const sort = useSelector((state: RootState) => state.products.sort)
  const dispatch = useDispatch()

  const handleSortByPrice = () => {
    const sortParams: RootState['products']['sort'] = {
      price: '',
      rate: ''
    }
    if(sort.price === '') {
      sortParams.price = 'asc'
    }
    if(sort.price === 'asc') {
      sortParams.price = 'desc'
    }
    dispatch(setSort(sortParams))
  }

  const handleSortByRate = () => {
    const sortParams: RootState['products']['sort'] = {
      price: '',
      rate: ''
    }
    if(sort.rate === '') {
      sortParams.rate = 'asc'
    }
    if(sort.rate === 'asc') {
      sortParams.rate = 'desc'
    }
    dispatch(setSort(sortParams))
  }

  return (
    <div className='categories-container'>
      <p>Categories</p>
      <p>Brands</p>
      <p onClick={handleSortByPrice}>Prices</p>
      {sortArrow[sort.price]}
      <p onClick={handleSortByRate}>Rates</p>
      {sortArrow[sort.rate]}
    </div>
  );
};