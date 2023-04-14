import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setValue } from "../../store/reducers/productsSlice";

export const MainLayout = () => {
  const products = useSelector((state: RootState) => state.products.value)
  const dispatch = useDispatch()
  console.log(products)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((response) => dispatch(setValue(response.products)))
  }, [])

  return (
    <>
      <Header />
      <div className='main-container'>
        <Outlet />
      </div>
    </>
  );
};

