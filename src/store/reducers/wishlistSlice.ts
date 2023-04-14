import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WishlistState {
  value: Array<Product['id']>
}

const initialState: WishlistState = {
  value: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleItem: (state, action: PayloadAction<Product['id']>) => {
      if (state.value.includes(action.payload)) {
        state.value = state.value.filter((id) => id !== action.payload)
      } else {
        state.value.push(action.payload)
      }
    },
    removeFromWishlist: (state, action: PayloadAction<Product['id']>) => {
      state.value = state.value.filter((id) => id !== action.payload)
    },
  },
})

export const { toggleItem, removeFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer