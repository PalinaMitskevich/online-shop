import React from 'react';
import './index.css'
import {SortAndFilter} from "../../components/SortAndFilter";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {ProductCard} from "../../components/ProductCard";

export const Home = () => {
  const products = useSelector((state: RootState) => state.products.value)
  const searchInputValue = useSelector((state: RootState) => state.products.searchInputValue)
  const sort = useSelector((state: RootState) => state.products.sort)

  return (
    <div>
      <div className='main-image'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/phone.jpg`}  className='advert-image' alt='image'/>
        <p className='text-header'>Enjoy convenience without compromise</p>
        <button className='button-header'>Shop now</button>
      </div>
      <div className='main-layout'>
        <SortAndFilter />
        <div className='products-container'>
          {products
            .filter(({ brand, category, title }) => {
              if (searchInputValue === '') {
                return true
              }
              const productBrand = brand.toLowerCase()
              const productCategory = category.toLowerCase()
              const productTitle = title.toLowerCase()

              return productBrand.includes(searchInputValue)
                || productCategory.includes(searchInputValue)
                || productTitle.includes(searchInputValue)
            })
            .sort((a, b) => {
              if (sort.price === 'asc') return a.price - b.price
              if (sort.price === 'desc') return b.price - a.price
              if (sort.rate === 'asc') return a.rating - b.rating
              if (sort.rate === 'desc') return b.rating - a.rating
              return 0
            })
            .map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};
