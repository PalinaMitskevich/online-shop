import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { MainLayout } from "./components/MainLayout";
import { paths } from "./constants";
import { WishList } from "./pages/WishList";
import { ProductDetails } from "./pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, path: paths.HOME, element: <Home /> },
      { path: paths.CART, element: <Cart /> },
      { path: `${paths.PRODUCT}/:productId`, element: <ProductDetails /> },
      { path: paths.WISHLIST, element: <WishList /> },
    ],
  },
]);