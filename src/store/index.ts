import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./reducers/productsSlice";
import cartReducer from "./reducers/cartSlice";
import  wishlistReducer from "./reducers/wishlistSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch