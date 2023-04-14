import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  value: Array<ProductCount>
}

const initialState: CartState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product['id']>) => {
      const cartItem = state.value.find(({ productId }) => productId === action.payload)
      if(cartItem) {
        cartItem.count = cartItem.count + 1
      } else {
        state.value.push({
          productId: action.payload,
          count: 1
        })
      }

    },
    removeProduct: (state, action: PayloadAction<Product['id']>) => {
      const cartItem = state.value.find(({ productId }) => productId === action.payload)
      if(cartItem) {
        if(cartItem.count === 1) {
          state.value = state.value.filter(({ productId }) => productId !== action.payload)
        } else {
          cartItem.count = cartItem.count - 1
        }
      }
    }
  },
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer