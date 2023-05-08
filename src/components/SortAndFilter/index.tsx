import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setSort, setFilterCategories, setFilterBrands} from "../../store/reducers/productsSlice";
import { DropDown } from "../DropDown";

const sortArrow: Record<RootState['products']['sort']['price'], JSX.Element | null> = {
  '': null,
  'desc': <IoMdArrowDropdown />,
  'asc': <IoMdArrowDropup />,
}

export const SortAndFilter = () => {
  const sort = useSelector((state: RootState) => state.products.sort)
  const filter = useSelector((state: RootState) => state.products.filter)
  const products = useSelector((state: RootState) => state.products.value)
  const categories = products.reduce((accum: Array<DropDownOption>, product) => {
    if(accum.map(({ name }) => name).includes(product.category)) {
      return accum
    } else {
      return [
        ...accum,
        {
          name: product.category,
          checked: filter.categories.includes(product.category)
        }
      ]
    }
  }, [])
  const brands = products.reduce((accum:  Array<DropDownOption>, product) => {
    if(accum.map(({ name }) => name).includes(product.brand)) {
      return accum
    } else {
      return [
        ...accum,
        {
          name: product.brand,
          checked: filter.brands.includes(product.brand)
        }
      ]
    }
  }, [])
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
      <DropDown options={categories} title='Categories' onClick={setFilterCategories}/>
      <DropDown options={brands} title='Brands' onClick={setFilterBrands}/>
      <p onClick={handleSortByPrice}>Prices</p>
      {sortArrow[sort.price]}
      <p onClick={handleSortByRate}>Rates</p>
      {sortArrow[sort.rate]}
    </div>
  );
};