import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductsState {
  value: Array<Product>
  searchInputValue: string
  sort: {
    price: 'asc' | 'desc' | '',
    rate: 'asc' | 'desc' | '',
  }
  filter: {
    categories: string,
    brands: string,
  }
}

const initialState: ProductsState = {
  value: [],
  searchInputValue: '',
  sort: {
    price: '',
    rate: '',
  },
  filter: {
    categories: '',
    brands: '',
  }

}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<Array<Product>>) => {
      state.value = action.payload
    },
    setSearchInputValue: (state, action: PayloadAction<string>) => {
      state.searchInputValue = action.payload.toLowerCase()
    },
    setSort: (state, action: PayloadAction<ProductsState["sort"]>) => {
      state.sort = action.payload
    }
  },
})

export const { setValue, setSearchInputValue, setSort } = productsSlice.actions

export default productsSlice.reducer